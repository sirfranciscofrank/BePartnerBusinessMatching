import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/logo-primary.png"

type AuthVisualPanelProps = {
  heading: string
  subtext?: string
  children?: React.ReactNode
  contentTopSpacing?: string
}

export default function AuthVisualPanel({
  heading,
  subtext,
  children,
  contentTopSpacing = "mt-1",
}: AuthVisualPanelProps) {
  return (
    <div className="h-full w-full flex flex-col">

      {/* Back to home — standalone top row */}
      <div className="px-14 pt-10 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white/90 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>
      </div>

      {/* Content block: logo → headline → subtext → children */}
      <div className={`px-14 ${contentTopSpacing} flex flex-col`}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <Image
            src={logo}
            alt="BePartner Logo"
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-white">
            BePartner
          </span>
        </Link>

        <h2 className="mt-8 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-white xl:text-4xl">
          {heading}
        </h2>

        {subtext && (
          <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
            {subtext}
          </p>
        )}
      </div>

      {/* Page-specific slot — wider padding so showcase card fills the panel */}
      {children && (
        <div className="mt-10 px-4">
          {children}
        </div>
      )}

    </div>
  )
}
