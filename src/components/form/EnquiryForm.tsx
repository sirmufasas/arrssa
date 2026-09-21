import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Send } from "lucide-react";
import { useNetlifyForm } from "../../hooks/useNetlifyForm";
import { ENQUIRY_SERVICES, HEARING_SOURCES, INDUSTRIES } from "../../data/site";
import { Field, FormStatusBanner, isValidEmail } from "./FormField";
import ConfirmationModal from "../ConfirmationModal";
import { useTranslate } from "../../context/LanguageContext";

interface Errors {
  [key: string]: string;
}

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  industry: "",
  scope: "",
  message: "",
  hearing: "",
  consent: "",
};

export default function EnquiryForm() {
  const { status, error, submit, setStatus } = useNetlifyForm("enquiry");
  const [values, setValues] = useState({ ...EMPTY });
  const [errors, setErrors] = useState<Errors>({});
  const tr = useTranslate();

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = tr("Please enter your full name.");
    if (!isValidEmail(values.email)) next.email = tr("Please enter a valid email address.");
    if (!values.service) next.service = tr("Please select the service you require.");
    if (!values.message.trim()) next.message = tr("Please tell us a little about your enquiry.");
    if (!values.consent) next.consent = tr("Please confirm your consent to continue.");
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
      setValues({ ...EMPTY });
    }
  };

  const closeConfirmation = () => {
    setStatus("idle");
  };

  return (
    <>
      <ConfirmationModal
        open={status === "success"}
        title={tr("Enquiry Received")}
        message={tr(
          "Thank you for contacting ARSSA. We've received your enquiry and our team will review it and respond with next steps shortly."
        )}
        onClose={closeConfirmation}
      />
      <form className="form-panel" name="enquiry" data-netlify="true" onSubmit={onSubmit} noValidate>
        <input type="hidden" name="form-name" value="enquiry" />
        <div className="honeypot" aria-hidden="true">
          <label>
            Do not fill this out if you are human
            <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <FormStatusBanner status={status} error={error} />

        <div className="form-grid">
          <Field id="enq-name" label={tr("Full Name")} required error={errors.name}>
            <input
              id="enq-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              className={errors.name ? "invalid" : ""}
              required
            />
          </Field>

          <Field id="enq-company" label={tr("Company")}>
            <input
              id="enq-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={set("company")}
            />
          </Field>

          <Field id="enq-email" label={tr("Email")} required error={errors.email}>
            <input
              id="enq-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={set("email")}
              className={errors.email ? "invalid" : ""}
              required
            />
          </Field>

          <Field id="enq-phone" label={tr("Phone")}>
            <input
              id="enq-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
            />
          </Field>

          <Field id="enq-country" label={tr("Country")}>
            <input
              id="enq-country"
              name="country"
              type="text"
              autoComplete="country-name"
              placeholder="e.g. South Africa"
              value={values.country}
              onChange={set("country")}
            />
          </Field>

          <Field id="enq-service" label={tr("Service Required")} required error={errors.service}>
            <select
              id="enq-service"
              name="service"
              value={values.service}
              onChange={set("service")}
              className={errors.service ? "invalid" : ""}
              required
            >
              <option value="">{tr("Select a service…")}</option>
              {ENQUIRY_SERVICES.map((s) => (
                <option key={s} value={s}>
                  {tr(s)}
                </option>
              ))}
            </select>
          </Field>

          <Field id="enq-industry" label={tr("Industry")}>
            <select id="enq-industry" name="industry" value={values.industry} onChange={set("industry")}>
              <option value="">{tr("Select an industry…")}</option>
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>
                  {tr(i)}
                </option>
              ))}
            </select>
          </Field>

          <Field id="enq-hearing" label={tr("How did you hear about us?")}>
            <select id="enq-hearing" name="hearing" value={values.hearing} onChange={set("hearing")}>
              <option value="">{tr("Select an option…")}</option>
              {HEARING_SOURCES.map((h) => (
                <option key={h} value={h}>
                  {tr(h)}
                </option>
              ))}
            </select>
          </Field>

          <Field id="enq-scope" label={tr("Estimated Project Scope")} full>
            <input
              id="enq-scope"
              name="scope"
              type="text"
              placeholder={tr("Tell us about your project or enquiry...")}
              value={values.scope}
              onChange={set("scope")}
            />
          </Field>

          <Field id="enq-message" label={tr("Message")} required error={errors.message} full>
            <textarea
              id="enq-message"
              name="message"
              value={values.message}
              onChange={set("message")}
              className={errors.message ? "invalid" : ""}
              required
              placeholder={tr("Tell us what you need and how ARSSA can support your objectives…")}
            />
          </Field>

          <label className="consent" htmlFor="enq-consent">
            <input
              id="enq-consent"
              name="consent"
              type="checkbox"
              checked={values.consent === "yes"}
              onChange={(e) =>
                setValues((v) => ({ ...v, consent: e.target.checked ? "yes" : "" }))
              }
            />
            <span>
              {tr("I agree to the processing of my information in accordance with the")}{" "}
              <Link to="/privacy">ARSSA Privacy Policy</Link>.
            </span>
          </label>
          {errors.consent && (
            <span className="field-error form-field--full" role="alert">
              {errors.consent}
            </span>
          )}

          <div className="form-field--full">
            <button
              type="submit"
              className="btn btn--accent btn--lg"
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
                  {tr("Submit Enquiry")}
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
