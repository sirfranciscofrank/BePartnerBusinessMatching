// Keyframes: translateY only - rotation is handled separately per card
// float-a: 6s | float-b: 7s | float-c: 5.5s opposite | float-d: 8s slow

export default function ProductShowcase() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <style>{`
        @keyframes float-a {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes float-b {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes float-c {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(6px); }
        }
        @keyframes float-d {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>

      {/* Top-right search card position */}
      <div
        className="absolute top-[7%] right-[3%] w-[225px]"
        style={{ animation: "float-a 6s ease-in-out infinite" }}
      >
        <div className="-rotate-2">
          <SearchCard />
        </div>
      </div>

      {/* Upper partner result card position */}
      <div
        className="absolute top-[12%] right-[25%] w-[240px]"
        style={{ animation: "float-b 7s ease-in-out infinite", animationDelay: "1s" }}
      >
        <div className="rotate-1">
          <PartnerCard />
        </div>
      </div>

      {/* Lower-middle fit reason card position */}
      <div
        className="absolute top-[50%] right-[34%] w-[185px]"
        style={{ animation: "float-c 5.5s ease-in-out infinite", animationDelay: "0.5s" }}
      >
        <div className="-rotate-1">
          <SharedTagsCard />
        </div>
      </div>

      {/* Lower-right connection request card position */}
      <div
        className="absolute bottom-[4%] right-[2%] w-[210px]"
        style={{ animation: "float-d 8s ease-in-out infinite", animationDelay: "1.5s" }}
      >
        <div className="rotate-2">
          <ConnectionCard />
        </div>
      </div>
    </div>
  );
}

// Sub-components: visual content only, no absolute positioning

function SearchCard() {
  return (
    // Card padding: p-3.5 - adjust here
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-3.5 text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-md">
      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
        Searching For
      </p>
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.055] px-2.5 py-2">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="shrink-0 opacity-35">
          <circle cx="4.5" cy="4.5" r="3.5" stroke="white" strokeWidth="1.2" />
          <path d="M7.5 7.5L9.5 9.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span className="text-[11px] text-white/55">food-grade packaging supplier</span>
      </div>
      {/* Filter chips - gap-1.5 adjust here */}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {["Packaging", "Export", "Near Bangkok"].map((chip) => (
          <span key={chip} className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] text-white/55">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function PartnerCard() {
  return (
    // Card padding: p-3.5 - adjust here
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.05] p-3.5 text-white shadow-[0_14px_42px_rgba(0,0,0,0.24)] backdrop-blur-md">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
          Potential Partner
        </p>
        <span className="rounded-full bg-[var(--color-accent)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)]">
          Relevant
        </span>
      </div>
      {/* Company row - avatar size: h-8 w-8 adjust here */}
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.10] text-[11px] font-bold text-white">
          SP
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-bold leading-tight text-white">Siam Packaging Co.</p>
          <p className="mt-0.5 text-[10px] text-white/50">Packaging supplier · Samut Prakan</p>
        </div>
      </div>
      {/* Tags + action row */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex gap-1">
          {["Packaging", "Export"].map((tag) => (
            <span key={tag} className="rounded bg-white/[0.08] px-1.5 py-0.5 text-[9px] text-white/50">
              {tag}
            </span>
          ))}
        </div>
        <span className="rounded-lg border border-white/[0.12] px-2 py-1 text-[10px] font-medium text-white/40">
          View profile →
        </span>
      </div>
    </div>
  );
}

function SharedTagsCard() {
  return (
    // Card padding: p-3.5 - adjust here
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-3.5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
        Why It May Fit
      </p>
      {/* Checklist - gap-1.5 adjust here */}
      <ul className="flex flex-col gap-1.5" role="list">
        {["Food-grade packaging", "Export-ready", "Near Bangkok"].map((item) => (
          <li key={item} className="flex items-center gap-2 text-[10px] text-white/60">
            <span className="shrink-0 text-[10px] text-[var(--color-accent)]">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConnectionCard() {
  return (
    // Card padding: p-3.5 - adjust here
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3.5 text-white shadow-[0_14px_40px_rgba(0,0,0,0.21)] backdrop-blur-md">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
          Connection Request
        </p>
      </div>
      <p className="text-[10px] leading-relaxed text-white/50">
        Contact details unlock after both businesses accept.
      </p>
    </div>
  );
}
