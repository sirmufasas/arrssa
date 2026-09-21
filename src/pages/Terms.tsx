import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";
import { useTranslate } from "../context/LanguageContext";

export default function Terms() {
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Terms & Conditions | ARSSA"
        description="Terms and conditions governing the use of the ARSSA website and services. Agence Rebi Service South Africa."
        path="/terms"
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="These terms govern your use of the ARSSA website and the provision of services. Last updated: January 2026."
        crumbs={[{ label: "Home", path: "/" }, { label: "Terms & Conditions" }]}
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="legal">
              <p className="note">
                {tr("These terms are intended to provide clear guidance on the use of our services and should be read together with any applicable agreements and policies.")}
              </p>

              <h2>{tr("1. Introduction")}</h2>
              <p>
                {tr('These Terms & Conditions ("Terms") govern the use of the website operated by Agence Rebi Service South Africa, trading as ARSSA ("ARSSA", "we", "us" or "our"). By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of the website.')}
              </p>

              <h2>{tr("2. Definitions")}</h2>
              <ul>
                <li><strong>{tr("“Website”")}</strong> {tr("means the website at https://agencerebiservicesa.co.za and any associated sub-pages.")}</li>
                <li><strong>{tr("“Services”")}</strong> {tr("means the business facilitation, market-growth, distribution, import/export and maintenance & compliance services described on the Website, engaged through a separate written agreement.")}</li>
                <li><strong>{tr("“Client”")}</strong> {tr("means any person or entity that engages ARSSA for Services.")}</li>
                <li><strong>{tr("“Content”")}</strong> {tr("means all text, graphics, logos, images and other material displayed on the Website.")}</li>
              </ul>

              <h2>{tr("3. Website Use")}</h2>
              <p>
                {tr("You may use the Website for lawful purposes only. You must not use the Website in any way that could damage, disable, overburden or impair it, or interfere with any other party's use of the Website. ARSSA reserves the right to restrict or suspend access to the Website at any time.")}
              </p>

              <h2>{tr("4. Information Accuracy")}</h2>
              <p>
                {tr('We aim to keep the information on the Website accurate and up to date. However, the Website is provided on an "as is" and "as available" basis. ARSSA does not warrant that the information is error-free, complete or current, and you should independently verify any information before acting on it.')}
              </p>

              <h2>{tr("5. Services")}</h2>
              <p>
                {tr("Descriptions of services on the Website are indicative only and do not constitute an offer or a contract. Any engagement for Services is subject to a separate written agreement between ARSSA and the Client, which will set out the specific scope, fees, timelines and responsibilities.")}
              </p>

              <h2>{tr("6. Enquiries and Quotations")}</h2>
              <p>
                {tr("Enquiries submitted through the Website are for the purpose of receiving general information and quotations. The submission of an enquiry does not create a client relationship. Quotations are valid only for the period specified and remain subject to availability and final written confirmation.")}
              </p>

              <h2>{tr("7. Intellectual Property")}</h2>
              <p>
                {tr("All Content on the Website, including the ARSSA and ARS names, logos and branding, is the property of ARSSA or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from any Content without prior written consent, except as permitted by law.")}
              </p>

              <h2>{tr("8. Third-Party Links")}</h2>
              <p>
                {tr("The Website may contain links to third-party websites or resources. ARSSA has no control over, and accepts no responsibility for, the content, privacy policies or practices of any third party. Use of third-party links is at your own risk.")}
              </p>

              <h2>{tr("9. Limitation of Liability")}</h2>
              <p>
                {tr("To the maximum extent permitted by law, ARSSA shall not be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits, revenue or data, arising out of or in connection with your use of the Website. ARSSA's total liability arising out of or in connection with the Website shall be limited to the extent permitted by applicable law.")}
              </p>

              <h2>{tr("10. No Guarantee of Business Outcomes")}</h2>
              <p>
                {tr("ARSSA provides facilitation, advisory and operational support services. We do not guarantee any specific commercial outcome, including market entry success, sales volumes, regulatory approvals or trade outcomes. Results depend on numerous factors outside ARSSA's control.")}
              </p>

              <h2>{tr("11. Regulatory Responsibility")}</h2>
              <p>
                {tr("Clients remain responsible for their own compliance with all applicable laws, regulations and licensing requirements in South Africa, the DRC and any other relevant jurisdiction. While ARSSA provides compliance support as part of its Services, this does not transfer or remove the Client's legal obligations.")}
              </p>

              <h2>{tr("12. Confidentiality")}</h2>
              <p>
                {tr("Information exchanged between ARSSA and a Client in connection with Services is subject to the confidentiality provisions of the applicable service agreement. ARSSA will not disclose Client information to third parties except as required by law or as necessary to deliver the Services.")}
              </p>

              <h2>{tr("13. Privacy")}</h2>
              <p>
                {tr("The collection and use of personal information in connection with the Website is governed by the ARSSA Privacy Policy, available on this Website. By submitting an enquiry, you consent to the processing of your information as described in that policy.")}
              </p>

              <h2>{tr("14. Website Availability")}</h2>
              <p>
                {tr("While we aim to keep the Website available at all times, we do not guarantee uninterrupted availability. ARSSA may suspend, modify or discontinue any part of the Website at any time without prior notice.")}
              </p>

              <h2>{tr("15. Changes to Terms")}</h2>
              <p>
                {tr('ARSSA may update these Terms from time to time. The "last updated" date at the top of this page indicates the most recent revision. Continued use of the Website after changes take effect constitutes acceptance of the revised Terms.')}
              </p>

              <h2>{tr("16. Governing Law")}</h2>
              <p>
                {tr("These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. The courts of South Africa shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms.")}
              </p>

              <h2>{tr("17. Contact Information")}</h2>
              <p>
                {tr("Questions regarding these Terms may be directed to:")}
              </p>
              <ul>
                <li>{tr("Email:")} <a href={SITE.emailHref} translate="no">{SITE.email}</a></li>
                <li>{tr("Phone / WhatsApp:")} <a href={SITE.phoneHref} translate="no">{SITE.phoneDisplay}</a></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
