import Image from "next/image";
import images from "@/components/images";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
// resdesign

export default function StickyScroll() {
  const [activePicture, setActivePicture] = useState(1);
  const [activeText, setActiveText] = useState("lorem.");

  const grid = gridData();
  const transform = transformData();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Function to update mouse position
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    setMousePos({ x, y });
  };

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    switch (true) {
      case latest < 0.075:
        if (activePicture != 1) {
          setActivePicture(1);
          setActiveText("lorem.");
        }
        break;

      case latest >= 0.075 && latest < 0.325:
        if (activePicture != 2) {
          setActivePicture(2);
          setActiveText("ipsum.");
        }
        break;

      case latest >= 0.325 && latest < 0.575:
        if (activePicture != 3) {
          setActivePicture(3);
          setActiveText("dolor.");
        }
        break;

      case latest >= 0.575 && latest < 1:
        if (activePicture != 4) {
          setActivePicture(4);
          setActiveText("sit amet.");
        }
        break;
    }
  });

  //   const imageData = [
  //   { path: images[3].src, rowStart: 1, colStart: 1, rowSpan: 2, colSpan: 3 },
  //   { path: images[4].src, rowStart: 3, colStart: 2, rowSpan: 3, colSpan: 4 },
  //   // Add more items as needed
  // ];

  // <div className="grid grid-cols-12 grid-rows-12">
  //   {imageData.map(({ path, rowStart, colStart, rowSpan, colSpan }, index) => (
  //     <div
  //
  //       }}

  // <div
  //   key={index}
  //   className="absolute h-full w-full"
  //   style={{
  //     height: `${height}vh`,
  //     width: `${width}vh`,
  //     transform: `translate(${transX}vw, ${transY}vh)`,
  //   }}
  // ></div>

  return (
    <div
      className="relative h-[400vh] w-full overflow-clip grid grid-cols-12 grid-rows-[repeat(20,_minmax(0,1fr))] gap-3 py-3"
      ref={scrollRef}
    >
      <div className="row-start-7 row-span-1 col-start-8 -col-end-2 bg-white"></div>
      <div className="row-start-13 row-span-7 col-start-2 col-span-1 bg-white"></div>
      <div className="row-start-[18] row-span-1 col-start-4 col-end-8 bg-white"></div>

      {grid.map(({ path, rowStart, colStart, rowSpan, colSpan }, index) => (
        <div
          key={index}
          className="relative"
          style={{
            gridRowStart: rowStart,
            gridRowEnd: `span ${rowSpan}`,
            gridColumnStart: colStart,
            gridColumnEnd: `span ${colSpan}`,
          }}
        >
          <div
            className={`h-full w-full border-black border-8 overflow-hidden drop-shadow-[0_0px_10px_rgba(0,0,0,1)]`}
          >
            <Image
              src={path}
              width={1600}
              height={900}
              alt="1"
              className={`h-full w-full object-cover`}
              style={{
                transform: `translate(${mousePos.x * 0.1}%, ${
                  mousePos.y * 0.1
                }%)`,
                scale: "120%",
              }}
            />
          </div>
        </div>
      ))}

      <div className="row-start-2 row-end-6 col-start-2 -col-end-2">
        {transform.map(({ path, height, width, transX, transY }, index) => (
          <div
            key={index}
            className="absolute h-full w-full"
            style={{
              height: `${height}rem`,
              width: `${width}rem`,
              transform: `translate(${transX}rem, ${transY}rem)`,
            }}
          >
            <div
              className={`h-full w-full border-black border-8 overflow-hidden drop-shadow-[0_0px_10px_rgba(0,0,0,1)]`}
            >
              <Image
                src={path}
                width={1600}
                height={900}
                alt="1"
                className={`h-full w-full object-cover`}
                style={{
                  transform: `translate(${mousePos.x * 0.1}%, ${
                    mousePos.y * 0.1
                  }%)`,
                  scale: "120%",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="sticky top-0 h-screen" onMouseMove={handleMouseMove}>
        <div className="relative top-1/2 w-1/2 left-1/2 -translate-x-1/2">
          <div className="text-5xl text-white font-extrabold tracking-tighter text-center">
            {activeText}
          </div>
        </div>
      </div>
    </div>
  );
}

export function transformData() {
  return [
    // section 1
    {
      path: images[12].src,
      height: 30,
      width: 40,
      transX: 15,
      transY: 5,
      dirX: -1,
      dirY: 1,
    },
    {
      path: images[2].src,
      height: 25,
      width: 25,
      transX: 40,
      transY: -5,
      dirX: -1,
      dirY: -1,
    },
    {
      path: images[5].src,
      height: 25,
      width: 35,
      transX: 23,
      transY: 25,
      dirX: 1,
      dirY: -1,
    },
    {
      path: images[2].src,
      height: 30,
      width: 30,
      transX: 48,
      transY: 15,
      dirX: 1,
      dirY: 1,
    },
  ];
}

export function gridData() {
  return [
    // section 2
    {
      path: images[12].src,
      colStart: 2,
      colSpan: 5,
      rowStart: 7,
      rowSpan: 5,
    },
    {
      path: images[2].src,
      colStart: 7,
      colSpan: 3,
      rowStart: 9,
      rowSpan: 3,
    },
    {
      path: images[2].src,
      colStart: 4,
      colSpan: 3,
      rowStart: 12,
      rowSpan: 3,
    },
    {
      path: images[5].src,
      colStart: 7,
      colSpan: 5,
      rowStart: 12,
      rowSpan: 5,
    },
    {
      path: images[2].src,
      colStart: 9,
      colSpan: 3,
      rowStart: 17,
      rowSpan: 3,
    },
  ];
}
