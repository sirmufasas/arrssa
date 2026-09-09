import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useNetlifyForm } from "../../hooks/useNetlifyForm";
import { ENQUIRY_SERVICES, HEARING_SOURCES, INDUSTRIES } from "../../data/site";
import { Field, FormStatusBanner, isValidEmail } from "./FormField";

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
  const { status, error, submit } = useNetlifyForm("enquiry");
  const [values, setValues] = useState({ ...EMPTY });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!isValidEmail(values.email)) next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select the service you require.";
    if (!values.message.trim()) next.message = "Please tell us a little about your enquiry.";
    if (!values.consent) next.consent = "Please confirm your consent to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => fd.append(k, v));
    const ok = await submit(fd);
    if (!ok) {
      setValues({ ...EMPTY });
    }
  };

  const success = status === "success";

  if (success) {
    return (
      <div className="form-panel" role="status">
        <div style={{ textAlign: "center", padding: "32px 8px" }}>
          <CheckCircle2 size={52} color="var(--green)" style={{ margin: "0 auto 20px" }} aria-hidden="true" />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 12 }}>
            Enquiry Received
          </h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: 440, margin: "0 auto 28px" }}>
            Thank you for contacting ARSSA. Our team will review your enquiry and respond
            with next steps. For urgent matters, you can reach us directly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/" className="btn btn--primary">
              Return Home
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact ARSSA
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form-panel" name="enquiry" data-netlify="true" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="form-name" value="enquiry" />
      {/* Honeypot — humans never see this */}
      <div className="honeypot" aria-hidden="true">
        <label>
          Do not fill this out if you are human
          <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <FormStatusBanner status={status} error={error} />

      <div className="form-grid">
        <Field id="enq-name" label="Full Name" required error={errors.name}>
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

        <Field id="enq-company" label="Company">
          <input
            id="enq-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
          />
        </Field>

        <Field id="enq-email" label="Email" required error={errors.email}>
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

        <Field id="enq-phone" label="Phone / WhatsApp">
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        </Field>

        <Field id="enq-country" label="Country">
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

        <Field id="enq-service" label="Service Required" required error={errors.service}>
          <select
            id="enq-service"
            name="service"
            value={values.service}
            onChange={set("service")}
            className={errors.service ? "invalid" : ""}
            required
          >
            <option value="">Select a service…</option>
            {ENQUIRY_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field id="enq-industry" label="Industry">
          <select id="enq-industry" name="industry" value={values.industry} onChange={set("industry")}>
            <option value="">Select an industry…</option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>

        <Field id="enq-hearing" label="How did you hear about us?">
          <select id="enq-hearing" name="hearing" value={values.hearing} onChange={set("hearing")}>
            <option value="">Select an option…</option>
            {HEARING_SOURCES.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </Field>

        <Field id="enq-scope" label="Estimated Project Scope" full>
          <input
            id="enq-scope"
            name="scope"
            type="text"
            placeholder="e.g. Market entry assessment for a pharmaceutical product line"
            value={values.scope}
            onChange={set("scope")}
          />
        </Field>

        <Field id="enq-message" label="Message" required error={errors.message} full>
          <textarea
            id="enq-message"
            name="message"
            value={values.message}
            onChange={set("message")}
            className={errors.message ? "invalid" : ""}
            required
            placeholder="Tell us what you need and how ARSSA can support your objectives…"
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
            I agree to the processing of my information in accordance with the{" "}
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
                Sending…
              </>
            ) : (
              <>
                Submit Enquiry
                <Send size={18} aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
