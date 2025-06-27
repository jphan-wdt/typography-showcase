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
import ParallaxVideoData from "@/components/ParallaxVideo";
import ParallaxGallery from "@/components/ParallaxGallery";
import StickyPanel from "@/components/StickyPanel";
import TransitionFade from "@/components/TransitionFade";
import ParallaxImageData from "@/components/ParallaxImage";

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
    [0, 0.33, 0.44, 0.48],
    [
      "rgba(28, 24, 40, 0)",
      "rgba(28, 24, 40, 1)",
      "rgba(55, 113, 134, 1)",
      "rgba(139, 124, 197, 1)",
    ]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.24, 0.625],
    [0, 0, 1, 1]
  );

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);

  const radius = useTransform(scrollYProgress, [0, 1], ["1500px", "1500px"]);

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
      <ParallaxVideoData
        sections={[
          {
            text: "Georgia.",
            top: true,
            sourcePath: "/_fordgt.mp4",
            colourTo: "#f0f0f0",
            font: "font-serif",
          },
          {
            text: "Maguntia",
            sourcePath: "/_porsche.mp4",
            colourTo: "#212121",
            font: "font-custom2",
          },
          {
            text: "ANTON",
            sourcePath: "/_mclaren.mp4",
            bottom: true,
            colourFrom: "#212121",
            colourTo: "#f0f0f0",
            font: "font-custom",
          },
        ]}
      />
      <div className="h-[100vh] bg-[#f0f0f0"></div>

      <TransitionFade
        sourcePath={"/_porsche.mp4"}
        top={true}
        colourFrom="#f0f0f0"
        colourTo="#111117"
      />

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
        sourcePath={"/_porsche.mp4"}
        top={true}
        colourFrom="#f0f0f0"
        colourTo="#111117"
      />

      <StickyPanel
        leftLayout="images"
        rightLayout="text"
        leftParallax="height"
        rightParallax="translate"
        heightRange={["150vh", "70vh"]}
        translateRange={["0vw", "0vw"]}
        image1={images[10].src}
        image2={images[11].src}
        image3={images[12].src}
      />

      <TransitionFade
        sourcePath={"/_porsche.mp4"}
        colourFrom="#111117"
        colourTo="#2b375a"
      />

      <StickyPanel
        leftLayout="text"
        rightLayout="images"
        leftParallax="height"
        rightParallax="translate"
        heightRange={["90vh", "170vh"]}
        translateRange={["0vw", "0vw"]}
        image1={images[4].src}
        image2={images[5].src}
        image3={images[6].src}
      />
      <TransitionFade
        sourcePath={"/_porsche.mp4"}
        colourFrom="#2b375a"
        colourTo="#674974"
      />

      <div className="h-[20vh]"></div>

      <ParallaxImageData
        sections={[
          {
            sourcePath: images[6].src,
            top: true,
            alt: true,
          },
        ]}
      />

      <ImageWheel />

      <ParallaxImageData
        sections={[
          {
            sourcePath: images[6].src,
            colourFrom: "#674974",
            colourTo: "#674974",
            bottom: true,
            alt: true,
          },
        ]}
      />

      <StickyStack />
      <StickyScroll />
      <ParallaxGallery />

      <video
        className="relative h-screen w-full object-contain"
        muted
        autoPlay
        loop
        preload="auto"
      >
        <source src={"/AgeraRS.mp4"} type="video/mp4" />
      </video>
      <video
        className="relative h-screen w-full object-contain"
        muted
        autoPlay
        loop
        preload="auto"
      >
        <source src={"/output2.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}
