import { motion, useScroll, useTransform } from "framer-motion";

export default function RadialGradient({ scrollRef }) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const origin = useTransform(
    scrollYProgress,
    [0.18, 0.2, 0.315, 0.425, 0.5, 0.56, 0.68, 0.815, 0.89, 0.94],
    [
      "rgba(0, 0, 0, 0)",
      "#d3e0f4", // ferrari
      "#8b7cc4", // evija /
      "#6d3c5e", // character: evija
      "#555a73", // type
      "#377186", // chiron /
      "#525d48", // spyder /
      "#377085", // style: spyder
      "#ba6769", // fine print
      "rgba(21, 21, 21, 0.4)",
    ]
  );

  const gradient = useTransform([origin], ([c]) => {
    return `radial-gradient(circle 1500px at 0% 0%, ${c}, transparent)`;
  });

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[-10]"
      style={{ background: gradient }}
    />
  );
}
