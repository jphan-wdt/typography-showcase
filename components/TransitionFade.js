import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

export default function TransitionFade({ sourcePath, colourFrom, colourTo }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const videoRef = useRef(null);

  const opacity = useTransform(
    scrollYProgress,
    [0.06, 0.12, 0.58, 0.62],
    [0, 1, 1, 0]
  );
  // 0.12, 0.2, 0.56, 0.64
  const blur = useTransform(
    scrollYProgress,
    [0.12, 0.2, 0.52, 0.6],
    ["blur(100px)", "blur(0px)", "blur(0px)", "blur(100px)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.52, 0.64],
    [1.5, 1, 1, 1.2]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    document.documentElement.style.setProperty(
      "--color6",
      latest >= 0.25 ? colourTo : colourFrom
    );
    // console.log(latest);
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (latest) => {
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        const duration = video.duration;
        if (latest >= 0.1 && latest <= 0.66) {
          const relativeProgress = (latest - 0.12) / (0.64 - 0.12);
          const time = Math.min(relativeProgress * duration, duration - 0.1);
          video.currentTime = time;
        }
      }
    });

    return () => unsub();
  });

  return (
    <div className="relative mb-[-100vh] mt-[-100vh] w-full -z-10 overflow-hiddn">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          ref={videoRef}
          className="absolute h-screen w-full object-cover overflow-hidden"
          muted
          playsInline
          preload="auto"
          style={{ opacity, scale, filter: blur }}
        >
          <source src={sourcePath} type="video/mp4" />
        </motion.video>
      </div>
      <div className="h-[300vh] w-full overflow-hidden" ref={scrollRef} />
    </div>
  );
}
