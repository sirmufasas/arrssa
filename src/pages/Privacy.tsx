import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";
import { useTranslate } from "../context/LanguageContext";

export default function Privacy() {
  const tr = useTranslate();

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
        subtitle="How ARSSA handles personal information in line with POPIA (Protection of Personal Information Act). Last updated: January 2026."
        crumbs={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="legal">
              <p className="note">
                {tr("This policy is written to reflect ARSSA's current data practices. Details such as a registered physical address, registration numbers and the name of an Information Officer will be added here as soon as they are formally confirmed. Until then, please contact us using the details below.")}
              </p>

              <h2>{tr("1. Who We Are")}</h2>
              <p>
                {tr("Agence Rebi Service South Africa, trading as ARSSA, is a South African business facilitation, market-growth and trade services company. As a data operator / responsible party, we are committed to protecting the personal information we collect in line with POPIA.")}
              </p>

              <h2>{tr("2. Information We Collect")}</h2>
              <p>{tr("When you submit an enquiry or contact us, we may collect:")}</p>
              <ul>
                <li><strong>{tr("Name")}</strong> {tr("— your full name")}</li>
                <li><strong>{tr("Company")}</strong> {tr("— the organisation you represent")}</li>
                <li><strong>{tr("Email address")}</strong> {tr("— for correspondence")}</li>
                <li><strong>{tr("Phone / WhatsApp number")}</strong> {tr("— for business communication")}</li>
                <li><strong>{tr("Country")}</strong> {tr("— where you are based")}</li>
                <li><strong>{tr("Enquiry information")}</strong> {tr("— the service you are interested in, your industry, project scope and any details you provide")}</li>
              </ul>

              <h2>{tr("3. How We Use Your Information")}</h2>
              <p>{tr("We use the information we collect to:")}</p>
              <ul>
                <li>{tr("Respond to your enquiries and provide quotations")}</li>
                <li>{tr("Assess and deliver the services you request")}</li>
                <li>{tr("Manage any ongoing client relationship")}</li>
                <li>{tr("Improve our services and the Website")}</li>
                <li>{tr("Comply with legal and regulatory obligations")}</li>
              </ul>

              <h2>{tr("4. Lawful Basis for Processing")}</h2>
              <p>
                {tr("Under POPIA, we process personal information only where we have a lawful basis to do so. For enquiries submitted through this Website, that basis is primarily:")}
              </p>
              <ul>
                <li><strong>{tr("Your consent")}</strong>{tr(", given when you tick the consent box in our forms")}</li>
                <li><strong>{tr("The performance of a contract")}</strong>{tr(", or steps towards one, in cases where we proceed to a service engagement")}</li>
                <li><strong>{tr("Our or your legitimate interests")}</strong>{tr(", such as responding to an enquiry you initiated")}</li>
                <li><strong>{tr("Legal obligation")}</strong>{tr(", where processing is required by applicable law")}</li>
              </ul>

              <h2>{tr("5. Communication")}</h2>
              <p>
                {tr("We may contact you by email, phone or WhatsApp in relation to your enquiry or any services you have requested. We do not use your information for unsolicited third-party marketing without your prior consent.")}
              </p>

              <h2>{tr("6. Data Retention")}</h2>
              <p>
                {tr("We retain personal information for as long as is necessary to fulfil the purposes for which it was collected, including legal, accounting and reporting requirements. Where no ongoing business purpose exists, we will securely delete or anonymise the information.")}
              </p>

              <h2>{tr("7. Data Security")}</h2>
              <p>
                {tr("We implement appropriate technical and organisational measures to protect the personal information we hold against unauthorised access, loss, alteration or destruction. These measures include secure hosting, restricted access and standard industry security practices.")}
              </p>

              <h2>{tr("8. Cookies")}</h2>
              <p>
                {tr("This Website uses a limited number of essential cookies to function correctly. Further detail on what cookies we use and how to manage them is available in our Cookie Policy.")}
              </p>

              <h2>{tr("9. Your Rights")}</h2>
              <p>{tr("Under POPIA, you have the right to:")}</p>
              <ul>
                <li><strong>{tr("Access")}</strong> {tr("— request a copy of the personal information we hold about you")}</li>
                <li><strong>{tr("Correction")}</strong> {tr("— request that we correct inaccurate or incomplete information")}</li>
                <li><strong>{tr("Deletion")}</strong> {tr("— request the deletion of your information where applicable and where no legal obligation requires us to retain it")}</li>
                <li><strong>{tr("Objection")}</strong> {tr("— object to certain forms of processing, including direct marketing")}</li>
                <li><strong>{tr("Withdraw consent")}</strong> {tr("— at any time, where we rely on consent")}</li>
              </ul>

              <h2>{tr("10. Making a Request")}</h2>
              <p>
                {tr("To make an access, correction or deletion request, please contact us using the details below. We will verify your identity before acting on the request and respond within a reasonable timeframe as required by law.")}
              </p>

              <h2>{tr("11. Complaints")}</h2>
              <p>
                {tr("If you have a concern about how we handle your personal information, please contact us first so we can address it. You also have the right to lodge a complaint with the Information Regulator of South Africa.")}
              </p>

              <h2>{tr("12. Contact Details")}</h2>
              <ul>
                <li>{tr("Email:")} <a href={SITE.emailHref} translate="no">{SITE.email}</a></li>
                <li>{tr("Phone / WhatsApp:")} <a href={SITE.phoneHref} translate="no">{SITE.phoneDisplay}</a></li>
              </ul>

              <h2>{tr("13. Policy Updates")}</h2>
              <p>
                {tr('We may update this Privacy Policy from time to time. The "last updated" date at the top of this page reflects the most recent revision. Continued use of the Website after changes constitutes acceptance of the updated policy.')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
