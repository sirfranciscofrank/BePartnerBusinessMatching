import ProductShowcase from "../ui/ProductShowcase"

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[var(--color-primary)] text-[var(--color-white)]">
            {/* Decorative video — right side only, blue fills the rest */}
            <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-right"
                >
                    <source src="/assets/images/hero-vdo.mp4" type="video/mp4" />
                </video>
                {/* Fade left edge into the blue background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
            </div>

            {/* Bottom-left glow — sky blue, visible on dark bg */}
            <div className="absolute bottom-[-200px] left-[80px] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-light)] opacity-20 blur-3xl" />
            {/* Top-right glow for depth */}
            <div className="absolute top-[-120px] right-[-60px] h-[420px] w-[420px] rounded-full bg-[var(--color-brand)] opacity-20 blur-3xl" />

            <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center gap-10 px-6 pt-8 pb-12">
                {/* LEFT CONTENT */}
                <div className="max-w-xl">

                    {/* Eyebrow pill */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs tracking-[0.18em] uppercase text-[var(--color-text-on-dark)]">
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        Thailand&apos;s B2B Discovery Platform
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                        Find relevant Thai business partners{" "}
                        <span className="text-[var(--color-accent)]">faster.</span>
                    </h1>

                    {/* Tagline */}
                    <p className="mt-3 text-base font-medium tracking-wide text-white/60">
                        No small talk. Just business matching.
                    </p>

                    {/* Body */}
                    <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-[var(--color-text-on-dark)]">
                        <span className="font-semibold text-white">BePartner</span> helps Thai SMEs
                        and corporates browse, filter, and discover relevant suppliers, buyers,
                        distributors, and partners — then request a connection when there&apos;s a
                        good fit.
                    </p>

                    {/* CTAs */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        <button className="rounded-xl bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_28px_rgba(253,109,7,0.38)] transition hover:bg-[var(--color-accent-hover)] hover:shadow-[0_12px_36px_rgba(253,109,7,0.50)]">
                            Create Business Profile
                        </button>
                        <button className="rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/[0.15] hover:border-white/40">
                            See How It Works
                        </button>
                    </div>

                    {/* Social proof */}
                    <div className="mt-8 flex items-center gap-3">
                        <div className="flex -space-x-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/20 bg-[#38BDF8] text-sm font-bold text-[#0C2D48]">ส</div>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/20 bg-[#FB923C] text-sm font-bold text-[#7C2D00]">K</div>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/20 bg-[#4ADE80] text-sm font-bold text-[#052E16]">อ</div>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/20 bg-[#A78BFA] text-sm font-bold text-[#2E1065]">P</div>
                        </div>
                        <p className="text-sm text-[var(--color-text-on-dark)]">
                            Now onboarding{" "}
                            <span className="font-semibold text-white">early access partners</span>
                        </p>
                    </div>
                </div>

                <ProductShowcase />
            </div>
        </section>
    );
}