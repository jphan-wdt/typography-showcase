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
  const [activeText, setActiveText] = useState("Wheel");

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

  const sinSmoothing = 50; // smoothness of curve path
  const sinOffset = 15; // height of base 15%
  const sinScale = -30; // height of curve -30%

  const rotation = 25; // start/end orientation in deg 25

  const xStart = 150;
  const xEnd = -460;
  const xMid = (xStart + xEnd) / 2;

  // array of sin values for y
  const sinArray = [];
  for (let i = 0; i <= sinSmoothing; i++) {
    const angle = (i * Math.PI) / sinSmoothing;
    const sinValue = Math.sin(angle);
    sinArray.push(`${sinOffset + sinValue * sinScale}%`);
  }
  sinArray[sinArray.length - 1] = `${sinOffset}%`;

  const getTransforms = (scrollYProgress, start, end) => {
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
    return { x, y, rotate };
  };

  const normalisedIncrements = 0.8 / image.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest < 0.1 || latest >= 0.9) {
      setActiveText("Wheel");
      return;
    }

    const index = Math.min(
      Math.floor((latest - 0.1) / normalisedIncrements),
      image.length - 1
    );

    setActiveText(`${index + 1}.`);
  });

  return (
    <div className="relative h-[600vh]" ref={scrollRef}>
      <div className="sticky top-0 p-4 mb-[-100vh] text-9xl text-white font-extrabold tracking-tighter whitespace-pre-line">
        {"Picture\n" + activeText}
      </div>
      {/* todo: make text go on right side screen */}
      <div className="sticky h-screen w-full top-0 overflow-hidden">
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
                activeText === index + 1 + "."
                  ? ""
                  : "brightness-[0.4] grayscale"
              }`}
            />
          </motion.div>
        ))}
      </div>
      <div className="h-screen" />
    </div>
  );
}
