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
        className="sticky top-4 w-full h-screen z-[-1]"
        style={{ scale, opacity, y }}
      >
        <Image
          src={images[0].src}
          width={1600}
          height={900}
          alt="1"
          className="absolute rounded-xl h-full w-full object-cover"
        />
        <div className="absolute h-full w-4/5">
          <div className="relative top-64 left-12">
            <div className="text-white text-8xl tracking-tighter font-semibold text-balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing consequat...
            </div>
            <div className="mt-5 text-gray-100 text-4xl tracking-tighter font-light text-pretty italic">
              "Maecenas vel diam non est cursus elit."
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-screen" ref={scrollRef} />
    </div>
  );
}
