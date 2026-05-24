import Link from "next/link"
import AuthVisualPanel from "../components/auth/AuthVisualPanel"
import AuthFormCard from "../components/auth/AuthFormCard"

export default function LoginPage() {
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
        className="hidden lg:flex w-1/2 flex-col items-stretch justify-start overflow-hidden"
        style={{ background: "linear-gradient(160deg, #071A3D 0%, #0B255A 60%, #1E3A8A 100%)" }}
      >
        <AuthVisualPanel
          heading="Continue finding business partners."
          subtext="Manage your profile, review matches, and respond to connection requests."
          contentTopSpacing="mt-10"
        />
      </div>

      {/* Right panel */}
      <div className="flex w-full lg:w-1/2 flex-col bg-(--color-surface)">
        <AuthFormCard
          title="Welcome back"
          subtitle="Sign in to continue to BePartner"
          footerText="New to BePartner?"
          footerLinkText="Create a business profile"
          footerLinkHref="/register"
        >
          <form className="space-y-4">

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-(--color-body) mb-1">
                Email
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
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-(--color-border) bg-(--color-surface) text-sm focus:outline-none focus:border-(--color-brand-light)"
              />
              <div className="mt-1.5 flex justify-end">
                <a href="#" className="text-xs font-medium text-(--color-brand-light) hover:text-(--color-brand)">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-(--color-accent) py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgb(253_109_7/0.22)] transition-colors duration-150 hover:bg-(--color-accent-hover) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
            >
              Sign in
            </button>

          </form>
        </AuthFormCard>
      </div>

    </main>
  )
}
