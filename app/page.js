"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero";
import ParallaxText from "@/components/ParallaxText";
import ScrollWheel from "@/components/ScrollWheel";
import StickyLadder from "@/components/StickyLadder";

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
      <ScrollWheel />
      <StickyLadder />
      <div className="h-screen bg-white" />
    </div>
  );
}
