import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function TextSlide({ children, delay, className }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  const variants = {
    hidden: { y: "0" },
    visible: { y: "-100%" },
  };

  const variants2 = {
    hidden: { y: "100%" },
    visible: { y: "0" },
  };

  return (
    <div ref={ref} className="flex absolute top-16 overflow-hidden h-1/2">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
        className={`flex flex-col ${className ?? ""}`}
      >
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}
