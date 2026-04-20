import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = ["Home", "Services", "Work", "Process", "Pricing"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <Logo size={48} className="h-12 w-12" />
        <span className="hidden sm:inline text-xl md:text-2xl font-heading italic text-white leading-none">
          IHN Digital
        </span>
      </a>

      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
        {NAV_LINKS.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
          >
            {label}
          </a>
        ))}
        <a
          href="#get-started"
          className="ml-2 inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body"
        >
          Get Started
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <a
        href="#get-started"
        className="md:hidden inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body"
      >
        Get Started
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </nav>
  );
}
