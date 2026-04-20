import { BarChart3, Palette, Shield, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BlurText from "./BlurText";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Days, Not Months",
    body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    body: "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    body: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
          <span className="text-xs font-medium text-white font-body">
            Why Us
          </span>
        </div>
        <BlurText
          text="The difference is everything."
          delay={100}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <div key={title} className="liquid-glass rounded-2xl p-6">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-xl font-heading italic text-white mb-2">
              {title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
