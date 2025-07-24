import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useRef, useMemo } from "react";

export default function GradientText({
  children,
  className,
  colourCenter,
  colourEdge,
  colourBg,
  font,
  parentRef = null,
  center = false,
  scroll = true,
}) {
  const internalRef = useRef(null);
  const scrollRef = parentRef ?? internalRef;
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const yPos = scroll
    ? useTransform(scrollYProgress, [0.1, 1], ["180%", "-40%"])
    : useMotionValue("100%");

  const radialGradient = useTransform(
    yPos,
    (y) =>
      `radial-gradient(circle 800px at 50% ${y}, ${colourCenter}, ${colourEdge}, transparent)`
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
  });

  return (
    <motion.div
      className={`h-full text-transparent bg-clip-text p-8 ${font} ${className} ${
        !center ? "flex items-center justify-center" : ""
      }`}
      style={{
        backgroundColor: colourBg,
        backgroundImage: radialGradient,
      }}
      ref={scrollRef}
    >
      {children}
    </motion.div>
  );
}
