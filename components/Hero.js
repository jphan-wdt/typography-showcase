import Image from "next/image";
import images from "@/components/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3], ["100%", "90%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "20%"]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5], ["0%", "15%", "-5%"]);

  return (
    <div className="mb-[-100vh]">
      <motion.div
        className="sticky top-4 w-full h-[100svh] overflow-hidden"
        style={{ scale, opacity, y }}
      >
        <Image
          src={images[0].src}
          width={1600}
          height={900}
          alt="1"
          className="absolute h-full w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-96">
          <div className="relative top-96 pt-64 p-12 text-[#fff0e0]">
            <div className="font-custom text-8xl tracking-tight text-balance">
              "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING CONSEQUAT..."
            </div>
            <div className="w-2/5 text-lg tracking-tighter font-extralight text-pretty">
              The text above is set in the Anton typeface. This text is set in
              the Inter typeface. All images created and captured from the block
              game Minecraft with community-made shaders.
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-screen" ref={scrollRef} />
    </div>
  );
}
