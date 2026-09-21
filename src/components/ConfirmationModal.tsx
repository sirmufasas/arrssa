import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, X } from "lucide-react";
import { useTranslate } from "../context/LanguageContext";

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

/**
 * A centered popup shown after a form submits successfully.
 * Rendered via a portal so it always sits above the page content.
 */
export default function ConfirmationModal({ open, title, message, onClose }: ConfirmationModalProps) {
  const tr = useTranslate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="confirm-modal__backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="confirm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="confirm-modal__close"
          onClick={onClose}
          aria-label={tr("Close")}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <CheckCircle2 size={54} color="var(--green)" aria-hidden="true" />
        <h2 id="confirm-modal-title">{tr(title)}</h2>
        <p>{tr(message)}</p>
        <button type="button" className="btn btn--primary" onClick={onClose}>
          {tr("Close")}
        </button>
      </div>
    </div>,
    document.body
  );
}
