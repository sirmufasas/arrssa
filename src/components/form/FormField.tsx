import type { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  full?: boolean;
  hint?: string;
}

export function Field({ id, label, required, error, children, full, hint }: FieldProps) {
  return (
    <div className={`form-field ${full ? "form-field--full" : ""}`}>
      <label htmlFor={id}>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && (
        <span style={{ fontSize: 12.5, color: "var(--ink-mute)" }}>{hint}</span>
      )}
      {error && (
        <span className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function FormStatusBanner({
  status,
  error,
}: {
  status: "idle" | "loading" | "success" | "error";
  error?: string | null;
}) {
  if (status === "success") {
    return (
      <div className="form-status form-status--success" role="status">
        <AlertCircle size={18} aria-hidden="true" />
        <span>Thank you — your message has been received. Our team will respond shortly.</span>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="form-status form-status--error" role="alert">
        <AlertCircle size={18} aria-hidden="true" />
        <span>{error ?? "Something went wrong. Please try again."}</span>
      </div>
    );
  }
  return null;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
