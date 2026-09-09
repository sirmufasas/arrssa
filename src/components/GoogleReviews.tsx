import { ExternalLink, PenLine, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { GOOGLE_REVIEWS_CONFIG, REVIEWS } from "../data/reviews";

/** Official multi-colour Google "G" mark */
function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span
      className="greviews__stars"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= rating ? "greviews__star greviews__star--filled" : "greviews__star"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const hasReviews = REVIEWS.length > 0;
  const average = hasReviews
    ? Math.round((REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length) * 10) / 10
    : null;

  return (
    <section className="section section--paper">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            center
            eyebrow="Client Feedback"
            title="What Clients Say on Google"
            description="Transparency matters to us — our reputation is built in public, review by review."
          />
        </ScrollReveal>

        {hasReviews ? (
          <>
            {/* Rating summary */}
            <ScrollReveal>
              <div className="greviews__summary">
                <GoogleG size={30} />
                <div>
                  <div className="greviews__summary-score">
                    <strong>{average}</strong>
                    <Stars rating={Math.round(average ?? 0)} size={18} />
                  </div>
                  <p>
                    Based on {REVIEWS.length} Google review{REVIEWS.length > 1 ? "s" : ""}
                  </p>
                </div>
                <a
                  href={GOOGLE_REVIEWS_CONFIG.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost btn--sm"
                >
                  View on Google
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>

            {/* Review cards */}
            <div className="greviews__grid">
              {REVIEWS.map((review, i) => (
                <ScrollReveal key={`${review.author}-${i}`} delay={i * 0.06}>
                  <article className="greviews__card">
                    <div className="greviews__card-head">
                      <span className="greviews__avatar" aria-hidden="true">
                        {review.author.charAt(0)}
                      </span>
                      <div>
                        <h3>{review.author}</h3>
                        <span className="greviews__date">{review.date}</span>
                      </div>
                      <GoogleG size={18} />
                    </div>
                    <Stars rating={review.rating} />
                    <p className="greviews__text">{review.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </>
        ) : (
          /* Invitation layout — shown until real reviews are added */
          <ScrollReveal>
            <div className="greviews__invite">
              <div className="greviews__invite-icon" aria-hidden="true">
                <GoogleG size={34} />
              </div>
              <h3>Have you worked with ARSSA?</h3>
              <p>
                We're building our public track record on Google. If ARSSA has supported
                your business across the South Africa–DRC corridor, we'd genuinely value
                a review — it helps other businesses make confident decisions.
              </p>
              <div className="greviews__invite-stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={26} className="greviews__invite-star" style={{ animationDelay: `${i * 0.12}s` }} />
                ))}
              </div>
              <div className="greviews__invite-actions">
                <a
                  href={GOOGLE_REVIEWS_CONFIG.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--lg"
                >
                  <PenLine size={17} aria-hidden="true" />
                  Write a Review on Google
                </a>
                <a
                  href={GOOGLE_REVIEWS_CONFIG.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost btn--lg"
                >
                  Find Us on Google
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
