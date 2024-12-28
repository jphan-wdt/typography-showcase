import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxScroll({
  text,
  top = false,
  bottom = false,
  imagePath,
  colour,
  font,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-400%", "350%"]);

  return (
    <div className="relative h-[125vh] w-full" ref={scrollRef}>
      <Image
        src={imagePath}
        width={1600}
        height={900}
        alt="1"
        className={`absolute h-full w-full object-cover z-[-1]
                        ${
                          top
                            ? "rounded-t-xl drop-shadow-[0px_0px_50px_rgba(0,0,0,0.6)]"
                            : ""
                        }
                        ${bottom ? "rounded-b-xl" : ""}`}
      />
      {/* text-[${colour}] */}
      <motion.div
        className={`absolute top-1/2 left-1/2
                    tracking-tig font-semibold text-9xl
                    drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]] z-[-1]
                    font-${font} text-white`}
        style={{ y, x: "-50%", color: colour }}
      >
        {text}
      </motion.div>
    </div>
  );
}
