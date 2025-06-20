import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import images from "./images";

function ParallaxImage({ text, top, bottom, imagePath, colour, font }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const y = bottom
    ? useTransform(scrollYProgress, [0, 1], ["-1060%", "530%"])
    : useTransform(scrollYProgress, [0, 1], ["-770%", "770%"]); // text parallax
  const y2 = bottom
    ? useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])
    : useTransform(scrollYProgress, [0, 1], ["-65%", "65%"]); // image parallax
  const textScale = bottom
    ? useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [1, 5, 25, 80])
    : 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (bottom) {
      if (latest >= 0.825) {
        document.documentElement.style.setProperty("--color6", "#fff0e0");
      } else {
        document.documentElement.style.setProperty("--color6", "#212121");
      }
    }
  });

  return (
    <div className={`h-[110vh]`} ref={scrollRef}>
      <div
        className={`w-full overflow-hidden 
                  ${
                    top
                      ? "h-[110vh] relative rounded-t-xl drop-shadow-[0px_-50px_100px_rgba(0,0,0,0.6)]"
                      : bottom
                      ? "h-[180vh] sticky top-0"
                      : "h-[110vh] relative"
                  }`}
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
          className={`absolute top-1/2
                    font-semibold text-9xl
                    ${font}`}
          style={{
            y,
            x: "-50%",
            // right: "50%",
            left: "50%",
            color: colour,
            scale: textScale,
          }}
        >
          {text}
        </motion.div>
      </div>
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
      text: "Maguntia",
      imagePath: images[2].src,
      colour: "#ffff00",
      font: "font-custom2",
    },
    {
      text: "ANTON",
      imagePath: images[6].src,
      bottom: true,
      colour: "#fff0e0",
      font: "font-custom",
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
