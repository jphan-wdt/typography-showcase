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

  const image = transformData();

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

  return (
    <div className="relative h-[500vh] w-full overflow-clip" ref={scrollRef}>
      {image.map(({ path, height, width, transX, transY }, index) => (
        <div
          key={index}
          className="absolute h-full w-full"
          style={{
            height: `${height}vh`,
            width: `${width}vh`,
            transform: `translate(${transX}vw, ${transY}vh)`,
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
      height: 60,
      width: 60,
      transX: 25,
      transY: 15,
    },
    {
      path: images[2].src,
      height: 50,
      width: 50,
      transX: 45,
      transY: 5,
    },
    {
      path: images[5].src,
      height: 50,
      width: 70,
      transX: 28,
      transY: 60,
    },
    {
      path: images[2].src,
      height: 60,
      width: 60,
      transX: 53,
      transY: 35,
    },

    // section 2 maybe smaller
    {
      path: images[12].src,
      height: 100,
      width: 75,
      transX: 11.5,
      transY: 117,
    },
    {
      path: images[2].src,
      height: 60,
      width: 51,
      transX: 49.5,
      transY: 157,
    },
    {
      path: images[5].src,
      height: 60,
      width: 51,
      transX: 23.4,
      transY: 219,
    },
    {
      path: images[2].src,
      height: 100,
      width: 75,
      transX: 49.5,
      transY: 219,
    },
    {
      path: images[2].src,
      height: 60,
      width: 50,
      transX: 62,
      transY: 320.5,
    },

    // section 3
    {
      path: images[5].src,
      height: 90,
      width: 50,
      transX: 11,
      transY: 395,
    },
    {
      path: images[2].src,
      height: 100,
      width: 50,
      transX: 36.5,
      transY: 370,
    },
    {
      path: images[12].src,
      height: 110,
      width: 50,
      transX: 62,
      transY: 382,
    },

    // section 2.2
    // {
    //   path: images[12].src,
    //   height: 100,
    //   width: 75,
    //   transX: 11.5,
    //   transY: 120,
    // },
    // {
    //   path: images[2].src,
    //   height: 60,
    //   width: 51,
    //   transX: 49.5,
    //   transY: 160,
    // },
    // {
    //   path: images[5].src,
    //   height: 60,
    //   width: 51,
    //   transX: 23.4,
    //   transY: 222,
    // },
    // {
    //   path: images[2].src,
    //   height: 100,
    //   width: 75,
    //   transX: 49.5,
    //   transY: 222,
    // },
  ];
}
