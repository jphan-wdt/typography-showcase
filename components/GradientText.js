import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function GradientText({ children, colourFrom, colourTo, font }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["50%", "50%"]);
  const yPos = useTransform(scrollYProgress, [0.1, 0.9], ["180%", "-10%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="h-[90vh] text-[12vw] text-center flex items-center justify-center text-balance">
      <motion.div
        className={`font-bold text-transparent bg-clip-text leading-none ${font}`}
        style={{
          backgroundImage: useTransform(
            [xPos, yPos],
            ([x, y]) =>
              `radial-gradient(circle 500px at ${x} ${y}, ${colourTo}, ${colourFrom})`
          ),
        }}
        ref={scrollRef}
      >
        {children}
      </motion.div>
    </div>
  );
}
