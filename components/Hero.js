import Image from "next/image";
import images from "@/components/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TextSlide from "./TextSlide";

export default function Hero() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 250]);

  return (
    <div className="mb-[-100vh]">
      <motion.div
        className=" pt-4 px-4 w-full h-[100svh] overflow-hidden transform-cpu will-change-transform"
        style={{ scale, opacity, y }}
      >
        <Image
          src={images[0].src}
          width={1600}
          height={900}
          alt="1"
          className="relative h-full w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-96">
          <div className="relative top-96 p-12 text-[#fff0e0]">
            <div className="font-forum text-[12rem] tracking-tight text-balance translate-y-10">
              <TextSlide>Type and Motion</TextSlide>
            </div>
            <div className="w-2/5 text-xl tracking-tighter font-extralight text-pretty">
              <TextSlide delay={0.3}>
                An experiment in animation and typography. The text above is set
                in the <strong>Forum</strong> typeface. This text is set in the
                <strong> Inter</strong> typeface. All fonts provided by{" "}
                <strong>Google Fonts</strong>. All images created and captured
                using assets from <strong>Forza Motorsport</strong>.
              </TextSlide>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-screen" ref={scrollRef} />
    </div>
  );
}
