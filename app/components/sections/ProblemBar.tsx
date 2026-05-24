export default function ProblemBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-center text-sm leading-relaxed sm:text-[15px] lg:text-left">
          <span className="font-medium text-[var(--color-body)]">
            Still relying on business cards and spreadsheets?
          </span>

          <span className="hidden text-[var(--color-muted)] sm:inline" aria-hidden="true">
            &middot;
          </span>

          <span className="font-medium text-[var(--color-secondary)]">
            Leads get forgotten.
          </span>

          <span className="hidden text-[var(--color-muted)] sm:inline" aria-hidden="true">
            &middot;
          </span>

          <span className="font-medium text-[var(--color-secondary)]">
            Follow-ups get scattered.
          </span>

          <span className="font-semibold text-[var(--color-heading)]">
            <span className="text-[var(--color-accent)]">BePartner</span> helps Thai businesses discover relevant
            partners and start real conversations.
          </span>
        </div>
      </div>
    </section>
  );
}
