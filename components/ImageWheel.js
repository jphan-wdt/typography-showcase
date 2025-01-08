import { useState, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import images from "./images";

export default function ScrollWheel() {
  const [activeText, setActiveText] = useState("SCROLL DOWN");
  const [activeFont, setActiveFont] = useState("font-custom");

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const sinSmoothing = 50; // smoothness of curve path
  const sinOffset = 15; // height of base 15%
  const sinScale = -30; // height of curve -30%

  const rotation = 20; // start/end orientation in deg 25

  const xStart = 220;
  const xEnd = -320;
  const xMid = (xStart + xEnd) / 2;

  // array of sin values for y
  const sinArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= sinSmoothing; i++) {
      const angle = (i * Math.PI) / sinSmoothing;
      const sinValue = Math.sin(angle);
      arr.push(`${sinOffset + sinValue * sinScale}%`);
    }
    arr[arr.length - 1] = `${sinOffset}%`;
    return arr;
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1 || latest >= 0.9) {
      setActiveFont("font-custom");
      setActiveText("SCROLL DOWN");
      return;
    }

    const index = Math.min(
      Math.floor((latest - 0.1) / (0.7 / images.slice(0, 5).length)),
      images.slice(0, 5).length - 1
    );

    setActiveFont("font-custom2");
    setActiveText(`${index + 1}.`);
  });

  return (
    <div className="relative h-[400vh] w-full" ref={scrollRef}>
      <div className="sticky top-4 p-4 text-2xl tracking-tight text-center text-white">
        <div
          className={`${activeFont} ${
            activeFont === "font-custom"
              ? ""
              : "text-9xl tracking-widest text-left"
          }`}
        >
          {activeText}
          {/* animate to number and back*/}
        </div>
      </div>
      {/* todo: make text go on right side screen */}
      <div className="sticky bg-slate-30 h-screen w-full top-0 overflow-hidden">
        {images.slice(0, 5).map(({ src }, index) => {
          const start = (0.6 * index) / images.slice(0, 5).length; // scale scroll range of all images
          const end = start + 0.5; // scroll duration of individual image

          // maps inital and final values to start and end
          const x = useTransform(
            scrollYProgress,
            [start, (start + end) / 2, end],
            [`${xStart}%`, `${xMid}%`, `${xEnd}%`]
          );

          // array to map sin values to y values
          const startToEnd = [];
          for (let i = 0; i <= sinSmoothing; i++) {
            const value = start + (i * (end - start)) / sinSmoothing;
            startToEnd.push(value);
          }

          const y = useTransform(scrollYProgress, startToEnd, sinArray);

          const rotate = useTransform(
            scrollYProgress,
            [start, (start + end) / 2, end],
            [`${rotation}deg`, "0deg", `-${rotation}deg`]
          );

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 bottom-0"
              style={{ x, y, rotate, willChange: "transform" }}
            >
              <Image
                src={src}
                width={1600}
                height={900}
                alt={`Image ${index + 1}`}
                className={`h-[70vh] w-[50vh] rounded-xl transition-all duration-500 object-cover ${
                  activeText === index + 1 + "."
                    ? "border border-white p-1"
                    : "brightness-[0.4] grayscale p-10"
                }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
