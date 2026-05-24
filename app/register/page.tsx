import Link from "next/link"
import AuthVisualPanel from "../components/auth/AuthVisualPanel"
import AuthFormCard from "../components/auth/AuthFormCard"
import RegisterFeatureShowcase from "../components/auth/RegisterFeatureShowcase"
import bgImage from "../assets/images/auth-background.png"

export default function RegisterPage() {
  return (
    <main className="relative flex h-screen overflow-hidden">

      {/* Back to home — mobile only; desktop version lives inside AuthVisualPanel */}
      <Link
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 lg:hidden flex items-center gap-1.5 text-sm font-medium
          text-(--color-body) hover:text-(--color-brand)
          transition-colors duration-150
          focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand-light)
          rounded"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to home
      </Link>

      {/* Left panel — desktop only */}
      <div
        className="hidden lg:flex w-1/2 flex-col items-stretch justify-center overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 80%, rgba(56,189,248,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 15%, rgba(99,102,241,0.15) 0%, transparent 50%), linear-gradient(155deg, rgba(2,6,23,0.98) 0%, rgba(7,18,55,0.97) 35%, rgba(13,38,110,0.95) 65%, rgba(29,78,216,0.92) 100%), url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AuthVisualPanel
          heading="Find Thai business partners faster."
          subtext="Discover companies by industry, location, and what they need."
          contentTopSpacing="mt-1"
        >
          <RegisterFeatureShowcase />
        </AuthVisualPanel>
      </div>

      {/* Right panel */}
      <div className="flex w-full lg:w-1/2 flex-col bg-(--color-surface)">
        <AuthFormCard
          title="Create your business profile"
          subtitle="Join BePartner and start finding relevant companies."
          footerText="Already have an account?"
          footerLinkText="Sign in"
          footerLinkHref="/login"
        >
          <form className="space-y-4">

            <div>
              <label htmlFor="businessName" className="block text-xs font-medium text-(--color-body) mb-1">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-(--color-body) mb-1">
                Business Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium text-(--color-body) mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-(--color-body) mb-1">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-(--color-accent) py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgb(253_109_7/0.22)] transition-colors duration-150 hover:bg-(--color-accent-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
            >
              Create account
            </button>

          </form>
        </AuthFormCard>
      </div>

    </main>
  )
}
