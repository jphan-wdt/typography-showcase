import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

import Image from "next/image";
import images from "@/components/images";

export default function ParallaxVideo({
  children,
  top,
  bottom,
  alt,
  sourcePath,
  colourFrom,
  colourTo,
  blur,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]); // bottom 400

  const scaleTransform = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.85],
    [1, 5, 25, 80]
  );
  const scaleStatic = 1;
  const textScale = bottom && !alt ? scaleTransform : scaleStatic;

  const topScale = useTransform(scrollYProgress, [0.05, 0.48], [0.9, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!bottom) return;
    if (latest >= 0.525)
      document.documentElement.style.setProperty("--color6", colourTo);
    else document.documentElement.style.setProperty("--color6", colourFrom);
  });

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "800px 0px" }
    );

    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, []);

  const videoRef = useRef(null);
  useEffect(() => {
    if (!videoRef.current) return;

    if (inView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    <div
      className={`h-[120svh] ${
        top && alt
          ? "[clip-path:polygon(0_0,0%_95%,100%_100%,100%_0%)]"
          : bottom && alt
          ? "[clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_5%)]"
          : ""
      } `}
      ref={scrollRef}
    >
      <motion.div
        className={`w-full overflow-hidden
                  ${
                    top && !alt
                      ? "h-[120svh] relative rounded-t-xl"
                      : bottom && !alt
                      ? "h-[200svh] sticky top-0"
                      : "h-[120svh] relative"
                  }`}
        style={{ scale: top && !alt ? topScale : 1 }}
      >
        <motion.div className="h-full w-full" style={{ y }}>
          <video
            className={`relative h-full w-full object-cover ${
              blur ? "blur-sm" : ""
            }`}
            muted
            playsInline
            loop
            preload="none"
            ref={videoRef}
          >
            <source src={sourcePath} type="video/mp4" />
          </video>
          {blur && <div className="absolute inset-0 bg-black/60" />}
          <motion.div
            className={`absolute top-1/4 ${
              bottom && !alt ? "" : "h-full w-full"
            }`}
            style={{
              color: colourTo,
              scale: textScale,
              left: "50%",
              x: "-50%",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
