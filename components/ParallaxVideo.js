import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxVideo({
  children,
  top,
  bottom,
  alt,
  sourcePath,
  colourFrom,
  colourTo,
  blur,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]); // bottom 400

  const textScale =
    bottom && !alt
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
      className={`h-[120svh] ${
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
                      ? "h-[120svh] relative rounded-t-xl"
                      : bottom && !alt
                      ? "h-[200svh] sticky top-0"
                      : "h-[120svh] relative"
                  }`}
      >
        <motion.div
          className="h-full w-full transform-cpu will-change-transform"
          style={{ y }}
        >
          <video
            className={`relative h-full w-full object-cover ${
              blur ? "blur-md scale-105" : ""
            }`}
            muted
            autoPlay
            loop
            preload="auto"
          >
            <source src={sourcePath} type="video/mp4" />
          </video>
          <motion.div
            className={`absolute top-1/4  ${
              bottom && !alt ? "" : "h-full w-full"
            }`}
            style={{
              color: colourTo,
              scale: textScale,
              left: "50%",
              x: "-50%",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
