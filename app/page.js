"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero";
import ImageWheel from "@/components/ImageWheel";
import StickyStack from "@/components/StickyStack";
import ParallaxImage from "@/components/ParallaxImage";
import ParallaxGallery from "@/components/ParallaxGallery";
import StickyPanel from "@/components/StickyPanel";
import TransitionFade from "@/components/TransitionFade";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <ParallaxImage />
      <div className="h-[100vh] bg-[#fff0e0]"></div>
      <StickyPanel
        leftLayout="text"
        rightLayout="images"
        leftParallax="height"
        rightParallax="translate"
        heightRange={["55vw", "65vw"]}
        translateRange={["10%", "-40%"]}
      />
      <TransitionFade />
      <StickyPanel
        leftLayout="images"
        rightLayout="images"
        leftParallax="translate"
        rightParallax="translate"
        heightRange={["55vw", "65vw"]}
        translateRange={["10%", "-40%"]}
      />
      <TransitionFade />
      <StickyPanel
        leftLayout="text"
        rightLayout="text"
        leftParallax="height"
        rightParallax="height"
        heightRange={["55vw", "65vw"]}
        translateRange={["10%", "-40%"]}
      />
      <TransitionFade />

      <ParallaxImage />
      <StickyScroll />

      <StickyStack />

      <div className="h-[200vh] bg-blue-500" />

      <ParallaxGallery />

      <ImageWheel />

      <div className="h-screen bg-red-500" />
    </div>
  );
}
