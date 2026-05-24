import type { ReactNode } from "react";

type AudienceCard = {
  title: string;
  body: string;
  usefulFor: string;
  icon: ReactNode;
};

const audiences: AudienceCard[] = [
  {
    title: "Suppliers & Manufacturers",
    body: "Show what you offer and get discovered by businesses looking for products, materials, or production partners.",
    usefulFor: "Finding buyers, distributors, or procurement teams.",
    icon: <FactoryIcon />,
  },
  {
    title: "Buyers & Procurement Teams",
    body: "Browse potential suppliers by industry, location, tags, and business needs before reaching out.",
    usefulFor: "Finding suppliers without messy spreadsheets.",
    icon: <SearchIcon />,
  },
  {
    title: "Distributors & Exporters",
    body: "Discover companies that may fit your market, product category, or regional expansion goals.",
    usefulFor: "Finding distribution or cross-border partners.",
    icon: <RouteIcon />,
  },
  {
    title: "Service Providers & B2B Partners",
    body: "Present your services clearly and connect with companies looking for support, collaboration, or strategic partners.",
    usefulFor: "Finding clients, collaborators, or business partners.",
    icon: <HandshakeIcon />,
  },
];

export default function WhoItsForSection() {
  return (
    <section
      id="who-its-for"
      className="scroll-mt-20 bg-[var(--color-white)] px-4 pt-20 pb-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            WHO IT&rsquo;S FOR
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-primary)] sm:text-3xl lg:text-[2.35rem]">
            For businesses that need better ways to find buyers, suppliers, and partners.
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-sm leading-7 text-[var(--color-secondary)] sm:text-base">
            Whether you sell, source, distribute, or collaborate, BePartner helps
            you discover relevant Thai businesses and start warmer
            conversations.
          </p>

          <p className="mx-auto mt-3 max-w-[720px] text-sm leading-6 text-[var(--color-muted)]">
            Many businesses fit more than one role &mdash; BePartner lets you describe
            both what you offer and what you need.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand-light)] hover:shadow-md"
            >
              <div className="flex flex-1 items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-brand)] transition-colors duration-200 group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent)]">
                  {audience.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-[var(--color-primary)]">
                    {audience.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-secondary)]">
                    {audience.body}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2 border-t border-[var(--color-border)] pt-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-primary)]">Useful for:</span>{" "}
                  {audience.usefulFor}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactoryIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.75 20.25h16.5" />
      <path d="M5.25 20.25V10.5l4.5 2.25V10.5l4.5 2.25V6.75h4.5v13.5" />
      <path d="M8.25 16.5h.01" />
      <path d="M12 16.5h.01" />
      <path d="M15.75 16.5h.01" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.75 18.25a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
      <path d="m16.25 16.25 4 4" />
      <path d="M7.75 10.75h6" />
      <path d="M10.75 7.75v6" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 6.5h.01" />
      <path d="M18.5 17.5h.01" />
      <path d="M5.5 9.75v.75a3 3 0 0 0 3 3h7a3 3 0 0 1 3 3v1" />
      <path d="M5.5 3.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z" />
      <path d="M18.5 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.5 12.25 10 9.75a2.1 2.1 0 0 1 3 0l.75.75a2.1 2.1 0 0 0 3 0l.75-.75" />
      <path d="m3.75 10.5 3.5-3.5 3 3" />
      <path d="m20.25 10.5-3.5-3.5-3 3" />
      <path d="m7.25 13.25 4.25 4.25a2.1 2.1 0 0 0 3 0l2.25-2.25" />
      <path d="m5.75 12.75 2.5 2.5" />
      <path d="m18.25 12.75-2.5 2.5" />
    </svg>
  );
}
