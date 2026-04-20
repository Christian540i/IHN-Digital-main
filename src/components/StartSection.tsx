import { ArrowUpRight } from "lucide-react";
import BlurText from "./BlurText";
import HlsVideo from "./HlsVideo";

const VIDEO_SRC =
  "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

export default function StartSection() {
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

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32"
        style={{ minHeight: "500px" }}
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-xs font-medium text-white font-body">
            How It Works
          </span>
        </div>

        <BlurText
          text="You dream it. We ship it."
          delay={120}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl"
        />

        <p className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base">
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </p>

        <a
          href="#get-started"
          className="mt-8 liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-white text-sm font-body font-medium"
        >
          Get Started
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
