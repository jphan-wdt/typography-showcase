import { motion, useScroll, useTransform } from "framer-motion";

export default function RadialGradient({ scrollRef }) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const colour = useTransform(
    scrollYProgress,
    [0.18, 0.185, 0.32, 0.46],
    [
      "rgba(217, 202, 184, 0)",
      "rgba(217, 202, 184, 1)",
      "rgba(55, 113, 134, 1)",
      "rgba(140, 125, 197, 1)",
    ]
  );
  const gradient = useTransform([colour], ([c]) => {
    return `radial-gradient(circle 1500px at 95% 5%, ${c}, transparent)`;
  });

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[-10]"
      style={{ background: gradient }}
    >
      <div className="absolute w-[100vw] h-[100vh]">
        <div className="w-full h-full radial-gradient(circle at top left, rgba(255, 0, 0, 1), transparent)" />
      </div>
    </motion.div>
  );
}
