import Image from "next/image";
import images from "@/components/images";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

// parallax types: stretch height, translate y
export default function StickyPanel() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], ["100vh", "150vh"]);
  const y = useTransform(scrollYProgress, [0, 0.8], ["10%", "5%"]);

  return (
    <div
      className="relative h-auto w-full flex gap-5 bg-[#fff0e0"
      ref={scrollRef}
    >
      <motion.div
        className="left-0 top-0 w-full flex flex-col gap-5 justify-between items-end text-white font-custom font-extrabold tracking-normal"
        style={{ height: height }}
      >
        <div className="relative w-1/2  text-8xl">LOREM IPSUM</div>
        <div className="relative w-1/2  text-6xl">DOLOR SIT AMET</div>
        <div className="relative w-1/2 text-3xl">
          CONSECTETUR ADIPISICING CONSEQUAT...
        </div>
        <div className="relative right-0 aspect-square w-[80%]">
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
      <motion.div
        className="right-0 top-0 h-[200vh]  w-full flex flex-col gap-5"
        style={{ y }}
      >
        <div className="w-full aspect-square overflow-hiddn">
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="w-[60%] aspect-square overflow-hidden">
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className=" h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
