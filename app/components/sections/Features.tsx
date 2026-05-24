"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import ProductStatusNote from "../ui/ProductStatusNote";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FeatureDef {
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface PartnerResult {
  initials: string;
  name: string;
  meta: string;
  sharedTags: string[];
}

interface SearchState {
  query: string;
  chips: string[];
  results: PartnerResult[];
}

// ── Static data ───────────────────────────────────────────────────────────────

const FEATURES: FeatureDef[] = [
  {
    number: "01",
    icon: "/icons/features/verified-business.png",
    title: "Business Profiles",
    description:
      "Show what your company offers, what you need, and the types of partners you're looking for.",
  },
  {
    number: "02",
    icon: "/icons/features/browse-industry.png",
    title: "Filtered Business Discovery",
    description:
      "Find companies by industry, location, business type, tags, and needs.",
  },
  {
    number: "03",
    icon: "/icons/features/thai-first.png",
    title: "Need & Tag Matching",
    description:
      "Compare shared tags and business needs to spot companies that may be relevant.",
  },
  {
    number: "04",
    icon: "/icons/features/mutal-connect.png",
    title: "Mutual Connection Requests",
    description:
      "Contact details are revealed only when both businesses accept the connection.",
  },
];

// Three search states that cycle inside the mockup
const SEARCH_STATES: SearchState[] = [
  {
    query: "Food & Beverage",
    chips: ["Bangkok", "Supplier", "Export"],
    results: [
      {
        initials: "TF",
        name: "ThaiFresh Export",
        meta: "Food & Beverage · Chiang Mai",
        sharedTags: ["Export", "B2B"],
      },
      {
        initials: "SP",
        name: "Siam Packaging Co.",
        meta: "Packaging · Bangkok",
        sharedTags: ["Export", "Wholesale"],
      },
      {
        initials: "BC",
        name: "Bangkok Components Ltd.",
        meta: "Electronics · Bangkok",
        sharedTags: ["B2B"],
      },
    ],
  },
  {
    query: "Packaging",
    chips: ["Bangkok", "Supplier", "Wholesale"],
    results: [
      {
        initials: "SP",
        name: "Siam Packaging Co.",
        meta: "Packaging · Bangkok",
        sharedTags: ["Wholesale", "Supplier"],
      },
      {
        initials: "TP",
        name: "Thai Pack Solutions",
        meta: "Packaging · Samut Prakan",
        sharedTags: ["Supplier", "Export"],
      },
      {
        initials: "EB",
        name: "Eastern Box Co.",
        meta: "Packaging · Chonburi",
        sharedTags: ["B2B", "Wholesale"],
      },
    ],
  },
  {
    query: "Electronics",
    chips: ["Bangkok", "B2B", "Components"],
    results: [
      {
        initials: "BC",
        name: "Bangkok Components Ltd.",
        meta: "Electronics · Bangkok",
        sharedTags: ["B2B", "Components"],
      },
      {
        initials: "EC",
        name: "Eastern Circuit Supply",
        meta: "Electronics · Rayong",
        sharedTags: ["Supplier", "B2B"],
      },
      {
        initials: "SI",
        name: "Siam Industrial Parts",
        meta: "Industrial Parts · Bangkok",
        sharedTags: ["Components", "Wholesale"],
      },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 bg-[var(--color-surface)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Header ── */}
        <header className="relative z-10 text-center mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Features
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-primary)] md:text-[1.875rem]">
            Find relevant Thai business partners faster.
          </h2>
          <p className="mt-3 mx-auto max-w-[760px] text-sm leading-relaxed text-[var(--color-secondary)]">
            Browse businesses by industry, location, tags, and needs — then
            request connections when there&apos;s a good fit.
          </p>
        </header>

        {/* ── Main: animated discovery panel + stacked feature rows ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4 lg:gap-5 items-stretch">
          <DiscoveryPanel />

          <div className="flex flex-col gap-2.5">
            {FEATURES.map((feature) => (
              <FeatureRow key={feature.title} feature={feature} />
            ))}

            <p className="text-[11px] leading-relaxed text-[var(--color-muted)] border-t border-[var(--color-border)] pt-3">
              Launching in Thai and English. Chinese support is planned for
              future regional expansion.
            </p>
            <ProductStatusNote />
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Left: animated navy discovery panel ──────────────────────────────────────

function DiscoveryPanel() {
  const [stateIdx, setStateIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const intervalId = setInterval(() => {
      // Fade out, swap state, fade back in
      setVisible(false);
      timeoutId = setTimeout(() => {
        setStateIdx((i) => (i + 1) % SEARCH_STATES.length);
        setVisible(true);
      }, 320); // slightly longer than transition duration so content is fully hidden
    }, 3500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const current = SEARCH_STATES[stateIdx];

  return (
    <div
      role="presentation"
      aria-label="Partner discovery interface preview"
      className="relative overflow-hidden rounded-3xl bg-[var(--color-brand)] p-5 flex flex-col gap-3.5"
    >
      {/* Subtle orange glow — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-10 blur-3xl bg-[var(--color-accent)]"
      />
      {/* Dark depth — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-20 blur-3xl bg-[var(--color-brand-dark)]"
      />

      {/* Static panel header — never animates */}
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-on-dark)] opacity-50">
          Partner Discovery
        </p>
        <h3 className="mt-1 text-lg font-bold text-white leading-snug">
          Browse and filter<br />Thai businesses.
        </h3>
      </div>

      {/*
       * Animated region: search query + filter chips + results.
       * Fades out, state swaps while invisible, then fades back in.
       */}
      <div
        className={`relative z-10 flex-1 flex flex-col transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
        }`}
      >
        {/* Search bar */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[.10] border border-white/[.12]">
          <svg
            className="flex-shrink-0 text-[var(--color-text-on-dark)] opacity-40"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3" />
            <path d="M9 9L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="text-sm text-[var(--color-text-on-dark)] opacity-50 select-none">
            {current.query}
          </span>
        </div>

        {/* Filter chips — first chip always highlighted as primary filter */}
        <div className="flex gap-1.5 flex-wrap mt-2">
          {current.chips.map((chip, i) => (
            <FilterChip key={chip} label={chip} active={i === 0} />
          ))}
          <span className="flex items-center px-2.5 py-1 rounded-full text-[11px] text-[var(--color-text-on-dark)] opacity-25 border border-white/[.10] select-none">
            + Filter
          </span>
        </div>

        {/* Results */}
        <div className="mt-3 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-on-dark)] opacity-40">
              Potential Partners
            </p>
            <p className="text-[10px] text-[var(--color-text-on-dark)] opacity-30">
              {current.results.length} results
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            {current.results.map((result, i) => (
              <ResultCard
                key={result.name}
                result={result}
                relevant={i === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* State indicator dots — static, always visible */}
      <div className="relative z-10 flex gap-1.5">
        {SEARCH_STATES.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              i === stateIdx
                ? "w-5 bg-[var(--color-accent)]"
                : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Filter chip ───────────────────────────────────────────────────────────────

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border select-none
        ${active
          ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
          : "bg-white/[.11] border-white/[.15] text-[var(--color-text-on-dark)]"
        }`}
    >
      {label}
      <span aria-hidden="true" className="opacity-50 text-[10px]">×</span>
    </span>
  );
}

// ── Result card (inside navy panel) ──────────────────────────────────────────

function ResultCard({
  result,
  relevant,
}: {
  result: PartnerResult;
  relevant?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-3 border ${
        relevant
          ? "bg-white/[.11] border-white/[.20]"
          : "bg-white/[.07] border-white/[.10]"
      }`}
    >
      {/* Company row */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-white/[.18] flex items-center justify-center text-white font-bold text-[11px] flex-shrink-0">
          {result.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="flex-1 text-sm font-bold text-white leading-tight truncate">
              {result.name}
            </p>
            {relevant && (
              <span className="flex-shrink-0 text-[9px] font-semibold uppercase tracking-wide text-[var(--color-text-on-dark)] opacity-60 bg-white/[.10] px-1.5 py-0.5 rounded">
                Relevant
              </span>
            )}
          </div>
          <p className="text-[10px] text-[var(--color-text-on-dark)] opacity-50 truncate mt-0.5">
            {result.meta}
          </p>
        </div>
      </div>

      {/* Shared tags + connect */}
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap min-w-0">
          <span className="text-[9px] font-medium text-[var(--color-text-on-dark)] opacity-40 flex-shrink-0">
            Shared:
          </span>
          {result.sharedTags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/[.14] text-[var(--color-text-on-dark)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="flex-shrink-0 text-[11px] font-semibold text-white bg-white/[.16] border border-white/[.26] px-2.5 py-1 rounded-lg leading-none select-none">
          Connect →
        </span>
      </div>
    </div>
  );
}

// ── Right: stacked feature rows ───────────────────────────────────────────────

function FeatureRow({ feature }: { feature: FeatureDef }) {
  return (
    <article className="group flex-1 flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[var(--color-border)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand-light)] hover:shadow-[var(--shadow-md)]">

      {/* Icon */}
      <div className="flex-shrink-0 mt-px w-8 h-8 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)] flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--color-accent-soft)]">
        <Image
          src={feature.icon}
          alt=""
          width={18}
          height={18}
          aria-hidden="true"
          className="h-[18px] w-[18px] object-contain"
        />
      </div>

      {/* Copy — number sits inline with title on the same baseline */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-1.5">
          <span className="flex-shrink-0 text-[10px] font-bold font-mono text-[var(--color-accent)]">
            {feature.number}
          </span>
          <h3 className="text-sm font-bold leading-tight text-[var(--color-primary)]">
            {feature.title}
          </h3>
        </div>
        <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-secondary)]">
          {feature.description}
        </p>
      </div>

    </article>
  );
}
