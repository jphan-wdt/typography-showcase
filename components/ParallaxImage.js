import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxImage({
  text,
  top,
  bottom,
  alt,
  sourcePath,
  colourFrom,
  colourTo,
  font,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const y = bottom
    ? useTransform(scrollYProgress, [0, 1], ["-140vh", "20vh"]) // bottom
    : useTransform(scrollYProgress, [0, 1], ["-120vh", "40vh"]); // text parallax
  const y2 = bottom
    ? useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])
    : useTransform(scrollYProgress, [0, 1], ["-65%", "65%"]); // image parallax
  const textScale = bottom
    ? useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [1, 5, 25, 80])
    : 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    if (bottom)
      if (latest >= 0.525)
        document.documentElement.style.setProperty("--color6", colourTo);
      else document.documentElement.style.setProperty("--color6", colourFrom);
  });

  return (
    <div
      className={`h-[130vh] w-full ${
        top && alt
          ? "[clip-path:polygon(0_0,0%_95%,100%_100%,100%_0%)]"
          : bottom && alt
          ? "[clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_5%)]"
          : ""
      } `}
      ref={scrollRef}
    >
      <div
        className={`w-full overflow-hidden 
                  ${
                    top && !alt
                      ? "h-[130vh] relative rounded-t-xl drop-shadow-[0px_-50px_100px_rgba(0,0,0,0.6)]"
                      : bottom && !alt
                      ? "h-[200vh] sticky top-0"
                      : "h-[130vh] relative"
                  }`}
      >
        {/* Clip overlay */}

        <motion.div className="h-full w-full" style={{ y: y2 }}>
          <Image
            src={sourcePath}
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
            color: colourTo,
            scale: textScale,
          }}
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}
