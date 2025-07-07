import Image from "next/image";
import images from "@/components/images";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

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
  const [duration, setDuration] = useState(0);

  const videoScrollRef = useRef(null);
  const { scrollYProgress: videoScrollProgress } = useScroll({
    target: videoScrollRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsub = videoScrollProgress.on("change", (latest) => {
      const video = videoRef.current;
      setDuration(video.duration);
      if (video && video.readyState >= 2) {
        if (latest >= 0 && latest <= 1) {
          const relativeProgress = (latest - 0) / (1 - 0);
          const time = Math.min(relativeProgress * duration, duration - 0.1);
          video.currentTime = time;
        }
      }
    });

    return () => unsub();
  }, [duration]);

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
        className={`top-0 w-full flex flex-col gap-10 justify-between ${itemsAlign} ${font2} ${colour} tracking-tighter font-thin`}
        style={left}
      >
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-8xl ${font1}`}
        >
          {h1}
        </div>
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-5xl`}
        >
          {h2}
        </div>
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-2xl`}
        >
          {h3}
        </div>
        <div className="relative right-0 aspect-square w-[80%]">
          <Image
            src={images[0]}
            width={1600}
            height={900}
            alt="1"
            className="h-full w-full mt-10 object-cover"
          />
        </div>
        <div
          className={`relative w-3/5 mt-10 ${
            side === "left" ? "" : "left-[10%]"
          } text-2xl`}
        >
          {h4}
        </div>
      </motion.div>
    );
  };

  const imageLayout = (side) => {
    const itemsAlign = side === "left" ? "items-end" : "items-start";
    return (
      <motion.div
        className={`sticky top-[20%] h-full w-full flex flex-col ${itemsAlign} text-8xl gap-5 `}
        style={right}
      >
        <div className="relative right-0 aspect-square w-[80%]">
          <Image
            src={images[1]}
            width={1600}
            height={900}
            alt="1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full h-[200vh]" ref={videoScrollRef}>
          <div className="h-screen w-full sticky top-0 overflow-hidden">
            <motion.video
              ref={videoRef}
              className="absolute h-screen w-full object-cover"
              muted
              playsInline
              preload="auto"
            >
              <source src={sourcePath} type="video/mp4" />
            </motion.video>
          </div>
        </div>
        <div className="w-[60%] right-0 aspect-square">
          <Image
            src={images[2]}
            width={1600}
            height={900}
            alt="1"
            className=" h-full w-full object-cover"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className="relative h-full w-full flex gap-5 bg-[#fff0e0"
      ref={scrollRef}
    >
      {leftLayout === "text" ? textLayout("left") : imageLayout("left")}
      {rightLayout === "text" ? textLayout("right") : imageLayout("right")}
    </div>
  );
}
