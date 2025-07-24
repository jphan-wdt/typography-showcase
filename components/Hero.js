import Image from "next/image";
import images from "@/components/images";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

import FadeIn from "./FadeIn";
import GradientText from "./GradientText";

export default function Hero() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const controls = useAnimation();

  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    controls.start("visible").then(() => setScrollActive(true));
  }, []);

  const variants = {
    hidden: { y: "50%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,

      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="mb-[-100vh] overflow-hidden">
      <motion.div
        className=" pt-4 px-4 w-full h-[100svh] overflow-hidden"
        style={scrollActive ? { scale, opacity, y } : {}}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        {/* <Image
          src={images[0].src}
          width={1600}
          height={900}
          alt="1"
          className="relative h-full w-full rounded-xl object-cover"
        /> */}
        <video
          className={`relative h-full w-full rounded-xl object-cover ${""}`}
          muted
          playsInline
          autoPlay
          loop
          preload="none"
        >
          <source src={"/PorscheFE.mp4"} type="video/mp4" />
        </video>
        <div className="absolute bottom-96">
          <div className="relative top-96 p-12 text-white">
            <div className="font-allura text-[12rem] tracking-tight text-balance translate-y-10">
              <GradientText
                colourCenter="#87d8ff"
                colourEdge="#d4b5ff"
                colourBg="#ffab9a"
                font="font-allura"
                center={true}
                scroll={false}
              >
                Type and Motion
              </GradientText>
              {/* <FadeIn></FadeIn> */}
            </div>
            <div className="w-2/5 text-xl tracking-tighter font-extralight text-pretty">
              <FadeIn delay={0.3}>
                An experiment in animation and typography. The text above is set
                in the <strong>Allura</strong> typeface. This text is set in the
                <strong> Inter</strong> typeface. All fonts provided by{" "}
                <strong>Google Fonts</strong>. All visuals were created and
                captured using assets from <strong>Forza Motorsport</strong>.
                All vehicle brands and models are the property of their
                respective manufacturers.
              </FadeIn>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-screen" ref={scrollRef} />
    </div>
  );
}
