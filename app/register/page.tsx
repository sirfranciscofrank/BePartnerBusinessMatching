import AuthShell from "../components/auth/AuthShell"

export default function RegisterPage() {
  return (
    <AuthShell
      heading="Create your account"
      subheading="Get started — it only takes a minute"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/login"
    >
      <form className="space-y-4">

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="block text-xs font-medium text-[var(--color-body)] mb-1">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="Jane"
              className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-medium text-[var(--color-body)] mb-1">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Smith"
              className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[var(--color-body)] mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-medium text-[var(--color-body)] mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-[var(--radius-lg)] bg-[var(--color-accent)] py-2.5 text-sm font-semibold text-[var(--color-white)] shadow-[0_2px_12px_rgb(253_109_7_/_0.22)] transition-colors duration-150 hover:bg-[var(--color-accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
        >
          Create account
        </button>

        <p className="text-center text-[11px] leading-relaxed text-[var(--color-muted)]">
          By creating an account you agree to our{" "}
          <a href="#" className="underline hover:text-[var(--color-brand-light)]">
            Terms of Service
          </a>
          {" "}and{" "}
          <a href="#" className="underline hover:text-[var(--color-brand-light)]">
            Privacy Policy
          </a>
          .
        </p>

      </form>
    </AuthShell>
  )
}
