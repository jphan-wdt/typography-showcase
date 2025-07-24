import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import FadeIn from "./FadeIn";

// parallax types: stretch height, translate y
export default function StickyPanel({
  layout,
  parallax,
  ranges,
  images,
  content,
  sourcePath,
}) {
  const { left: leftLayout, right: rightLayout } = layout;
  const { left: leftParallax, right: rightParallax } = parallax;
  const { height: heightRange, translate: translateRange } = ranges;
  const { h1, h2, h3, h4, font1, font2, colour } = content;

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const videoRef = useRef(null);
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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
  });

  const height = useTransform(scrollYProgress, [0, 1], heightRange);
  const y = useTransform(scrollYProgress, [0, 1], translateRange);

  const parallaxType = (type) => {
    switch (type) {
      case "none":
        return {};
      case "height":
        return {
          height,
        };
      case "translate":
        return {
          y,
        };
      default:
        return {};
    }
  };

  const left = parallaxType(leftParallax);
  const right = parallaxType(rightParallax);

  const textLayout = (side) => {
    const itemsAlign = side === "left" ? "items-end " : "items-start";
    return (
      <motion.div
        className={`top-0 w-full flex flex-col gap-10 justify-between ${itemsAlign} ${colour} leading-none tracking-tighter font-thin z-[5]`}
        style={left}
      >
        <h1
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } ${font1}`}
        >
          <FadeIn>{h1}</FadeIn>
        </h1>
        <h2
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-5xl ${font2}`}
        >
          <FadeIn>{h2}</FadeIn>
        </h2>
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-2xl ${font2}`}
        >
          <FadeIn>{h3}</FadeIn>
        </div>
        <FadeIn className="relative right-0 aspect-square w-[80%]">
          <Image
            src={images[0]}
            width={1600}
            height={900}
            alt="1"
            className="h-full w-full mt-10 object-cover transition-all duration-300 hover:border-8"
          />
        </FadeIn>
        <div
          className={`relative w-3/5 mt-10 ${
            side === "left" ? "" : "left-[10%]"
          } text-5xl ${font2}`}
        >
          <FadeIn>{h4}</FadeIn>
        </div>
      </motion.div>
    );
  };

  const imageLayout = (side) => {
    const itemsAlign = side === "left" ? "items-end" : "items-start";
    return (
      <motion.div
        className={`sticky top-[20%] h-full w-full flex flex-col ${itemsAlign} text-8xl gap-5`}
        style={right}
      >
        <FadeIn className="relative right-0 aspect-square w-[80%]">
          <Image
            src={images[1]}
            width={1600}
            height={900}
            alt="1"
            className="h-full w-full object-cover transition-all duration-300 hover:border-8"
          />
        </FadeIn>
        <FadeIn className="w-full h-[200vh]">
          <div className="h-screen w-full sticky top-0 overflow-hidden">
            <motion.video
              ref={videoRef}
              className="absolute h-screen w-full object-cover transition-all duration-300 hover:border-8"
              muted
              playsInline
              preload="auto"
            >
              <source src={sourcePath} type="video/mp4" />
            </motion.video>
          </div>
        </FadeIn>
        <FadeIn className="w-[60%] right-0 aspect-square">
          <Image
            src={images[2]}
            width={1600}
            height={900}
            alt="1"
            className=" h-full w-full object-cover transition-all duration-300 hover:border-8"
          />
        </FadeIn>
      </motion.div>
    );
  };

  return (
    <div className="relative h-full w-full flex gap-5" ref={scrollRef}>
      {leftLayout === "text" ? textLayout("left") : imageLayout("left")}
      {rightLayout === "text" ? textLayout("right") : imageLayout("right")}
    </div>
  );
}
