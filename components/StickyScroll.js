import Image from "next/image";
import images from "@/components/images";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function StickyScroll() {
  const [activePicture, setActivePicture] = useState(1);
  const [activeText, setActiveText] = useState("lorem.");
  const image = [images[3].src, images[4].src, images[5].src, images[2].src];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
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
    <div className="relative h-auto w-full">
      <div className="flex" ref={scrollRef}>
        <div className="sticky top-0 h-[70vh] w-1/2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-5xl text-white font-extrabold tracking-tighter text-center">
              {activeText}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto w-1/2 ">
          {image.map((img, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-[60vh] my-8 rounded-xl transition-all ${
                activePicture === index + 1
                  ? "border border-white p-1 duration-500"
                  : "duration-700 brightness-50 grayscale p-10"
              }`}
            >
              <Image
                src={img}
                width={1600}
                height={900}
                alt={`Image ${index + 1}`}
                className="relative h-full w-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
