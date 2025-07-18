import Image from "next/image";
import images from "@/components/images";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import GradientText from "@/components/GradientText";

export default function Footer() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.25], ["100%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], ["100%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.5], ["0%", "0%", "0%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div
      className="h-[100vh] mt-[90vh]  flex items-center justify-center text-2xl font-bold -z-10 bg-black text-white"
      style={{}}
      ref={scrollRef}
    >
      <div className="h-[90vh] text-[12vw] text-balance overflow-">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Thanks for visiting
        </GradientText>
      </div>
    </div>
  );
}
