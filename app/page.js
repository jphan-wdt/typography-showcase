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
import StickyStackItem from "@/components/StickyStackItem";
import ParallaxGallery from "@/components/ParallaxGallery";
import StickyPanel from "@/components/StickyPanel";
import TransitionFade from "@/components/TransitionFade";
import ParallaxImage from "@/components/ParallaxImage";
import ParallaxVideo from "@/components/ParallaxVideo";
import RadialGradient from "@/components/RadialGradient";
import GradientText from "@/components/GradientText";

import images from "@/components/images";
import Image from "next/image";

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
      <ImageWheel />
      <RadialGradient scrollRef={scrollRef} />
      <Hero />
      <ParallaxVideo
        top={true}
        sourcePath="/_fordgt.mp4"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2">
          <span className="font-allura text-[24rem]">All</span>
          <span className="font-majormono tracking-tighter text-[5rem] pl-5">
            {""}
            ura
          </span>
          <div className="flex justify-between -translate-y-[680%] font-majormono font-light text-xl">
            <span className="tracking-[0.2rem]">major</span>
            <span className="tracking-normal">mono</span>
            <span className="-tracking-[0.12rem]">display</span>
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
      <ParallaxVideo sourcePath="/_porsche.mp4" colourTo="#f0f0f0" blur={true}>
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2">
          <div className="font-lora text-[18rem] -tracking-[1rem] whitespace-nowrap">
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
        blur={true}
      >
        <div className="relative max-w-fit">
          <div className="flex items-center whitespace-nowrap">
            <span className="font-nunito text-2xl font-extralight">
              Nunito Meets
            </span>
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
          translate: [" 25vw", "-25vw"],
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
          h2: "",
          h3: "crafted to impress both the eye and the mind. every detail speaks of refined control, smooth balance, and quiet precision. effortlessly blending grace with strength. this is allura and mont — delivering elegant curves with a modern edge.",
          font1: "font-allura",
          font2: "font-montserrat",
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
          h1: "Lotus Evija",
          h2: "The hybrid that redefined performance.",
          h3: "crafted to glide with effortless Grace. each curve whispers sophistication, balancing flair with restraint. what seems fluid and expressive is, in truth, precision in motion. it's elegant and refined.caveat major mono",
          font1: "font-caveat",
          font2: "font-majormono",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/_mclaren.mp4"}
      />

      <div className="relative h-[440vh] w-full">
        <StickyStackItem>
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className="h-screen w-full object-cover blur-md scale-110"
          />
          <div className="absolute top-0 left-0 h-full w-full text-white">
            <div className="relative w-full top-1/2 -translate-y-1/2">
              <div className="relative w-fit left-1/2 -translate-x-1/2 font-luxurious text-[12rem]">
                Luxurious
              </div>
              <div className="relative w-fit left-1/2 -translate-x-[20%] -translate-y-[220%] font-opensans font-light tracking-[1.6rem] text-4xl">
                OPEN SANS
              </div>
            </div>
          </div>
        </StickyStackItem>

        <StickyStackItem>
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className="h-screen w-full object-cover blur-md scale-110"
          />
          <div className="absolute top-0 left-0 h-full w-full text-white">
            <div className="relative w-full top-1/2 -translate-y-1/2">
              <div className="relative w-fit left-1/2 -translate-x-1/2 font-dangrek text-[16rem]">
                Dangrek
              </div>
              <div className="relative w-fit left-1/2 -translate-x-[105%] -translate-y-[200%] font-nunito tracking-[2.3rem] text-5xl">
                NUNITO
              </div>
            </div>
          </div>
        </StickyStackItem>
        <StickyStackItem>
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className="h-screen w-full object-cover blur-md scale-110"
          />
          <div className="absolute top-0 left-0 h-full w-full text-white">
            <div className="relative w-fit left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-full font-babylonica text-[16rem]">
                Babylonica
              </div>
              <div className="relative w-full flex justify-between -translate-y-[200%] font-playfair tracking-wide text-5xl">
                <div>WITH</div>
                <div>PLAYFAIR DISPLAY</div>
              </div>
            </div>
          </div>
        </StickyStackItem>
        <StickyStackItem>
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className="h-screen w-full object-cover blur-md scale-110"
          />
          <div className="absolute top-0 left-0 h-full w-full text-white">
            <div className="relative w-full left-1/2 top-1/2 -translate-y-1/2">
              <div className="relative w-fit -translate-x-[45%] font-forum tracking-widest text-5xl">
                FORUM
              </div>
              <div className="relative w-fit -translate-x-[60%] -translate-y-[20%] font-ballet text-[12rem]">
                Ballet
              </div>
            </div>
          </div>
        </StickyStackItem>
      </div>

      <ParallaxVideo
        sourcePath="/_mclaren.mp4"
        top={true}
        colourFrom="#1a1726"
        colourTo="#1a1726"
        alt={true}
      />
      <div className="h-[90vh] text-[12vw] text-balance overflow-hidden">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello
        </GradientText>
      </div>
      <ParallaxVideo
        sourcePath="/_mclaren.mp4"
        bottom={true}
        colourFrom="#1a1726"
        colourTo="#1a1726"
        alt={true}
      />
      <StickyScroll />
      <ParallaxGallery />
      <ImageWheel />
    </div>
  );
}
