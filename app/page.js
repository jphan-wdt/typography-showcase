"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero";
import ParallaxText from "@/components/ParallaxText";
import ImageWheel from "@/components/ImageWheel";
import StickyReveal from "@/components/StickyReveal";

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
      <ParallaxText activeDesign={0} />
      <StickyScroll />
      <ImageWheel />
      <StickyReveal />
      <div className="h-screen bg-white" />
    </div>
  );
}
