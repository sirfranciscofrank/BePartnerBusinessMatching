export default function EarlyAccessCTA() {
  return (
    <section id="early-access" className="scroll-mt-20 bg-[var(--color-surface)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-brand-light)]/25 bg-[radial-gradient(circle_at_50%_0%,var(--color-brand-light)_0%,transparent_34%),linear-gradient(135deg,var(--color-primary)_0%,var(--color-brand-dark)_56%,var(--color-brand)_100%)] px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-14 lg:px-16">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-32 bg-[radial-gradient(ellipse_at_center,var(--color-accent)_0%,transparent_68%)] opacity-15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--color-white)_0%,transparent_34%)] opacity-[0.04]" />

          <div className="relative mx-auto max-w-[650px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              EARLY ACCESS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-white)] sm:text-4xl">
              Be one of the first Thai businesses on BePartner.
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-[var(--color-text-on-dark)] sm:text-lg">
              Create your profile, join the pilot, and help shape a better way for Thai businesses to discover buyers, suppliers, distributors, and partners.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-[var(--color-accent)] opacity-30 blur-xl" />
                <button
                  type="button"
                  className="relative min-h-12 rounded-xl bg-[var(--color-accent)] px-7 py-3.5 text-base font-bold text-[var(--color-white)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition duration-150 hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_22px_48px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)] sm:px-9"
                >
                  Create Your Free Profile
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-[var(--color-text-on-dark)]/75">
              Limited pilot spots &middot; Free to join &middot; Built for Thai businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
