import { Children, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyStack({ children }) {
  // bg-[#e0e1dd] text-[#0c4d1e] text-[#ffbf00]
  // bg-[#0c1129] text-[#e0e1dd] text-[#d1a877]
  // bg-[#212121] text-[#651612] text-[#e0e1dd]
  // mouse parallax + text fade in + image blur in/out

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className={`relative h-full w-full top-0 left-0 bg-black`}
      style={{ opacity }}
      ref={scrollRef}
    >
      {children}
    </div>
  );
}
