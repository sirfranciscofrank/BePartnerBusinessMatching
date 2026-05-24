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

            <p className="mt-4 text-sm font-medium italic text-[var(--color-brand-light)]">
              No small talk. Just business matching.
            </p>
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
            Built in Thailand <span className="fi fi-th rounded-sm" />
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
