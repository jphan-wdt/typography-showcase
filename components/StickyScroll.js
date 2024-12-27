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
    <div className="relative h-auto bg-6">
      <div className="h-auto w-full flex my-12" ref={scrollRef}>
        <div className="sticky top-40 h-[60vh] w-1/2">
          <div className="text-5xl text-white font-extrabold tracking-tighter text-center mt-[30vh] -translate-y-1/2">
            {activeText}
          </div>
        </div>

        <div className="flex flex-col h-auto w-1/2 ">
          {image.map((img, index) => (
            <div
              key={index}
              className={`flex items-center justify-center my-8 h-[60vh] transition-all ${
                activePicture === index + 1
                  ? "-translate-x-14 scale-110 duration-500"
                  : "duration-700 brightness-50 grayscale"
              }`}
            >
              <Image
                src={img}
                width={1600}
                height={900}
                alt={`Image ${index + 1}`}
                className="relative right-10 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
