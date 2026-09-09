import { useState } from "react";

export type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Submits a form to Netlify Forms using fetch with FormData.
 * Works with both production deployments and local development
 * (Netlify dev proxies the form submission endpoint).
 */
export async function submitNetlifyForm(
  _formName: string,
  formData: FormData
): Promise<boolean> {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(
      Object.fromEntries(formData.entries()) as Record<string, string>
    ).toString(),
  });

  // Netlify returns 204 No Content on success
  if (res.status === 200 || res.status === 204) {
    try {
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = (await res.json()) as { success?: string; message?: string };
        if (data.success === "false") return false;
      }
    } catch {
      /* ignore parse issues */
    }
    return true;
  }

  // Fallback: some environments echo the status in the payload
  try {
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = (await res.json()) as { success?: string };
      if (data.success === "true") return true;
    }
  } catch {
    /* ignore */
  }

  return false;
}

export function useNetlifyForm(formName: string) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (formData: FormData): Promise<boolean> => {
    setStatus("loading");
    setError(null);
    try {
      const ok = await submitNetlifyForm(formName, formData);
      if (ok) {
        setStatus("success");
        return true;
      }
      setStatus("error");
      setError("Your message could not be sent. Please try again or email us directly.");
      return false;
    } catch {
      setStatus("error");
      setError(
        "A network error occurred while sending your message. Please try again or email us directly."
      );
      return false;
    }
  };

  return { status, error, submit, setStatus, setError };
}
