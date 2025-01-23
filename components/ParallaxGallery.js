import Image from "next/image";
import images from "./images";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxGallery() {
  // |start - end| = speed
  // [start, end] = offset
  // pick images
  const columns = [
    {
      img: [images[5].src, images[0].src, images[3].src],
      start: "-250%",
      end: "250%",
    },
    {
      img: [images[7].src, images[10].src, images[4].src],
      start: "0%",
      end: "-50%",
    },
    {
      img: [images[13].src, images[9].src, images[2].src],
      start: "-150%",
      end: "150%",
    },
    {
      img: [images[12].src, images[8].src, images[6].src, images[1].src],
      start: "0%",
      end: "-150%",
    },
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      className="relative h-[100vw] w-full border rounded-full overflow-hidden"
      ref={scrollRef}
    >
      <div className="flex gap-5 h-full w-full">
        {columns.map((column, index) => {
          // Use start and end from the column data
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [column.start, column.end]
          );

          return (
            <motion.div
              key={index}
              className="h-[80vh] flex flex-col w-1/4 gap-5"
              style={{ y }}
            >
              {column.img.map((imgSrc, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={imgSrc}
                  width={1600}
                  height={900}
                  alt={`Image ${imgIndex + 1}`}
                  className="flex-none h-[80vh] object-cover rounded-2xl"
                />
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
