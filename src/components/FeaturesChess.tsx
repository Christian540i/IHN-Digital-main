import { ArrowUpRight } from "lucide-react";
import BlurText from "./BlurText";
import feature1 from "../assets/feature-1.gif";
import feature2 from "../assets/feature-2.gif";

interface RowProps {
  reverse?: boolean;
  title: string;
  body: string;
  cta: string;
  gif: string;
}

function ChessRow({ reverse, title, body, cta, gif }: RowProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-10 lg:gap-16 items-center`}
    >
      <div className="flex-1 max-w-xl">
        <BlurText
          text={title}
          delay={80}
          className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.95]"
        />
        <p className="mt-6 text-white/70 font-body font-light text-sm md:text-base leading-relaxed">
          {body}
        </p>
        <a
          href="#learn-more"
          className="mt-8 liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-white text-sm font-body font-medium"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="flex-1 w-full">
        <div className="liquid-glass rounded-2xl overflow-hidden">
          <img src={gif} alt="" className="w-full h-auto block" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesChess() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="text-center mb-16 md:mb-24">
        <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
          <span className="text-xs font-medium text-white font-body">
            Capabilities
          </span>
        </div>
        <BlurText
          text="Pro features. Zero complexity."
          delay={100}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl mx-auto"
        />
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        <ChessRow
          title="Designed to convert. Built to perform."
          body="Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all."
          cta="Learn more"
          gif={feature1}
        />
        <ChessRow
          reverse
          title="It gets smarter. Automatically."
          body="Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever."
          cta="See how it works"
          gif={feature2}
        />
      </div>
    </section>
  );
}
