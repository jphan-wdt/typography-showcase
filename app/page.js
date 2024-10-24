'use client'

import { useEffect } from "react";
import Lenis from "lenis";

import ParallaxScroll from "@/components/ParallaxScroll";
import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero"

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },
  []
  )

  return (
    <div>
      <Hero/>
      <ParallaxScroll/>

    </div>
    
      
  );
}
