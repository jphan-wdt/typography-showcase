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
        <div className="h-[60vh] w-1/2 sticky top-40">
          <div className="text-5xl text-white font-extrabold tracking-tighter text-center mt-[30vh] -translate-y-1/2">
            {activeText}
          </div>
        </div>

        <div className="h-auto w-1/2 flex flex-col">
          {image.map((img, index) => (
            <div
              key={index}
              className={`flex h-[60vh] items-center justify-center transition-all my-8 ${
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
                className="rounded-xl right-10 relative"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
