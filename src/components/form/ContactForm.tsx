import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { useNetlifyForm } from "../../hooks/useNetlifyForm";
import { Field, FormStatusBanner, isValidEmail } from "./FormField";
import ConfirmationModal from "../ConfirmationModal";
import { useTranslate } from "../../context/LanguageContext";

interface Errors {
  [key: string]: string;
}

export default function ContactForm() {
  const { status, error, submit, setStatus } = useNetlifyForm("contact");
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const tr = useTranslate();

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = tr("Please enter your name.");
    if (!isValidEmail(values.email)) next.email = tr("Please enter a valid email address.");
    if (!values.message.trim()) next.message = tr("Please enter a message.");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => fd.append(k, v));
    const ok = await submit(fd);
    if (ok) {
      setValues({ name: "", email: "", phone: "", message: "" });
    }
  };

  const closeConfirmation = () => {
    setStatus("idle");
  };

  return (
    <>
      <ConfirmationModal
        open={status === "success"}
        title={tr("Message Sent")}
        message={tr(
          "Thank you for reaching out to ARSSA. We've received your message and will get back to you as soon as possible."
        )}
        onClose={closeConfirmation}
      />
      <form className="form-panel" name="contact" data-netlify="true" onSubmit={onSubmit} noValidate>
        <input type="hidden" name="form-name" value="contact" />
        <div className="honeypot" aria-hidden="true">
          <label>
            Do not fill this out if you are human
            <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <FormStatusBanner status={status} error={error} />

        <div className="form-grid">
          <Field id="ct-name" label={tr("Name")} required error={errors.name}>
            <input
              id="ct-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              className={errors.name ? "invalid" : ""}
              required
            />
          </Field>

          <Field id="ct-email" label={tr("Email")} required error={errors.email}>
            <input
              id="ct-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={set("email")}
              className={errors.email ? "invalid" : ""}
              required
            />
          </Field>

          <Field id="ct-phone" label={tr("Phone")} full>
            <input
              id="ct-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
            />
          </Field>

          <Field id="ct-message" label={tr("Message")} required error={errors.message} full>
            <textarea
              id="ct-message"
              name="message"
              value={values.message}
              onChange={set("message")}
              className={errors.message ? "invalid" : ""}
              required
              placeholder={tr("How can we help?")}
            />
          </Field>

          <div className="form-field--full">
            <button
              type="submit"
              className="btn btn--primary btn--lg"
              style={{ width: "100%" }}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="spinner" aria-hidden="true" />
                  {tr("Sending…")}
                </>
              ) : (
                <>
                  {tr("Send Message")}
                  <Send size={18} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
