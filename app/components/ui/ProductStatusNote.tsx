export default function ProductStatusNote() {
  return (
    <aside
      aria-label="Product status"
      className="mt-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3.5 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
    >
      <p className="text-[11px] font-semibold text-[var(--color-heading)]">
        Built with early business feedback
      </p>
      <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-muted)]">
        BePartner is being shaped with Thai businesses so the product stays
        focused on real connection problems.
      </p>
    </aside>
  );
}
