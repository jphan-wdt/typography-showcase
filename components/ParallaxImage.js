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
    ? useTransform(scrollYProgress, [0, 1], ["-1030%", "1030%"])
    : useTransform(scrollYProgress, [0, 1], ["-770%", "770%"]); // text parallax
  const y2 = useTransform(scrollYProgress, [0, 1], ["-65%", "65%"]); // image parallax
  const textScale = bottom
    ? useTransform(scrollYProgress, [0.4, 0.65], [1, 80])
    : 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (bottom) {
      if (latest >= 1.625) {
        document.body.style.backgroundColor = "#ffffff";
        document.documentElement.style.setProperty("--color6", "#ffffff");
      } else {
        document.body.style.backgroundColor = "#212121";
        document.documentElement.style.setProperty("--color6", "#212121");
        document.documentElement.style.setProperty("--color4", "#757575");
      }
    }
  });

  return (
    <div
      className={`${top ? "h-[110vh]" : bottom ? "h-[110vh]" : "h-[110vh]"}`}
      ref={scrollRef}
    >
      <div
        className={`h-[110vh] w-full overflow-hidden 
                  ${
                    top
                      ? "h-[110vh] relative rounded-t-xl drop-shadow-[0px_-50px_100px_rgba(0,0,0,0.6)]"
                      : bottom
                      ? "sticky top-0 h-[180vh]"
                      : "relative"
                  }`}
      >
        <motion.div className="h-full w-full" style={{ y: y2 }}>
          <Image
            src={imagePath}
            width={1600}
            height={900}
            alt="1"
            className={`relative h-full w-full ${
              bottom ? `object-cover` : `object-cover`
            }`}
          />
        </motion.div>
        <motion.div
          className={`absolute top-1/2
                    font-semibold text-9xl
                    ${font} text-white`}
          style={{
            y,
            right: "50%",
            x: "50%",
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
      // bottom: true,
      imagePath: images[2].src,
      colour: "#ffff00",
      font: "font-custom2",
    },
    {
      text: "ANTON",
      imagePath: images[7].src,
      bottom: true,
      colour: "#ffffff",
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
