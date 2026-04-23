"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Reveal } from "@/components/ui/reveal";

// TODO: Replace with your Google Place review link
const GOOGLE_REVIEW_LINK =
  "https://g.page/r/CVYv417TLmToEAE/review";

interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
}

// Add real Google reviews here as they come in
const reviews: GoogleReview[] = [
  // Example:
  // {
  //   author: "John D.",
  //   rating: 5,
  //   text: "Amazing detail job, my car looks brand new!",
  //   timeAgo: "2 weeks ago",
  // },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length);
  }, [reviews.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [reviews.length, next]);

  const review = reviews[current];

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-surface rounded-sm p-8 border-l-3 border-l-accent min-h-[180px] flex flex-col justify-center">
        <StarRating rating={review.rating} />
        <p className="text-text-secondary leading-relaxed mt-4 mb-4">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-text-primary text-sm font-medium">
              {review.author}
            </p>
            <p className="text-text-muted text-xs">{review.timeAgo}</p>
          </div>
          <FaGoogle className="w-5 h-5 text-text-muted" />
        </div>
      </div>

      {reviews.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="text-text-muted hover:text-text-primary transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === current ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="text-text-muted hover:text-text-primary transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="relative py-28 px-4 bg-surface">
      <span className="section-label absolute top-4 left-4">REVIEWS</span>

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
              GOOGLE REVIEWS
            </p>
            <h2 className="font-serif text-4xl font-bold text-text-primary mb-4">
              What our customers say.
            </h2>
            {reviews.length === 0 && (
              <p className="text-text-secondary text-lg max-w-md mx-auto">
                We&apos;re just getting started! Be the first to share your
                experience with MJP Auto Detailing.
              </p>
            )}
          </div>

          {reviews.length > 0 && <ReviewCarousel reviews={reviews} />}

          <div className="text-center mt-10">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-sm hover:bg-accent-hover transition"
            >
              <FaGoogle className="w-4 h-4" />
              Leave Us a Review
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
