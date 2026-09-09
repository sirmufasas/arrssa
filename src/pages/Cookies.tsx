import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy | ARSSA"
        description="How ARSSA uses cookies — what cookies are, which types we use, and how you can manage them."
        path="/cookies"
      />

      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle={`How the ${SITE.name} website uses cookies. Last updated: January 2026.`}
        crumbs={[{ label: "Home", path: "/" }, { label: "Cookie Policy" }]}
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="legal">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that a website stores on your device when you
                visit. They are widely used to make websites work more efficiently and to
                provide reporting information to website operators. Cookies can be
                "persistent" (remaining on your device for a set period) or "session"
                cookies (deleted when you close your browser).
              </p>

              <h2>2. What Cookies We Use</h2>
              <p>
                This Website keeps its use of cookies to a minimum. We currently use:
              </p>

              <h2 style={{ fontSize: 17, margin: "28px 0 10px" }}>Essential cookies</h2>
              <p>
                Essential cookies are strictly necessary for the Website to function. They
                enable basic features such as page navigation and access to secure areas,
                and they may store small, non-personal preferences (for example, whether you
                have already seen our welcome screen). These cookies do not require your
                consent and cannot be switched off through our Website, though you can
                block them through your browser settings — in which case some parts of the
                Website may not work as intended.
              </p>

              <h2 style={{ fontSize: 17, margin: "28px 0 10px" }}>Analytics cookies</h2>
              <p>
                We do <strong>not currently use analytics cookies or third-party tracking
                scripts</strong> on this Website. Should we introduce them in the future,
                we will update this policy to describe exactly what they measure, who
                operates them, and how you can opt out.
              </p>

              <h2 style={{ fontSize: 17, margin: "28px 0 10px" }}>Preference cookies</h2>
              <p>
                These cookies allow the Website to remember choices you make (such as
                preferences you set) and to provide enhanced, personalised features. They
                are stored only on your own device and are not shared with us for marketing
                purposes.
              </p>

              <h2 style={{ fontSize: 17, margin: "28px 0 10px" }}>Third-party cookies</h2>
              <p>
                In limited cases, a third-party service embedded on the Website (for example
                a hosted map, once one is published) may set its own cookies. We do not
                control third-party cookies; please refer to the relevant third party's
                privacy or cookie policy for details.
              </p>

              <h2>3. Managing Your Cookies</h2>
              <p>You can control and manage cookies in the following ways:</p>
              <ul>
                <li>
                  Most browsers allow you to refuse or delete cookies. Look in the
                  "Settings" or "Preferences" menu of your browser.
                </li>
                <li>
                  You can usually set your browser to warn you when cookies are being set,
                  so you can choose whether to accept them.
                </li>
                <li>
                  Blocking essential cookies may affect the functionality of parts of this
                  Website.
                </li>
              </ul>

              <h2>4. Contact</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{" "}
                {SITE.email} or {SITE.phoneDisplay}.
              </p>

              <h2>5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Please check this page
                periodically for the latest information.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
