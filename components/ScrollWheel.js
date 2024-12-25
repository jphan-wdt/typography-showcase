import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import image1 from "@/public/Image 5.png";
import image2 from "@/public/Image 3.png";
import image3 from "@/public/Image 6.png";
import image4 from "@/public/Image 9.png";

export default function ScrollWheel() {
  const [activeText, setActiveText] = useState("1.");

  const pictures = [
    { src: image1, start: 0, end: 0.4 },
    { src: image2, start: 0.2, end: 0.6 },
    { src: image3, start: 0.4, end: 0.8 },
    { src: image4, start: 0.6, end: 1 },
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const increment = 50; // smoothness of curve path
  const sinOffset = 100; // height of base 80
  const sinScale = -120; // height of curve -120

  const xStart = 140;
  const xEnd = -200;
  const xMid = (xStart + xEnd) / 2;

  const rotation = 45; // start/end orientation in deg 45

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
    <div className="h-[400vh] w-full relative" ref={scrollRef}>
      <div className="text-9xl text-white font-extrabold tracking-tighter p-4 sticky top-0 right-0 whitespace-pre-line mb-[-100vh]">
        {"Picture\n" + activeText}
      </div>
      <div className="h-screen w-full sticky top-0 overflow-hidden">
        {pictures.map(({ src, start, end }, index) => (
          <motion.div
            key={index}
            className="absolute w-[60vw] right-0 bottom-0"
            style={getTransforms(scrollYProgress, start, end)}
          >
            <Image
              src={src}
              objectFit="cover"
              alt={`Image ${index + 1}`}
              className="rounded-xl"
            />
          </motion.div>
        ))}
      </div>
      <div className="h-screen" />
    </div>
  );
}
