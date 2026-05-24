"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface StepDef {
  number: string;
  title: string;
  description: string;
}

interface MatchEntry {
  initials: string;
  name: string;
  industry: string;
  location: string;
  score: number;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const STEPS: StepDef[] = [
  {
    number: "01",
    title: "Build Your Profile",
    description: "Tell businesses who you are, what you offer, and what you're looking for.",
  },
  {
    number: "02",
    title: "Find Potential Partners",
    description: "Browse relevant businesses and discover strong matches.",
  },
  {
    number: "03",
    title: "Connect & Deal",
    description: "Send a connection request. Once both sides accept, contact details are revealed.",
  },
];

const MATCH_DATA: MatchEntry[] = [
  { initials: "SP", name: "Siam Packaging Co.",     industry: "Packaging",     location: "Bangkok",    score: 92 },
  { initials: "TF", name: "ThaiFresh Export",       industry: "Food & Bev.",   location: "Chiang Mai", score: 87 },
  { initials: "BC", name: "Bangkok Components Ltd.", industry: "Electronics",  location: "Bangkok",    score: 79 },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [timerKey, setTimerKey] = useState(0);
  const activeRef = useRef(activeStep);

  useEffect(() => {
    activeRef.current = activeStep;
  }, [activeStep]);

  const go = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => { setActiveStep(next); setVisible(true); }, 200);
  }, []);

  // Auto-advance; reset whenever user clicks
  useEffect(() => {
    const id = setInterval(() => go((activeRef.current + 1) % STEPS.length), 4000);
    return () => clearInterval(id);
  }, [go, timerKey]);

  const handleClick = (i: number) => {
    if (i === activeStep) return;
    go(i);
    setTimerKey((k) => k + 1);
  };

  return (
    <section id="how-it-works" className="relative scroll-mt-20 overflow-hidden bg-[var(--color-white)] py-20 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(30,58,138,0.05),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ── Header ── */}
        <header className="text-center mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            How It Works
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-primary)] md:text-[1.875rem]">
            Three steps to your next deal
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-secondary)]">
            Profile, match, connect — that&apos;s it.
          </p>
        </header>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* LEFT — step navigator */}
          <div className="space-y-2">
            {STEPS.map((step, i) => (
              <StepButton
                key={i}
                step={step}
                isActive={activeStep === i}
                onClick={() => handleClick(i)}
              />
            ))}

            {/* Step progress indicator */}
            <div className="flex gap-1.5 pt-1 pl-0.5">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  aria-label={`Go to step: ${step.title}`}
                  onClick={() => handleClick(i)}
                  className={`h-1 rounded-full transition-all duration-500 ease-out focus:outline-none
                    ${activeStep === i
                      ? "w-6 bg-[var(--color-accent)]"
                      : "w-1 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — mock browser */}
          <div
            className={`transition-all duration-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
            }`}
          >
            <MockWindow>
              {activeStep === 0 && <ProfileMock />}
              {activeStep === 1 && <MatchesMock />}
              {activeStep === 2 && <ConnectionMock />}
            </MockWindow>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Step button ───────────────────────────────────────────────────────────────

function StepButton({
  step,
  isActive,
  onClick,
}: {
  step: StepDef;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className={`w-full text-left flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-200 group
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
        ${isActive
          ? "bg-[var(--color-brand)] border-[var(--color-brand)] shadow-[0_6px_20px_rgba(7,26,61,0.16)]"
          : "bg-white border-[var(--color-border)] hover:border-[var(--color-brand-light)] hover:bg-[var(--color-surface)]"
        }`}
    >
      {/* Number badge */}
      <span
        className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold font-mono transition-colors duration-200
          ${isActive
            ? "bg-[var(--color-accent)] text-white"
            : "bg-[var(--color-surface-alt)] text-[var(--color-brand)] group-hover:bg-[var(--color-border)]"
          }`}
      >
        {step.number}
      </span>

      <div className="flex-1 min-w-0 pt-0.5">
        <h3
          className={`text-sm font-bold leading-tight transition-colors duration-200
            ${isActive ? "text-white" : "text-[var(--color-primary)]"}`}
        >
          {step.title}
        </h3>
        <p
          className={`text-xs leading-relaxed mt-0.5 transition-colors duration-200
            ${isActive ? "text-[var(--color-text-on-dark)]" : "text-[var(--color-secondary)]"}`}
        >
          {step.description}
        </p>
      </div>

      {isActive && (
        <svg
          className="flex-shrink-0 mt-0.5 text-[var(--color-accent)]"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 7h9M7.5 3.5l4 3.5-4 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

// ── Mock browser window ───────────────────────────────────────────────────────

function MockWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[0_16px_48px_rgba(7,26,61,0.1)] bg-white">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <div className="ml-2.5 flex-1 flex justify-center">
          <span className="px-3 py-0.5 bg-white border border-[var(--color-border)] rounded-md text-[11px] text-[var(--color-muted)] font-mono">
            BePartner-Business Matching
          </span>
        </div>
      </div>

      {/* Content — min-h prevents layout shift between steps */}
      <div className="p-5 min-h-[320px] flex flex-col">{children}</div>
    </div>
  );
}

// ── Step 1: Profile form ──────────────────────────────────────────────────────

function ProfileMock() {
  return (
    <div className="flex-1 flex flex-col space-y-3">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
          Business Profile
        </p>
        <h4 className="text-sm font-bold text-[var(--color-primary)] mt-0.5">
          Tell the market about you
        </h4>
      </div>

      {/* Company identity row */}
      <div className="flex items-center gap-2.5 px-3 py-2 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
        <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
          AT
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-[var(--color-primary)]">Apex Trading Co.</p>
          <p className="text-[10px] text-[var(--color-muted)]">Food & Beverage · Bangkok</p>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-border)] rounded-full font-semibold">
          Draft
        </span>
      </div>

      {/* Two fields side-by-side */}
      <div className="grid grid-cols-2 gap-2">
        <CompactField label="Industry" value="Food & Beverage" />
        <CompactField label="Location" value="Bangkok, TH" />
      </div>

      {/* Looking For */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1.5">
          Looking For
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {["Supplier", "Buyer", "Distributor"].map((role, i) => (
            <span
              key={role}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border
                ${i === 0
                  ? "bg-[var(--color-brand)] text-white border-[var(--color-brand)]"
                  : "text-[var(--color-secondary)] border-[var(--color-border)]"
                }`}
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-1">
        <div className="w-full py-2 bg-[var(--color-accent)] text-white font-semibold text-xs rounded-xl text-center select-none">
          Complete Profile →
        </div>
      </div>
    </div>
  );
}

function CompactField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
        {label}
      </p>
      <div className="px-2.5 py-2 bg-white border border-[var(--color-brand-light)] rounded-lg text-[11px] font-medium text-[var(--color-body)]">
        {value}
      </div>
    </div>
  );
}

// ── Step 2: Match cards ───────────────────────────────────────────────────────

function MatchesMock() {
  return (
    <div className="flex-1 flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
            Match Results
          </p>
          <h4 className="text-sm font-bold text-[var(--color-primary)] mt-0.5">
            3 strong matches found
          </h4>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
          <span className="text-[10px] font-medium text-[var(--color-success)]">Live</span>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        {MATCH_DATA.map((match, i) => (
          <MatchCard key={match.name} match={match} highlighted={i === 0} />
        ))}
      </div>
    </div>
  );
}

function MatchCard({
  match,
  highlighted,
}: {
  match: MatchEntry;
  highlighted?: boolean;
}) {
  const scoreText =
    match.score >= 90 ? "text-[var(--color-success)]" :
    match.score >= 85 ? "text-[var(--color-brand-light)]" :
    "text-[var(--color-secondary)]";
  const scoreBg = match.score >= 90 ? "bg-[#ECFDF5]" : "bg-[var(--color-surface)]";

  return (
    <div
      className={`flex items-center gap-2.5 p-3 border rounded-xl
        ${highlighted
          ? "bg-[var(--color-surface)] border-[var(--color-brand-light)]"
          : "bg-white border-[var(--color-border)]"
        }`}
    >
      <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
        {match.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-[var(--color-primary)] truncate">{match.name}</p>
        <p className="text-[10px] text-[var(--color-secondary)] truncate">
          {match.industry} · {match.location}
        </p>
      </div>
      <div className={`flex-shrink-0 px-2 py-1 rounded-lg text-center ${scoreBg}`}>
        <p className={`text-xs font-bold leading-none ${scoreText}`}>{match.score}%</p>
        <p className="text-[9px] text-[var(--color-muted)] mt-0.5">match</p>
      </div>
    </div>
  );
}

// ── Step 3: Connection reveal ─────────────────────────────────────────────────

function ConnectionMock() {
  return (
    <div className="flex-1 flex flex-col space-y-3">
      {/* Compact success banner */}
      <div className="flex items-center gap-2.5 p-3 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-success)] flex items-center justify-center">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M2 5.5L4.5 8L9 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-bold text-[var(--color-success)]">Connection Accepted</p>
          <p className="text-[10px] text-[var(--color-success)] opacity-75">
            Siam Packaging accepted your request
          </p>
        </div>
      </div>

      {/* Contact card */}
      <div className="border border-[var(--color-border)] rounded-xl overflow-hidden">
        {/* Company header */}
        <div className="bg-[var(--color-brand)] px-3.5 py-3 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white/[.12] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
            SP
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white">Siam Packaging Co.</p>
            <p className="text-[10px] text-[var(--color-text-on-dark)]">Packaging · Bangkok</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 bg-white/[.12] text-white rounded-full">
            Verified
          </span>
        </div>

        {/* Contact info — person + email only */}
        <div className="px-3.5 py-3 space-y-2.5 bg-white">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[var(--color-surface-alt)] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="4" r="2" stroke="#6A90B0" strokeWidth="1.2" />
                <path d="M1.5 11c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="#6A90B0" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-xs font-bold text-[var(--color-primary)]">
              Kornkamol S. <span className="font-normal text-[var(--color-muted)]">— CEO & Founder</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[var(--color-surface-alt)] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <rect x="1" y="2.5" width="10" height="7" rx="1.5" stroke="#6A90B0" strokeWidth="1.2" />
                <path d="M1 4.5l5 3 5-3" stroke="#6A90B0" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[11px] font-medium text-[var(--color-body)]">
              kornkamol@siampack.co.th
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="w-full py-2 bg-[var(--color-accent)] text-white font-semibold text-xs rounded-xl text-center select-none">
          Send a Message →
        </div>
      </div>
    </div>
  );
}
