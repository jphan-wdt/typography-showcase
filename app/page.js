"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Lenis from "lenis";

import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero";
import ImageWheel from "@/components/ImageWheel";
import StickyStack from "@/components/StickyStack";
import ParallaxImage from "@/components/ParallaxImage";
import ParallaxGallery from "@/components/ParallaxGallery";
import StickyPanel from "@/components/StickyPanel";
import TransitionFade from "@/components/TransitionFade";
import ParallaxData from "@/components/ParallaxImage";

import images from "@/components/images";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const colour = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "rgba(0, 165, 165, 0.2)", // red
      "rgba(0, 165, 0, 0.2)", // orange
      "rgba(0, 0, 255, 0.2)", // blue
      "rgba(0, 255, 0, 0.2)", // green
    ]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.24, 0.625],
    [0, 0, 1, 1]
  );

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  const radius = useTransform(scrollYProgress, [0, 1], ["1000px", "1000px"]);

  const gradient = useTransform([colour, x, y, radius], ([c, x, y, r]) => {
    return `radial-gradient(circle ${r} at ${x} ${y}, ${c}, transparent)`;
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
  });

  return (
    <div ref={scrollRef}>
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-10]"
        style={{ background: gradient, opacity }}
      >
        <div className="absolute w-[100vw] h-[100vh]">
          <div className="w-full h-full radial-gradient(circle at top left, rgba(255, 0, 0, 1), transparent)" />
        </div>
      </motion.div>

      <Hero />
      <ParallaxData
        sections={[
          {
            text: "Georgia.",
            top: true,
            imagePath: images[8].src,
            colour: "#2c3c56",
            font: "font-serif",
          },
          {
            text: "Maguntia",
            imagePath: images[2].src,
            colour: "#ffff00",
            font: "font-custom2",
          },
          {
            text: "ANTON",
            imagePath: images[6].src,
            bottom: true,
            colour: "#fff0e0",
            font: "font-custom",
          },
        ]}
      />
      <div className="h-[100vh] bg-[#fff0e0]"></div>

      <StickyPanel
        leftLayout="text"
        rightLayout="images"
        leftParallax="height"
        rightParallax="translate"
        heightRange={["50vw", "90vw"]}
        translateRange={["25vw", "-15vw"]}
        image1={images[0].src}
        image2={images[1].src}
        image3={images[2].src}
      />

      <TransitionFade
        image={images[1].src}
        top={true}
        colourFrom="#fff0e0"
        colourTo="#372316"
      />

      <StickyPanel
        leftLayout="images"
        rightLayout="text"
        leftParallax="height"
        rightParallax="translate"
        heightRange={["55vw", "80vw"]}
        translateRange={["0vw", "0vw"]}
        image1={images[10].src}
        image2={images[11].src}
        image3={images[12].src}
      />

      <TransitionFade
        image={images[4].src}
        colourFrom="#372316"
        colourTo="#000000"
      />

      <StickyPanel
        leftLayout="text"
        rightLayout="images"
        leftParallax="height"
        rightParallax="translate"
        heightRange={["80vw", "50vw"]}
        translateRange={["0vw", "0vw"]}
        image1={images[4].src}
        image2={images[5].src}
        image3={images[6].src}
      />

      <div className="h-[20vh]"></div>

      <ParallaxData
        sections={[
          {
            text: "",
            imagePath: images[6].src,
            colour: "#fff0e0",
            font: "font-custom",
          },
        ]}
      />

      <ImageWheel />

      <ParallaxData
        sections={[
          {
            text: "",
            imagePath: images[6].src,
            colour: "#fff0e0",
            font: "font-custom",
          },
        ]}
      />

      <StickyStack />
      <StickyScroll />
      <ParallaxGallery />
    </div>
  );
}
