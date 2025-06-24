import Image from "next/image";
import images from "@/components/images";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

export default function TransitionFade({
  image,
  top = false,
  colourFrom,
  colourTo,
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.4, 0.6],
    [0, 1, 1, 0]
  );

  // #372316

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest >= 0.25) {
      document.documentElement.style.setProperty("--color6", colourTo);
    } else {
      document.documentElement.style.setProperty("--color6", colourFrom);
    }
  });

  return (
    <motion.div
      className="relative mb-[-120vh] mt-[-100vh] w-full -z-10"
      style={{ opacity }}
    >
      <div className="sticky top-0 h-screen">
        <Image
          src={image}
          width={1600}
          height={900}
          alt="1"
          className="absolute h-screen w-full object-cover"
        />
      </div>
      <div className="h-[250vh] w-full" ref={scrollRef} />
    </motion.div>
  );
}
