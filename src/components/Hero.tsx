import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import BlurText from "./BlurText";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Autoplay blocked — retry on first user interaction.
          const retry = () => {
            v.play().catch(() => {});
            window.removeEventListener("pointerdown", retry);
            window.removeEventListener("keydown", retry);
            window.removeEventListener("scroll", retry);
          };
          window.addEventListener("pointerdown", retry, { once: true });
          window.addEventListener("keydown", retry, { once: true });
          window.addEventListener("scroll", retry, { once: true });
        });
      }
    };

    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, []);

  return (
    <section
      className="relative overflow-visible flex flex-col"
      style={{ height: "1000px" }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: "20%" }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "300px",
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6 flex-1"
        style={{ paddingTop: "150px" }}
      >
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white/90 text-xs md:text-sm font-body font-light pr-3">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        <BlurText
          text="The website your business deserves"
          delay={100}
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px]"
          direction="bottom"
        />

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-6 max-w-xl text-sm md:text-base text-white font-body font-light leading-tight"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="mt-8 flex items-center gap-5"
        >
          <a
            href="#get-started"
            className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-white text-sm font-body font-medium"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
