import { useLocation } from "react-router-dom";

/** True when the site is shown inside the client presentation iframes. */
export function useEmbed(): boolean {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  if (params.get("embed") === "1") return true;
  if (typeof window !== "undefined" && window.self !== window.top) return true;
  return false;
}
