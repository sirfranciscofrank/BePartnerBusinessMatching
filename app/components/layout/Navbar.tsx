"use client"

import Image from "next/image"
import Link from "next/link"
import { type MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react"
import logo from "../../assets/images/logo-primary.png"

type Language = {
  code: string
  flag: string
  label: string
  short: string
  disabled?: boolean
}

const LANGUAGES: Language[] = [
  { code: "en", flag: "gb", label: "English", short: "EN" },
  { code: "th", flag: "th", label: "ไทย", short: "TH" },
  { code: "zh", flag: "cn", label: "中文", short: "ZH", disabled: true },
]

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Who It's For", href: "/#who-its-for" },
  { label: "Early Access", href: "/#early-access" },
]

export default function Navbar() {
  const [lang, setLang] = useState<Language>(LANGUAGES[0])
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hideAfter = 96

    function handleScroll() {
      setNavVisible(window.scrollY < hideAfter)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close language dropdown on outside click
  useEffect(() => {
    if (!langOpen) return
    function handleOutsideClick(e: globalThis.MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [langOpen])

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [mobileOpen])

  function handleNavClick(e: ReactMouseEvent<HTMLAnchorElement>, href: string) {
    const hashIndex = href.indexOf("#")
    if (hashIndex === -1) return

    const hash = href.slice(hashIndex)
    const target = document.querySelector(hash)
    if (!target) return

    e.preventDefault()
    setMobileOpen(false)
    window.history.pushState(null, "", hash)
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const shouldShowNav = navVisible || langOpen || mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-white)] shadow-[var(--shadow-sm)] transition-all duration-300 ease-out ${
        shouldShowNav ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--container-max-width)] items-center justify-between gap-6 px-5 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-[var(--radius-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-light)] focus-visible:ring-offset-2"
        >
          <Image
            src={logo}
            alt="BePartner Logo"
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-[17px] font-bold tracking-tight text-[var(--color-brand)]">
            BePartner
          </span>
        </Link>

        {/* Center Nav Links — desktop only */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="m-0 flex list-none items-center gap-0.5 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="rounded-[var(--radius-lg)] px-3.5 py-2 text-sm font-medium text-[var(--color-body)] transition-colors duration-150 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">

          {/* Language Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label={`Language: ${lang.label}`}
              className="flex h-9 items-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-transparent px-2.5 text-sm font-medium text-[var(--color-body)] transition-colors duration-150 hover:border-[var(--color-brand-light)] hover:bg-[var(--color-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-light)] focus-visible:ring-offset-2"
            >
              <span className={`fi fi-${lang.flag} rounded-sm`} aria-hidden="true" />
              <span>{lang.short}</span>
              <svg
                className={`h-3 w-3 text-[var(--color-muted)] transition-transform duration-150 ${langOpen ? "rotate-180" : ""}`}
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {langOpen && (
              <ul
                role="listbox"
                aria-label="Select language"
                className="absolute right-0 z-50 mt-1.5 w-44 list-none rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-1 shadow-[0_8px_24px_rgb(13_31_74_/_0.12)]"
              >
                {LANGUAGES.map((l) => (
                  <li key={l.code} role="option" aria-selected={lang.code === l.code}>
                    <button
                      disabled={l.disabled}
                      onClick={() => {
                        if (!l.disabled) {
                          setLang(l)
                          setLangOpen(false)
                        }
                      }}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                        l.disabled
                          ? "cursor-not-allowed opacity-50"
                          : lang.code === l.code
                          ? "bg-[var(--color-surface)] font-semibold text-[var(--color-brand)]"
                          : "font-medium text-[var(--color-body)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand)]"
                      }`}
                    >
                      <span className={`fi fi-${l.flag} rounded-sm`} aria-hidden="true" />
                      <span className="flex-1 text-left">{l.label}</span>
                      {l.disabled && (
                        <span className="rounded-full bg-[var(--color-surface-alt)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                          Soon
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sign In — visible from sm breakpoint */}
          <Link
            href="/login"
            className="hidden h-9 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-brand-light)] px-4 text-sm font-semibold text-[var(--color-brand)] transition-colors duration-150 hover:border-[var(--color-brand)] hover:bg-[var(--color-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-light)] focus-visible:ring-offset-2 sm:flex"
          >
            Sign In
          </Link>

          {/* Create Profile CTA — visible from sm breakpoint */}
          <Link
            href="/register"
            className="hidden h-9 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-accent)] px-4 text-sm font-semibold text-[var(--color-white)] shadow-[0_2px_12px_rgb(253_109_7_/_0.22)] transition-colors duration-150 hover:bg-[var(--color-accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 sm:flex"
          >
            Create Profile
          </Link>

          {/* Mobile Menu Toggle — hidden on lg+ */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] text-[var(--color-body)] transition-colors duration-150 hover:bg-[var(--color-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-light)] focus-visible:ring-offset-2 lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path
                  d="M1 1h12M1 5h12M1 9h12"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-white)] lg:hidden">
          <div className="mx-auto max-w-[var(--container-max-width)] px-5 py-3 md:px-8">
            <nav aria-label="Mobile navigation">
              <ul className="m-0 list-none space-y-0.5 p-0">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block rounded-[var(--radius-lg)] px-3 py-2.5 text-sm font-medium text-[var(--color-body)] transition-colors duration-150 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand)]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTAs — only shown on xs screens where buttons above are hidden */}
            <div className="mt-3 flex flex-col gap-2 border-t border-[var(--color-border)] pt-3 sm:hidden">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-brand-light)] px-4 text-sm font-semibold text-[var(--color-brand)] transition-colors duration-150 hover:bg-[var(--color-surface)]"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-accent)] px-4 text-sm font-semibold text-[var(--color-white)] transition-colors duration-150 hover:bg-[var(--color-accent-hover)]"
              >
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
