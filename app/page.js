"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero";
import ImageWheel from "@/components/ImageWheel";
import StickyReveal from "@/components/StickyReveal";
import ParallaxImage from "@/components/ParallaxImage";
import ParallaxGallery from "@/components/ParallaxGallery";

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

      <ImageWheel />
      <ParallaxGallery />

      <StickyScroll />
      <StickyReveal />
      <div className="h-screen bg-white" />
    </div>
  );
}
