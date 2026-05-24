"use client";

import Image from "next/image";

import ProductStatusNote from "../ui/ProductStatusNote";
import FeaturesPreview from "../ui/FeaturesPreview";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FeatureDef {
  number: string;
  icon: string;
  title: string;
  description: string;
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
          <FeaturesPreview />

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
