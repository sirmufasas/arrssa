import { Building2, Droplets, ShieldCheck, Wrench } from "lucide-react";
import PageHero from "../../components/PageHero";
import SEO from "../../components/SEO";
import ScrollReveal from "../../components/ScrollReveal";
import CTASection from "../../components/CTASection";
import {
  PurposeCallout,
  SectorBadges,
  ServiceBlocks,
  type ServiceBlock,
} from "../../components/ServiceSections";

const BLOCKS: ServiceBlock[] = [
  {
    icon: Wrench,
    title: "Maintenance Services",
    items: [
      "Preventative facility maintenance schedules",
      "Corrective repairs & rapid response",
      "HVAC, ventilation & cold-chain equipment care",
      "Specialised infrastructure monitoring",
    ],
  },
  {
    icon: Droplets,
    title: "Cleaning & Disinfection",
    items: [
      "Cleanroom & sterile facility cleaning",
      "Medical-grade surface disinfection protocols",
      "Overflow waste & bio-hazard cleaning",
      "Scheduled sanitary deep cleaning",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety Support",
    items: [
      "Environmental compliance auditing & reporting",
      "Sanitary standards compliance documentation",
      "Occupational Health and Safety (OHS) compliance",
      "Hazardous material protocol management",
    ],
  },
  {
    icon: Building2,
    title: "Operational Environments",
    items: [
      "Pharmaceutical production & distribution centers",
      "Cosmetic packaging & laboratory facilities",
      "Agri-food processing & cold storage warehouses",
      "Regulated corporate & industrial premises",
    ],
  },
];

export default function MaintenanceCleaning() {
  return (
    <>
      <SEO
        title="Maintenance, Cleaning & Compliance | ARSSA"
        description="Specialised operational support for regulated industries. Maintenance, cleaning, disinfection and compliance support for pharmaceutical, cosmetic and food facilities."
        path="/services/maintenance-cleaning"
      />

      <PageHero
        eyebrow="Division 04 — Maintenance, Cleaning & Compliance"
        title="Maintenance, Cleaning & Compliance"
        subtitle="Specialised Operational Support for Regulated Industries"
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Maintenance, Cleaning & Compliance" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 56 }}>
            <ScrollReveal>
              <div className="showcase-media">
                <img
                  src="https://images.pexels.com/photos/9574516/pexels-photo-9574516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Sterile cleanroom facility maintenance and compliance"
                  loading="lazy"
                />
                <div className="showcase-media__overlay">
                  <span className="showcase-media__tag">Regulated Standards</span>
                  <h3 className="showcase-media__title">Sterile &amp; Safe Environments</h3>
                  <p className="showcase-media__desc">
                    Maintaining high hygiene and environmental safety protocols for regulated industries.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="eyebrow eyebrow--navy">Division Overview</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 18 }}>
                  Maintaining Rigorous Operational &amp; Sanitary Standards
                </h2>
                <p className="lead" style={{ fontSize: 16, marginBottom: 20 }}>
                  Pharmaceutical laboratories, cosmetic facilities, and food-processing plants
                  require specialised hygiene, sanitary compliance, and preventative maintenance
                  to prevent contamination and regulatory shutdown.
                </p>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.65 }}>
                  ARSSA provides rigorous operational support — including medical-grade disinfection,
                  preventative equipment maintenance, waste management, and occupational health compliance —
                  so your facilities always pass inspection and run smoothly.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ServiceBlocks blocks={BLOCKS} accent="#009639" />

          <SectorBadges
            title="Relevant Regulated Environments"
            items={[
              "Pharmaceutical Facilities",
              "Cosmetic Facilities",
              "Food & Cold Storage Facilities",
              "Regulated Operational Environments",
            ]}
          />

          <PurposeCallout
            title="Division Purpose"
            text="Maintain safe, compliant operational environments and support regulatory requirements."
          />
        </div>
      </section>

      <CTASection
        headline="Protect your facilities and audit readiness"
        text="Speak with our operational compliance team about preventative maintenance, disinfection, and sanitary auditing."
        primaryLabel="Discuss Your Requirements"
        secondaryLabel="View All Services"
        secondaryPath="/services"
      />
    </>
  );
}
