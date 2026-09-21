/**
 * notify-enquiry
 * ----------------------------------------------------------------------
 * Fires whenever the "enquiry" or "contact" Netlify Form is submitted.
 *
 * SETUP (one-time, done in the Netlify dashboard — not in code):
 *   1. Site settings -> Environment variables -> add:
 *        RESEND_API_KEY        (from resend.com — free tier is fine)
 *        NOTIFY_EMAIL_TO       e.g. info@agencerebiservicesa.co.za
 *        NOTIFY_EMAIL_FROM     e.g. onboarding@resend.dev (or your verified domain sender)
 *        TWILIO_ACCOUNT_SID    (from twilio.com console)
 *        TWILIO_AUTH_TOKEN
 *        TWILIO_WHATSAPP_FROM  e.g. whatsapp:+14155238886  (Twilio's sandbox or your approved number)
 *        NOTIFY_WHATSAPP_TO    e.g. whatsapp:+27765822221
 *   2. Site settings -> Forms -> Form notifications -> Add notification
 *        -> Outgoing webhook -> Event: "New form submission"
 *        -> URL: https://<your-site>.netlify.app/.netlify/functions/notify-enquiry
 *      (Add one for each form you want covered: "enquiry" and "contact".)
 *
 * If the email or WhatsApp env vars aren't set yet, this function simply skips
 * that step (and logs why) instead of failing — so it's safe to deploy this
 * before every credential is ready.
 * ----------------------------------------------------------------------
 */

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid payload" };
  }

  // Netlify's outgoing webhook payload shape: { form_name, data: {...fields} }
  const formName = payload.form_name || "form";
  const data = payload.data || {};

  const lines = Object.entries(data)
    .filter(([key]) => key !== "bot-field" && key !== "form-name")
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const subject = `New ${formName} submission — ${data.name || "Website visitor"}`;
  const whatsappText =
    `New ${formName} enquiry from ${data.name || "a website visitor"}\n` +
    (data.phone ? `Phone: ${data.phone}\n` : "") +
    (data.email ? `Email: ${data.email}\n` : "") +
    (data.message ? `Message: ${data.message}` : "");

  const results = await Promise.allSettled([
    sendEmail(subject, lines),
    sendWhatsApp(whatsappText),
  ]);

  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(i === 0 ? "Email notification failed:" : "WhatsApp notification failed:", r.reason);
    }
  });

  // Always 200 — Netlify doesn't need to retry just because a notification step was skipped.
  return { statusCode: 200, body: "ok" };
};

async function sendEmail(subject, textBody) {
  const { RESEND_API_KEY, NOTIFY_EMAIL_TO, NOTIFY_EMAIL_FROM } = process.env;
  if (!RESEND_API_KEY || !NOTIFY_EMAIL_TO || !NOTIFY_EMAIL_FROM) {
    console.log("Email notification skipped — RESEND_API_KEY / NOTIFY_EMAIL_TO / NOTIFY_EMAIL_FROM not set.");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_EMAIL_FROM,
      to: [NOTIFY_EMAIL_TO],
      subject,
      text: textBody,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend API responded ${res.status}: ${await res.text()}`);
  }
}

async function sendWhatsApp(text) {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, NOTIFY_WHATSAPP_TO } = process.env;
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_FROM || !NOTIFY_WHATSAPP_TO) {
    console.log("WhatsApp notification skipped — Twilio env vars not fully set.");
    return;
  }

  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
  const body = new URLSearchParams({
    From: TWILIO_WHATSAPP_FROM,
    To: NOTIFY_WHATSAPP_TO,
    Body: text,
  });

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) {
    throw new Error(`Twilio API responded ${res.status}: ${await res.text()}`);
  }
}
