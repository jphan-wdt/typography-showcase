import Image from "next/image";
import images from "@/components/images";
import { useEffect, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

// parallax types: stretch height, translate y
export default function StickyPanel({
  leftLayout, // "text" | "images"
  rightLayout, // "text" | "images"
  leftParallax, // "none" | "height" | "translate"
  rightParallax, // "none" | "height" | "translate"
  heightRange,
  translateRange,
  image1,
  image2,
  image3,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
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
    const alignLeft = side === "left" ? "items-end" : "items-start";
    return (
      <motion.div
        className={`top-0 w-full flex flex-col gap-10 justify-between ${alignLeft} text-white font-custom font-extrabold tracking-normal`}
        style={left}
      >
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-8xl`}
        >
          LOREM IPSUM
        </div>
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-6xl`}
        >
          DOLOR SIT AMET
        </div>
        <div
          className={`relative w-3/5 ${
            side === "left" ? "" : "left-[10%]"
          } text-3xl`}
        >
          CONSECTETUR ADIPISICING CONSEQUAT...
        </div>
        <div className="relative right-0 aspect-square w-[80%]">
          <Image
            src={image1}
            width={1600}
            height={900}
            alt="1"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    );
  };

  const imageLayout = (side) => {
    const alignLeft = side === "left" ? "items-end" : "items-start";
    return (
      <motion.div
        className={`sticky top-[20%] h-full w-full flex flex-col ${alignLeft} text-8xl gap-5 `}
        style={right}
      >
        <div className="w-full aspect-square overflow-hiddn">
          <Image
            src={image2}
            width={1600}
            height={900}
            alt="1"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="w-[60%] right-0 aspect-square overflow-hiddn">
          <Image
            src={image3}
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
