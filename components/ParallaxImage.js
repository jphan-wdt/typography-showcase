import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import images from "./images";

function ParallaxImage({ text, top, bottom, imagePath, colour, font }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-850%", "850%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-70%", "70%"]);

  return (
    <div
      className={`relative h-[110vh] w-full overflow-hidden 
                  ${
                    top
                      ? "rounded-t-xl drop-shadow-[0px_0px_ 50px_rgba(0,0,0,0.6)]"
                      : ""
                  }
                  ${bottom ? "rounded-b-xl" : ""}`}
      ref={scrollRef}
    >
      <motion.div className="h-full w-full" style={{ y: y2 }}>
        <Image
          src={imagePath}
          width={1600}
          height={900}
          alt="1"
          className={`relative h-full w-full object-cover`}
        />
      </motion.div>
      <motion.div
        className={`absolute top-1/2 left-1/2
                    font-semibold text-9xl
                    ${font} text-white`}
        style={{ y, x: "-50%", color: colour }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default function ParallaxData() {
  const sections = [
    {
      text: "Georgia.",
      top: true,
      imagePath: images[8].src,
      colour: "#2c3c56",
      font: "font-serif",
    },
    {
      text: "ANTON",
      imagePath: images[12].src,
      colour: "#ffffff",
      font: "font-custom",
    },
    {
      text: "Maguntia",
      bottom: true,
      imagePath: images[2].src,
      colour: "#ffff00",
      font: "font-custom2",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <ParallaxImage key={index} {...section} />
      ))}
    </div>
  );
}
