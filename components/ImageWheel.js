import { useState, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import images from "./images";

export default function ScrollWheel() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const sinSmoothing = 20; // smoothness of curve path 7
  const sinOffset = 0; // height of base 15%
  const sinScale = 0; // height of top of curve -30%

  const rotation = 0; // start/end orientation in deg 25

  const xStart = 120;
  const xEnd = -60;

  // array of sin values for y
  const sinArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= sinSmoothing; i++) {
      const angle = (i * Math.PI) / sinSmoothing;
      const sinValue = Math.sin(angle);
      arr.push(`${sinOffset + sinValue * sinScale}rem`);
    }
    arr[arr.length - 1] = `${sinOffset}rem`;
    return arr;
  }, []);

  const generateStartToEnd = (start, end) => {
    return Array.from(
      { length: sinSmoothing + 1 },
      (_, i) => start + (i * (end - start)) / sinSmoothing
    );
  };

  const displayImages = useMemo(() => images.slice(0, 1), [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div
      className="relative h-[300vh] w-full snap-y snap-mandatory snap-"
      ref={scrollRef}
    >
      <div className="sticky h-screen w-full top-0 overflow-hidden">
        <div className="absolute h-screen w-full">
          {displayImages.map(({ src }, index) => {
            const start = (0.8 * index) / displayImages.length; // scale scroll range of all images
            const end = start + 0.5; // scroll duration of individual image

            // maps inital and final values to start and end
            const x = useTransform(
              scrollYProgress,
              [start, end],
              [`${xStart}rem`, `${xEnd}rem`]
            );

            // array to map sin values to y values
            const startToEnd = useMemo(
              () => generateStartToEnd(start, end, sinSmoothing),
              [start, end, sinSmoothing]
            );

            const y = useTransform(scrollYProgress, startToEnd, sinArray);

            const rotate = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [`${rotation}deg`, "0deg", `-${rotation}deg`]
            );

            return (
              <motion.div
                key={index}
                className={`absolute`}
                style={
                  expandedIndex === index
                    ? {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        height: "100vh",
                        width: "100vw",
                        zIndex: 10,
                        transition: "all 0.6s ease-in-out",
                      }
                    : {
                        x,
                        y,
                        rotate,
                        willChange: "transform",
                      }
                }
                onClick={() => setExpandedIndex(index)}
              >
                <Image
                  src={src}
                  width={1200}
                  height={675}
                  loading="lazy"
                  alt={`Image ${index + 1}`}
                  className={`
                    ${
                      expandedIndex === index
                        ? "h-[40vw] w-full p-0"
                        : "h-[40vw] w-[25vw] p-4 rounded-xl border border-transparent hover:border-white hover:p-2 hover:cursor-pointer"
                    }  
                    object-cover transition-all duration-500`}
                />
                {expandedIndex === index && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(null);
                      console.log(expandedIndex);
                    }}
                    className="absolute top-4 left-4 text-white bg-black/50 rounded-full h-8 w-8"
                  >
                    ✕
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
