import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { ShieldOff } from "lucide-react";

const STORAGE_KEY = "arssa_presentation_view_used";

type GateState = "checking" | "open" | "expired";

/**
 * One-session preview lock for THIS browser only.
 * Not cryptographic DRM. Screenshots, print/PDF copies, and another
 * browser/device are outside this control — that cannot be prevented.
 */
export default function OneTimeGate({ children }: { children: ReactNode }) {
  const [params] = useSearchParams();
  const [state, setState] = useState<GateState>("checking");

  useEffect(() => {
    try {
      if (params.get("fresh") === "1") {
        localStorage.removeItem(STORAGE_KEY);
      }
      if (localStorage.getItem(STORAGE_KEY) === "used") {
        setState("expired");
        return;
      }
    } catch {
      /* private mode may block storage; still allow this session */
    }

    setState("open");

    const consume = () => {
      try {
        localStorage.setItem(STORAGE_KEY, "used");
      } catch {
        /* ignore */
      }
    };

    // Expire when they leave the page (close tab, go elsewhere, refresh)
    window.addEventListener("pagehide", consume);
    window.addEventListener("beforeunload", consume);

    return () => {
      window.removeEventListener("pagehide", consume);
      window.removeEventListener("beforeunload", consume);
    };
  }, [params]);

  if (state === "checking") {
    return <div className="gate-screen gate-screen--wait">Checking access…</div>;
  }

  if (state === "expired") {
    return (
      <div className="gate-screen">
        <ShieldOff size={40} aria-hidden="true" />
        <h1>This preview has expired</h1>
        <p>
          This confidential presentation was issued for a single viewing session. It has already
          been opened on this browser and cannot be opened again from here.
        </p>
        <p className="gate-screen__note">
          Request a new preview from ARSSA if you still need access.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
