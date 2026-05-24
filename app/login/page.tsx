import AuthShell from "../components/auth/AuthShell"

export default function LoginPage() {
  return (
    <AuthShell
      heading="Welcome back"
      subheading="Sign in to your account to continue"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkHref="/register"
    >
      <form className="space-y-4">

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
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-light)]"
          />
          <div className="mt-1.5 flex justify-end">
            <a
              href="#"
              className="text-xs font-medium text-[var(--color-brand-light)] hover:text-[var(--color-brand)]"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-[var(--radius-lg)] bg-[var(--color-accent)] py-2.5 text-sm font-semibold text-[var(--color-white)] shadow-[0_2px_12px_rgb(253_109_7_/_0.22)] transition-colors duration-150 hover:bg-[var(--color-accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
        >
          Sign in
        </button>

      </form>
    </AuthShell>
  )
}
