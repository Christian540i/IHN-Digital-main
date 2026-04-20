import BlurText from "./BlurText";
import HlsVideo from "./HlsVideo";

const VIDEO_SRC =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const FOOTER_LINKS = ["Privacy", "Terms", "Contact"];

export default function CtaFooter() {
  return (
    <section className="relative w-full overflow-hidden">
      <HlsVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, transparent, rgba(0,0,0,1))",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-8">
        <div className="flex flex-col items-center text-center">
          <BlurText
            text="Your next website starts here."
            delay={100}
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight max-w-3xl"
          />
          <p className="mt-8 max-w-xl text-white/70 font-body font-light text-sm md:text-base leading-relaxed">
            Book a free strategy call. See what AI-powered design can do. No
            commitment, no pressure. Just possibilities.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#book"
              className="liquid-glass-strong rounded-full px-6 py-3 text-white text-sm font-body font-medium"
            >
              Book a Call
            </a>
            <a
              href="#pricing"
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium"
            >
              View Pricing
            </a>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-body">
            © 2026 IHN Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/40 text-xs font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
