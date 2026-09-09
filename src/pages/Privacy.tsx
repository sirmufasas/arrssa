import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | ARSSA"
        description="How ARSSA collects, uses and protects personal information in line with POPIA. Your rights, our obligations, and how to contact us."
        path="/privacy"
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How ARSSA handles personal information in line with the Protection of Personal Information Act (POPIA), South Africa. Last updated: January 2026.`}
        crumbs={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="legal">
              <p className="note">
                This policy is written to reflect ARSSA's current data practices. Details
                such as a registered physical address, registration numbers and the name of
                an Information Officer will be added here as soon as they are formally
                confirmed. Until then, please contact us using the details below.
              </p>

              <h2>1. Who We Are</h2>
              <p>
                {SITE.fullName}, trading as ARSSA, is a South African business facilitation,
                market-growth and trade services company. As a data operator / responsible
                party, we are committed to protecting the personal information we collect in
                line with POPIA.
              </p>

              <h2>2. Information We Collect</h2>
              <p>When you submit an enquiry or contact us, we may collect:</p>
              <ul>
                <li><strong>Name</strong> — your full name</li>
                <li><strong>Company</strong> — the organisation you represent</li>
                <li><strong>Email address</strong> — for correspondence</li>
                <li><strong>Phone / WhatsApp number</strong> — for business communication</li>
                <li><strong>Country</strong> — where you are based</li>
                <li><strong>Enquiry information</strong> — the service you are interested in, your industry, project scope and any details you provide</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your enquiries and provide quotations</li>
                <li>Assess and deliver the services you request</li>
                <li>Manage any ongoing client relationship</li>
                <li>Improve our services and the Website</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>

              <h2>4. Lawful Basis for Processing</h2>
              <p>
                Under POPIA, we process personal information only where we have a lawful
                basis to do so. For enquiries submitted through this Website, that basis is
                primarily:
              </p>
              <ul>
                <li>Your <strong>consent</strong>, given when you tick the consent box in our forms</li>
                <li>The <strong>performance of a contract</strong>, or steps towards one, in cases where we proceed to a service engagement</li>
                <li>Our or your <strong>legitimate interests</strong>, such as responding to an enquiry you initiated</li>
                <li><strong>Legal obligation</strong>, where processing is required by applicable law</li>
              </ul>

              <h2>5. Communication</h2>
              <p>
                We may contact you by email, phone or WhatsApp in relation to your enquiry or
                any services you have requested. We do not use your information for
                unsolicited third-party marketing without your prior consent.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain personal information for as long as is necessary to fulfil the
                purposes for which it was collected, including legal, accounting and
                reporting requirements. Where no ongoing business purpose exists, we will
                securely delete or anonymise the information.
              </p>

              <h2>7. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect the
                personal information we hold against unauthorised access, loss, alteration
                or destruction. These measures include secure hosting, restricted access and
                standard industry security practices.
              </p>

              <h2>8. Cookies</h2>
              <p>
                This Website uses a limited number of essential cookies to function
                correctly. Further detail on what cookies we use and how to manage them is
                available in our Cookie Policy.
              </p>

              <h2>9. Your Rights</h2>
              <p>Under POPIA, you have the right to:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal information we hold about you</li>
                <li><strong>Correction</strong> — request that we correct inaccurate or incomplete information</li>
                <li><strong>Deletion</strong> — request the deletion of your information where applicable and where no legal obligation requires us to retain it</li>
                <li><strong>Objection</strong> — object to certain forms of processing, including direct marketing</li>
                <li><strong>Withdraw consent</strong> — at any time, where we rely on consent</li>
              </ul>

              <h2>10. Making a Request</h2>
              <p>
                To make an access, correction or deletion request, please contact us using
                the details below. We will verify your identity before acting on the request
                and respond within a reasonable timeframe as required by law.
              </p>

              <h2>11. Complaints</h2>
              <p>
                If you have a concern about how we handle your personal information, please
                contact us first so we can address it. You also have the right to lodge a
                complaint with the Information Regulator of South Africa.
              </p>

              <h2>12. Contact Details</h2>
              <ul>
                <li>Email: {SITE.email}</li>
                <li>Phone / WhatsApp: {SITE.phoneDisplay}</li>
              </ul>

              <h2>13. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. The "last updated" date
                at the top of this page reflects the most recent revision. Continued use of
                the Website after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
