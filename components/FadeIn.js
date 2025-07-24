"use client";

import { React, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function FadeIn({ children, className, onClick, delay }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
