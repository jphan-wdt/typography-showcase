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
import ParallaxGallery from "@/components/ParallaxGallery";
import StickyPanel from "@/components/StickyPanel";
import TransitionFade from "@/components/TransitionFade";
import ParallaxImage from "@/components/ParallaxImage";
import ParallaxVideo from "@/components/ParallaxVideo";
import RadialGradient from "@/components/RadialGradient";
import GradientText from "@/components/GradientText";

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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
  });

  return (
    <div ref={scrollRef}>
      <RadialGradient scrollRef={scrollRef} />

      <Hero />

      <ParallaxVideo top={true} sourcePath="/_fordgt.mp4" colourTo="#f0f0f0">
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2">
          <span className="font-allura text-[24rem]">All</span>
          <span className="font-montserrat tracking-tighter text-9xl">
            {" "}
            ura
          </span>
          <div className="flex justify-between -translate-y-[680%] font-montserrat font-light text-xl">
            <span className="tracking-widest">PAIRED</span>
            <span className="tracking-normal">WITH</span>
            <span className="tracking-tighter">MONSERRAT</span>
          </div>
          <div className="absolute w-[110%] left-1/2 -translate-x-1/2 -translate-y-full font-extralight text-center">
            Allura and Montserrat combine flowing elegance with sharp modernism.
            Allura's graceful script creates a refined, personal feel, while
            Montserrat provides strong, structured clarity. The result is a
            polished, stylish pairing, ideal for upscale branding, invitations,
            or design-focused websites.
          </div>
        </div>
      </ParallaxVideo>

      <ParallaxVideo sourcePath="/_porsche.mp4" colourTo="#f0f0f0">
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2">
          <div className="font-lora text-[18rem] -tracking-[0.8rem] whitespace-nowrap">
            Lora
          </div>
          <div className="text-4xl">
            <div className="font-lora translate-x-1/4 -translate-y-[200%]">
              with
            </div>
            <div className="font-opensans tracking-tighter text-8xl translate-x-[45%] -translate-y-[160%]">
              Open Sans
            </div>
          </div>
          <div className="absolute w-[150%] left-1/2 -translate-x-1/2 font-extralight text-center">
            The pairing of Lora and Open Sans brings together classic form and
            modern clarity. Lora's subtle serifs provide warmth and elegance,
            while Open Sans delivers clean, neutral readability. This
            combination is both timeless and professional, ideal for editorial
            layouts, blogs, or sophisticated web designs.
          </div>
        </div>
      </ParallaxVideo>

      <ParallaxVideo
        sourcePath="/_f1.mp4"
        bottom={true}
        colourFrom="#212121"
        colourTo="#f0f0f0"
      >
        <div className="relative max-w-fit">
          <div className="flex items-center whitespace-nowrap">
            <span className="font-nunito text-2xl">Nunito Meets</span>
            <span className="font-anton font-bold tracking-tight text-[16rem]">
              ANTON
            </span>
          </div>
          <div className="absolute w-[110%] left-1/2 -translate-x-1/2 font-extralight text-center">
            The blend of Nunito and Anton delivers bold impact with friendly
            tone. Anton commands attention with strong geometric weight, while
            Nunito offers a rounded, approachable feel. Together, they strike a
            confident balance, perfect for modern brands, landing pages, or
            creative portfolios.
          </div>
        </div>
      </ParallaxVideo>

      <div className="h-[100vh] bg-[#f0f0f0"></div>

      <StickyPanel
        layout={{
          left: "text",
          right: "images",
        }}
        parallax={{ left: "height", right: "translate" }}
        ranges={{
          height: ["120vh", "300vh"],
          translate: [" 25vw", "-15vw"],
        }}
        images={[images[0].src, images[1].src, images[2].src]}
        content={{
          h1: "LaFerrari",
          h2: "A statement in every curve.",
          h3: `Precision-crafted for performance — and presentation. Smooth on the eyes, sharp in its presence. What first appears sleek and modern hides layers of balance and heritage underneath.
            That's Montserrat and Lora — unmistakably refined, purposefully bold.`,
          font1: "font-montserrat",
          font2: "font-lora",
          colour: "text-[#1a1a1a]",
        }}
        sourcePath={"/_laferrari.mp4"}
      />

      <TransitionFade
        sourcePath={"/_chiron.mp4"}
        top={true}
        colourFrom="#f0f0f0"
        colourTo="#2c375a"
      />

      <StickyPanel
        layout={{
          left: "images",
          right: "text",
        }}
        parallax={{ left: "height", right: "translate" }}
        ranges={{
          height: ["200vh", "70vh"],
          translate: ["0vw", "0vw"],
        }}
        images={[images[10].src, images[11].src, images[12].src]}
        content={{
          h1: "Bugatti Chiron",
          h2: "Purple background?",
          h3: "Crafted to impress both the eye and the mind. Every detail speaks of refined control, smooth balance, and quiet precision. Effortlessly blending grace with strength. This is Allura and Inter — delivering elegant curves with a modern edge.",
          font1: "font-allura",
          font2: "font-nunit",
          colour: "text-[#ffffff]",
        }}
        sourcePath={"/_chiron.mp4"}
      />

      <TransitionFade
        sourcePath={"/_jesko.mp4"}
        colourFrom="#2c375a"
        colourTo="#664873"
      />

      <StickyPanel
        layout={{
          left: "text",
          right: "images",
        }}
        parallax={{ left: "height", right: "translate" }}
        ranges={{
          height: ["120vh", "300vh"],
          translate: ["0vw", "0vw"],
        }}
        images={[images[3].src, images[4].src, images[5].src]}
        content={{
          h1: "Pagani Huayra",
          h2: "The hybrid that redefined performance.",
          h3: "Crafted to glide with effortless grace. Each curve whispers sophistication, balancing flair with restraint. What seems fluid and expressive is, in truth, precision in motion. It's elegant and refined. It's Beau Rivage with Open Sans.",
          font1: "font-beau",
          font2: "font-opensans",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/_mclaren.mp4"}
      />

      <div className="h-[20vh]"></div>

      <ParallaxImage sourcePath={images[6].src} top={true} alt={true} />

      <GradientText colourFrom="#da4d80" colourTo="#fadbb7" font="">
        COMING MAY 26 2026
      </GradientText>

      <ParallaxVideo
        sourcePath="/_mclaren.mp4"
        bottom={true}
        colourFrom="#664873"
        colourTo="#664873"
        alt={true}
      />

      <StickyStack />
      <StickyScroll />
      <ParallaxGallery />
      <ImageWheel />
    </div>
  );
}
