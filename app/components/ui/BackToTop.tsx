"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 600;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={[
        "fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6",
        "flex h-11 w-11 items-center justify-center gap-2 rounded-full sm:w-auto sm:px-4",
        "border border-[color:color-mix(in_srgb,var(--color-white)_10%,transparent)]",
        "bg-[color:color-mix(in_srgb,var(--color-brand-dark)_90%,transparent)] text-[var(--color-white)]",
        "shadow-[0_12px_32px_color-mix(in_srgb,var(--color-brand-dark)_28%,transparent)] backdrop-blur-md",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:bg-[var(--color-accent)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Top</span>
    </button>
  );
}
