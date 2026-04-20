import { Gauge, Accessibility, Key } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BlurText from "./BlurText";

interface Guarantee {
  icon: LucideIcon;
  title: string;
  body: string;
}

const GUARANTEES: Guarantee[] = [
  {
    icon: Gauge,
    title: "Performance, Guaranteed",
    body: "Lighthouse 95+ on every build. Sub-second loads. Core Web Vitals in the green—or we fix it, on us.",
  },
  {
    icon: Accessibility,
    title: "Accessible by Default",
    body: "WCAG 2.1 AA is our baseline, not a bolt-on. A site only works if it works for everyone.",
  },
  {
    icon: Key,
    title: "You Own Everything",
    body: "Full code. Full design files. Full rights. No black boxes, no vendor lock-in. Yours from day one.",
  },
];

export default function Guarantees() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
          <span className="text-xs font-medium text-white font-body">
            Our Standards
          </span>
        </div>
        <BlurText
          text="Built to a higher standard."
          delay={100}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl mx-auto"
        />
        <p className="mt-6 max-w-xl mx-auto text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          We're new—so we don't ask you to take our word for it. We put it in
          writing. Every project ships to these guarantees, or we make it right.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GUARANTEES.map(({ icon: Icon, title, body }) => (
          <div key={title} className="liquid-glass rounded-2xl p-8">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-2xl font-heading italic text-white mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-white/70 font-body font-light text-sm leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
