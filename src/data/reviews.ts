/**
 * Google Reviews configuration.
 *
 * HOW TO ACTIVATE:
 * 1. Once the ARSSA Google Business Profile is live, replace the two URLs
 *    below with the real ones:
 *    - writeReviewUrl: the "Write a review" link from your Google Business
 *      Profile (format: https://g.page/r/XXXXXXXX/review)
 *    - profileUrl: the public Maps/Search listing for ARSSA
 * 2. Paste genuine customer reviews into the REVIEWS array below (copy the
 *    text, name, rating and date from your Google Business Profile).
 *    The section automatically switches from the "invite" layout to the
 *    review-cards layout as soon as at least one review is added.
 *
 * Do NOT add reviews here that do not exist on Google — the section is
 * designed to mirror the live profile, not replace it.
 */

export interface GoogleReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // e.g. "January 2026"
  text: string;
}

export const GOOGLE_REVIEWS_CONFIG = {
  /** Replace with the real "Write a review" link from Google Business Profile */
  writeReviewUrl:
    "https://www.google.com/search?q=Agence+Rebi+Service+South+Africa+reviews",
  /** Replace with the real Google Business Profile / Maps listing URL */
  profileUrl:
    "https://www.google.com/search?q=Agence+Rebi+Service+South+Africa",
};

/** Genuine Google reviews — paste real reviews from the profile here. */
export const REVIEWS: GoogleReview[] = [];
