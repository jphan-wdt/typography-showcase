import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import images from "./images";

export default function ScrollWheel() {
  const [activeText, setActiveText] = useState("1.");

  const image = [
    images[1],
    images[3],
    images[4],
    images[5],
    images[6],
    images[7],
    images[8],
    images[9],
    images[10],
    images[11],
    images[12],
    images[13],
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const increment = 50; // smoothness of curve path
  const sinOffset = 15; // height of base 15
  const sinScale = -30; // height of curve -30

  const rotation = 25; // start/end orientation in deg 25

  const xStart = 130;
  const xEnd = -450;
  const xMid = (xStart + xEnd) / 2;

  const sinArray = [];
  for (let i = 0; i <= increment; i++) {
    const angle = (i * Math.PI) / increment;
    const sinValue = Math.sin(angle);
    sinArray.push(`${sinOffset + sinValue * sinScale}%`);
  }
  sinArray[sinArray.length - 1] = `${sinOffset}%`;

  const getTransforms = (scrollYProgress, start, end) => {
    const x = useTransform(
      scrollYProgress,
      [start, (start + end) / 2, end],
      [`${xStart}%`, `${xMid}%`, `${xEnd}%`]
    );

    const startToEnd = [];
    for (let i = 0; i <= increment; i++) {
      const value = start + (i * (end - start)) / increment;
      startToEnd.push(value);
    }

    const y = useTransform(scrollYProgress, startToEnd, sinArray);

    const rotate = useTransform(
      scrollYProgress,
      [start, (start + end) / 2, end],
      [`${rotation}deg`, "0deg", `-${rotation}deg`]
    );
    return { x, y, rotate };
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    switch (true) {
      case latest < 0.29:
        setActiveText("1.");
        break;

      case latest >= 0.29 && latest < 0.5:
        setActiveText("2.");
        break;

      case latest >= 0.5 && latest < 0.7:
        setActiveText("3.");
        break;

      case latest >= 0.7 && latest < 1:
        setActiveText("4.");
        break;
    }
  });

  return (
    <div className="h-[600vh] relative" ref={scrollRef}>
      <div className="text-9xl text-white font-extrabold tracking-tighter p-4 sticky top-0 whitespace-pre-line mb-[-100vh]">
        {"Picture\n" + activeText}
      </div>
      {/* todo: make text go on right side screen */}
      <div className="h-screen w-full sticky top-0 overflow-hidden">
        {image.map(({ src }, index) => (
          <motion.div
            key={index}
            className="absolute right-0 bottom-0"
            style={getTransforms(
              scrollYProgress,
              (0.8 * index) / image.length,
              (0.8 * index) / image.length + 0.28
            )}
          >
            <Image
              src={src}
              width={1600}
              height={900}
              alt={`Image ${index + 1}`}
              className={`h-[80vh] w-[50vh] rounded-xl transition-all duration-500 object-cover ${
                activeText === index + 1 + "." ? "" : " "
              }`}
            />
          </motion.div>
        ))}
      </div>
      <div className="h-screen" />
    </div>
  );
}
