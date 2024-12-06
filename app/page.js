'use client'

import { useEffect } from "react";
import Lenis from "lenis";

import StickyScroll from "@/components/StickyScroll";
import Hero from "@/components/Hero"
import ParallaxText from "@/components/ParallaxText";

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
      <ParallaxText activeDesign={0}/>
      <StickyScroll/>

    </div>
    
      
  );
}
