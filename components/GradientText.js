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
  const yPos = useTransform(scrollYProgress, [0.1, 0.7], ["350%", "-60%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="h-[90vh] text-[12vw] text-center flex items-center justify-center text-balance">
      <motion.div
        className={`font-bold text-transparent bg-clip-text leading-none p-8 ${font}`}
        style={{
          backgroundColor: colourBg,
          backgroundImage: useTransform(
            [xPos, yPos],
            ([x, y]) =>
              `radial-gradient(circle 800px at ${x} ${y}, ${colourCenter}, ${colourEdge}, transparent)`
          ),
        }}
        ref={scrollRef}
      >
        {children}
      </motion.div>
    </div>
  );
}
