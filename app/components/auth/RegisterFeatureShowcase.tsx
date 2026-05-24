"use client"

import { useState, useEffect } from "react"

// ── Types ─────────────────────────────────────────────────────────────────────

interface PartnerCard {
  initials: string
  name: string
  meta: string
  tags: string[]
}

interface SearchScene {
  query: string
  filters: string[]
  results: PartnerCard[]
}

// ── Scenes ────────────────────────────────────────────────────────────────────

const SCENES: SearchScene[] = [
  {
    query: "Food & Beverage supplier",
    filters: ["Bangkok", "Supplier", "Export"],
    results: [
      { initials: "TF", name: "ThaiFresh Export", meta: "Food & Bev · Chiang Mai", tags: ["Export", "B2B"] },
      { initials: "SP", name: "Siam Packaging Co.", meta: "Packaging · Bangkok", tags: ["Export", "Wholesale"] },
      { initials: "BC", name: "Bangkok Components", meta: "Electronics · Bangkok", tags: ["B2B"] },
    ],
  },
  {
    query: "Packaging & logistics",
    filters: ["Bangkok", "Wholesale", "Supplier"],
    results: [
      { initials: "SP", name: "Siam Packaging Co.", meta: "Packaging · Bangkok", tags: ["Wholesale", "Supplier"] },
      { initials: "TP", name: "Thai Pack Solutions", meta: "Packaging · Samut Prakan", tags: ["Supplier", "Export"] },
      { initials: "EB", name: "Eastern Box Co.", meta: "Packaging · Chonburi", tags: ["B2B", "Wholesale"] },
    ],
  },
  {
    query: "Electronics components",
    filters: ["B2B", "Components", "Bangkok"],
    results: [
      { initials: "BC", name: "Bangkok Components", meta: "Electronics · Bangkok", tags: ["B2B", "Components"] },
      { initials: "EC", name: "Eastern Circuit Supply", meta: "Electronics · Rayong", tags: ["Supplier", "B2B"] },
      { initials: "SI", name: "Siam Industrial Parts", meta: "Industrial · Bangkok", tags: ["Components", "Wholesale"] },
    ],
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function RegisterFeatureShowcase() {
  const [sceneIdx, setSceneIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const interval = setInterval(() => {
      setVisible(false)
      timeout = setTimeout(() => {
        setSceneIdx((i) => (i + 1) % SCENES.length)
        setVisible(true)
      }, 300)
    }, 3800)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const scene = SCENES[sceneIdx]

  return (
    <div className="min-h-screen rounded-2xl bg-white/[.06] border border-white/[.10] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.5)]">

      {/* Card header */}
      <div className="px-4 pt-4 pb-3 border-b border-white/[.08]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Partner Discovery
        </p>
      </div>

      {/* Animated content */}
      <div
        className={`px-4 pt-3 pb-5 transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[.07] border border-white/[.10]">
          <svg
            className="shrink-0 text-white opacity-30"
            width="13" height="13" viewBox="0 0 13 13" fill="none"
            aria-hidden="true"
          >
            <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3" />
            <path d="M9 9L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] text-white/45 select-none truncate">
            {scene.query}
          </span>
        </div>

        {/* Filter chips */}
        <div className="flex gap-1.5 flex-wrap mt-2.5">
          {scene.filters.map((f, i) => (
            <span
              key={f}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border select-none ${
                i === 0
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                  : "bg-white/[.08] border-white/[.12] text-white/70"
              }`}
            >
              {f}
              <span aria-hidden="true" className="opacity-50 text-[10px]">×</span>
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
              Potential Partners
            </p>
            <p className="text-[10px] text-white/25">
              {scene.results.length} results
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {scene.results.map((card, i) => (
              <div
                key={card.name}
                className={`rounded-xl p-3 border ${
                  i === 0
                    ? "bg-white/[.10] border-white/[.18]"
                    : "bg-white/[.05] border-white/[.08]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[.15] flex items-center justify-center text-white font-bold text-[11px] shrink-0">
                    {card.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="flex-1 text-sm font-semibold text-white leading-tight truncate">
                        {card.name}
                      </p>
                      {i === 0 && (
                        <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wide text-white/50 bg-white/[.08] px-1.5 py-0.5 rounded">
                          Top match
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-white/40 truncate mt-0.5">
                      {card.meta}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 flex-wrap min-w-0">
                    <span className="text-[9px] text-white/35 shrink-0">Shared:</span>
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/[.10] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-white bg-white/[.12] border border-white/[.20] px-2.5 py-1 rounded-lg leading-none select-none">
                    Connect →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scene indicator dots */}
      <div className="flex gap-1.5 px-4 pb-4">
        {SCENES.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              i === sceneIdx ? "w-5 bg-[var(--color-accent)]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>

    </div>
  )
}
