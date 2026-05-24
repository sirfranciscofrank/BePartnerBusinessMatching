"use client";

import Image from "next/image";
import { type MouseEvent } from "react";
import logo from "../../assets/images/logo-primary.png";

type FooterLink = {
  label: string;
  href: string;
};

function handleLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (href === "#") {
    event.preventDefault();
    return;
  }

  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const hash = href.slice(hashIndex);
  const target = document.querySelector(hash);
  if (!target) return;

  event.preventDefault();
  window.history.pushState(null, "", hash);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] text-[var(--color-text-on-dark)]">
      {/* Top accent bar */}
      <div className="h-px bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-accent)] to-[var(--color-brand-light)]" />

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.45fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="BePartner logo"
                className="h-9 w-9 object-contain"
                priority={false}
              />
              <span className="text-lg font-bold tracking-tight text-[var(--color-accent)]">
                BePartner
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--color-text-on-dark)]/80">
              Thailand&apos;s B2B discovery platform for finding relevant
              buyers, suppliers, distributors, and partners.
            </p>

            <p className="mt-4 text-sm text-(--color-text-on-dark)/55">
              No small talk. Just business matching.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/suphakit-saengsawang-034378401/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BePartner on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-(--color-text-on-dark)/15 text-(--color-text-on-dark)/55 transition hover:border-(--color-accent)/50 hover:text-(--color-accent)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/sirfranciscofrank"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="sirfranciscofrank on GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-(--color-text-on-dark)/15 text-(--color-text-on-dark)/55 transition hover:border-(--color-accent)/50 hover:text-(--color-accent)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <FooterColumn
            title="Product"
            links={[
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Features", href: "/#features" },
              { label: "Who It's For", href: "/#who-its-for" },
              { label: "Early Access", href: "/#early-access" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "About BePartner", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Join Early Access", href: "/#early-access" },
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ]}
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-brand-dark)] pt-6 text-sm text-[var(--color-text-on-dark)]/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BePartner. All rights reserved.</p>
          <p>
            Built in Thailand <span className="fi fi-th rounded-sm" /> · by{" "}
            <a
              href="https://github.com/sirfranciscofrank"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-(--color-accent)"
            >
              @sirfranciscofrank
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-light)]">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.href)}
              className="text-sm leading-6 text-[var(--color-text-on-dark)]/80 transition hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
