import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Direction = "top" | "bottom";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: Direction;
  threshold?: number;
  rootMargin?: string;
  stepDuration?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function BlurText({
  text,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  stepDuration = 0.35,
  as: Tag = "h1",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const fromY = direction === "bottom" ? 50 : -50;
  const midY = direction === "bottom" ? -5 : 5;

  const keyframes = {
    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
    opacity: [0, 0.5, 1],
    y: [fromY, midY, 0],
  };

  const TagEl = Tag as any;

  return (
    <TagEl ref={ref as any} className={className}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={{ filter: "blur(10px)", opacity: 0, y: fromY }}
          animate={
            inView
              ? {
                  filter: keyframes.filter,
                  opacity: keyframes.opacity,
                  y: keyframes.y,
                }
              : { filter: "blur(10px)", opacity: 0, y: fromY }
          }
          transition={{
            duration: stepDuration * 2,
            times: [0, 0.5, 1],
            delay: (index * delay) / 1000,
            ease: "easeOut",
          }}
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </TagEl>
  );
}
