import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo-primary.png"

type AuthShellProps = {
  heading: string
  subheading: string
  children: React.ReactNode
  footerText: string
  footerLinkText: string
  footerLinkHref: string
}

export default function AuthShell({
  heading,
  subheading,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthShellProps) {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center px-4 py-16"
      style={{ background: "linear-gradient(160deg, #071A3D 0%, #0B255A 60%, #1E3A8A 100%)" }}
    >
      <Link
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-150 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 12L6 8l4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to home
      </Link>

      <div className="w-full max-w-[400px] rounded-xl bg-[var(--color-white)] p-8 shadow-[var(--shadow-lg)]">

        {/* Brand lockup — clicking returns to home */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-[var(--radius-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-light)] focus-visible:ring-offset-2"
          >
            <Image
              src={logo}
              alt="BePartner Logo"
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="text-[17px] font-bold tracking-tight text-[var(--color-brand)]">
              BePartner
            </span>
          </Link>
        </div>

        <h1 className="mb-1 text-center text-2xl font-bold text-[var(--color-heading)]">
          {heading}
        </h1>
        <p className="mb-6 text-center text-sm text-[var(--color-muted)]">
          {subheading}
        </p>

        {children}

        <p className="mt-6 text-center text-sm text-[var(--color-muted)]">
          {footerText}{" "}
          <Link
            href={footerLinkHref}
            className="font-semibold text-[var(--color-brand-light)] hover:text-[var(--color-brand)]"
          >
            {footerLinkText}
          </Link>
        </p>

      </div>
    </main>
  )
}
