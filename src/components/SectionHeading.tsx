interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  navy?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
  navy = false,
}: SectionHeadingProps) {
  const eyebrowClass = light ? "eyebrow eyebrow--light" : navy ? "eyebrow eyebrow--navy" : "eyebrow";

  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
