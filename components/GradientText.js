import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function GradientText({
  children,
  colourCenter,
  colourEdge,
  colourBg,
  font,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["50%", "50%"]);
  const yPos = useTransform(scrollYProgress, [0.1, 1], ["125%", "-20%"]);

  const radialGradient = useTransform(
    [xPos, yPos],
    ([x, y]) =>
      `radial-gradient(circle 800px at ${x} ${y}, ${colourCenter}, ${colourEdge}, transparent)`
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
  });

  return (
    <motion.div
      className={`h-full text-center flex items-center justify-center text-transparent bg-clip-text leading-none p-8 ${font}`}
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
