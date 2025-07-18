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
import TextSlide from "@/components/TextSlide";
import Footer from "@/components/Footer";

import images from "@/components/images";
import Image from "next/image";
import Carousel from "@/components/Carousel";

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
    console.log(latest);
  });

  return (
    <div ref={scrollRef}>
      <RadialGradient scrollRef={scrollRef} />
      <Hero />
      {/* /////////////////////////////// PARALLAX VIDEO 3 ///////////////////////////// */}
      <ParallaxVideo
        top={true}
        sourcePath="/_fordgt.mp4"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
          <span className="font-allura text-[24rem]">All</span>
          <span className="font-majormono tracking-tighter text-[5rem] pl-5">
            {""}
            ura
          </span>
          <div className="flex justify-between -translate-y-[600%] font-majormono font-light text-2xl">
            <span className="tracking-[0.2rem]">major</span>
            <span className="tracking-normal">mono</span>
            <span className="-tracking-[0.12rem]">display</span>
          </div>
          <div
            className="absolute w-[130%] left-1/2 -translate-x-1/2 -translate-y-full font-extralight text-balance text-lg text-center"
            delay={0.4}
          >
            <strong>Allura</strong> and <strong>Major Mono Display</strong>{" "}
            combine flowing elegance with sharp modernism. Allura's graceful
            script creates a refined, personal feel, while Major Mono Display
            provides strong, structured clarity. The result is a polished,
            stylish pairing, ideal for upscale branding, invitations, or
            design-focused websites.
          </div>
        </div>
      </ParallaxVideo>
      <ParallaxVideo sourcePath="/_porsche.mp4" colourTo="#f0f0f0" blur={true}>
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
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
          <div className="absolute w-[160%] left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
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
        <div className="relative max-w-fit -translate-y-[5%]">
          <div className="flex items-center whitespace-nowrap">
            <span className="font-nunito text-2xl font-extralight">
              Nunito Meets
            </span>
            <span className="font-anton font-bold tracking-tight text-[16rem]">
              ANTON
            </span>
          </div>
          <div className="absolute w-[120%] left-1/2 -translate-x-1/2 text-lg text-balance text-center">
            The blend of Nunito and Anton delivers bold impact with friendly
            tone. Anton commands attention with strong geometric weight, while
            Nunito offers a rounded, approachable feel. Together, they strike a
            confident balance, perfect for modern brands, landing pages, or
            creative portfolios.
          </div>
        </div>
      </ParallaxVideo>
      {/* /////////////////////////////// PARALLAX VIDEO 3 ///////////////////////////// */}

      <div className="h-[70vh]" />

      <div className="h-[90vh] text-[12vw] text-balance overflow-">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Perfection in Print
        </GradientText>
      </div>

      <TransitionFade
        sourcePath={"/_LaFerrari.mp4"}
        colourFrom="#f0f0f0"
        colourTo="#f0f0f0"
      />
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
          h3: `Precision-crafted for performance — and presentation. Smooth on the eyes, sharp in its presence. What first appears sleek and modern hides layers of balance and heritage underneath. Styled with intent. Behind every angle is a reason — and behind every detail, control.`,
          h4: "That's Montserrat and Lora — unmistakably refined, purposefully bold.",
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
          h2: "Built for extremes, detailed for elegance.",
          h3: "Crafted to impress both eye and mind, every surface curves with control, smooth balance, and quiet precision. It's power is undeniable, but never loud. Styled to perform with grace and strength.",
          h4: "It's Allura and Montserrat — script with structure.",
          font1: "font-allura",
          font2: "font-montserrat",
          colour: "text-[#ffffff]",
        }}
        sourcePath={"/_chiron.mp4"}
      />

      <div className="h-[20vh]"></div>

      <ParallaxVideo
        top={true}
        alt={true}
        sourcePath="/_fordgt.mp4"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
          <div className="relative w-fit left-1/2 -translate-x-1/2 font-luxurious text-[12rem]">
            Luxurious
          </div>
          <div className="relative w-fit left-1/2 -translate-x-[20%] -translate-y-[220%] font-opensans font-light tracking-[1.6rem] text-4xl">
            OPEN SANS
          </div>
          <div className="absolute w-[165%] left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            The elegance of Luxurious Script meets the clarity of Open Sans for
            a look that's both refined and accessible. Luxurious Script brings
            high-end flair with sweeping, ornate strokes, while Open Sans keeps
            things grounded with clean, modern readability. This duo suits
            luxury brands, upscale event sites, or any layout needing grace with
            function.
          </div>
        </div>
      </ParallaxVideo>

      <div className="h-[90vh] text-[12vw] text-balance overflow-hidden">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Strokes of Character
        </GradientText>
      </div>

      <ParallaxVideo
        bottom={true}
        alt={true}
        sourcePath="/_fordgt.mp4"
        colourFrom="#2c375a"
        colourTo="#2c375a"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-[#f0f0f0]">
          <div className="relative w-fit left-1/2 -translate-x-1/2 font-dangrek text-[16rem]">
            Dangrek
          </div>
          <div className="relative w-fit left-1/2 -translate-x-[105%] -translate-y-[200%] font-nunito tracking-[2.3rem] text-5xl">
            NUNITO
          </div>
          <div className="absolute w-[100%] left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Dangrek's distinct, angular personality pairs with Nunito's soft,
            rounded friendliness for a uniquely modern contrast. Dangrek adds
            sharp cultural character and edge, while Nunito balances with warmth
            and approachability. Great for creative projects that want
            personality without sacrificing readability.
          </div>
        </div>
      </ParallaxVideo>

      <ParallaxVideo
        top={true}
        alt={true}
        sourcePath="/_porsche.mp4"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
          <div className="relative w-full flex justify-between translate-y-[50%] font-playfair tracking-wide text-5xl">
            <div>PLAYFAIR</div>
            <div>DISPLAY</div>
          </div>
          <div className="relative w-full font-rocksalt text-[8rem] text-nowrap">
            Rock Salt
          </div>
          <div className="absolute w-[100%] left-1/2 top-1/3 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Classic meets chaos in this expressive pairing. Playfair Display
            brings editorial class with high-contrast serifs, while Rock Salt
            injects a raw, handwritten punch. Poised, but never polished.
            Perfect for brands or layouts that want a stylish edge with a
            rebellious twist.
          </div>
        </div>
      </ParallaxVideo>

      <div className="h-[90vh] text-[12vw] text-balance overflow-hidden">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Just My Type
        </GradientText>
      </div>

      {/* /////////////////////////////// STICKY PANEL 3 ///////////////////////////// */}
      <TransitionFade
        sourcePath={"/_Evija.mp4"}
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
          height: ["200vh", "70vh"],
          translate: ["0vw", "0vw"],
        }}
        images={[images[3].src, images[4].src, images[5].src]}
        content={{
          h1: "Lotus Evija",
          h2: "lightweight. direct. built to DISRUPT.",
          h3: "every curve feels hand-drawn — expressive, human, unfiltered. it's a striking contrast, engineered for impact.",
          h4: "this is caveat and mono major — pure style, no compromise.",
          font1: "font-caveat tracking-tighter",
          font2: "font-majormono -tracking-[0.2rem]",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/_Evija.mp4"}
      />
      {/* /////////////////////////////// STICKY PANEL 3 ///////////////////////////// */}

      <TransitionFade
        sourcePath={"/_Spyder.mp4"}
        colourFrom="#664873"
        colourTo="#2c375a"
      />
      <StickyPanel
        layout={{
          left: "images",
          right: "text",
        }}
        parallax={{ left: "height", right: "translate" }}
        ranges={{
          height: ["120vh", "300vh"],
          translate: ["0vw", "0vw"],
        }}
        images={[images[3].src, images[4].src, images[5].src]}
        content={{
          h1: "Porsche 918 Spyder",
          h2: "Every curve is deliberate.",
          h3: "Not flashy — but unforgettable. Smooth curves give way to complex engineering, while detail rewards the second glance more than the first. It's luxury by intention, and performance by design. Refined, articulate, and built to endure.",
          h4: "Lora and Forum — classic form meeting contemporary clarity.",
          font1: "font-lora tracking-tighter",
          font2: "font-forum -tracking-[0.2rem",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/_Spyder.mp4"}
      />

      <div className="h-[20vh]"></div>

      <ParallaxVideo
        sourcePath="/_porsche.mp4"
        colourFrom="#2c375a"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
          <div className="relative w-fit left-1/2 -translate-x-[45%] font-forum tracking-widest text-5xl">
            FORUM
          </div>
          <div className="relative w-fit left-1/2 -translate-x-[60%] -translate-y-[20%] font-ballet text-[12rem]">
            Ballet
          </div>
          <div className="absolute w-[200%] left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Forum's historical, architectural elegance combines with Ballet's
            graceful modernity for a pairing full of poise and character. Forum
            grounds the text with sculpted Roman-inspired forms, while Ballet
            dances across the page with movement and charm. Ideal for artistic
            portfolios, boutique brands, or storytelling with flair.
          </div>
        </div>
      </ParallaxVideo>

      <ParallaxVideo
        top={true}
        alt={true}
        sourcePath="/_porsche.mp4"
        colourFrom="#2c375a"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
          <div className="relative w-fit left-1/2 -translate-x-1/2 font-majormono text-[12rem]">
            major mono
          </div>
          <div className="relative w-fit left-1/2 -translate-x-[92%] -translate-y-[120%] font-inter tracking-[2.3rem] text-5xl">
            INTER
          </div>
          <div className="absolute w-[60%] top-1/3 left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Crisp and functional, Major Mono Display and Inter deliver a
            tech-savvy aesthetic with polish. Mono's monospaced structure gives
            personality and precision, while Inter keeps it legible and
            flexible. A confident pairing for developer portfolios, creative
            tech brands, or data-driven storytelling.
          </div>
        </div>
      </ParallaxVideo>

      <div className="h-[90vh] text-[12vw] text-balance overflow-hidden">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Style, Scripted
        </GradientText>
      </div>

      <ParallaxVideo
        bottom={true}
        alt={true}
        sourcePath="/_porsche.mp4"
        colourFrom="#2c375a"
        colourTo="#2c375a"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-[#f0f0f0]">
          <div className="relative w-fit left-1/2 -translate-x-[140%] font-caveat tracking-widest text-7xl">
            Caveat
          </div>
          <div className="relative w-fit left-1/2 -translate-x-[50%] -translate-y-[20%] font-anton font-bold text-[16rem]">
            ANTON
          </div>
          <div className="absolute w-[160%] left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Caveat's informal script energy meets Anton's loud, no-nonsense
            impact. The result is punchy and playful — handwriting meets
            headline. It's perfect for bold campaigns, youth-focused designs, or
            any project that needs both voice and volume.
          </div>
        </div>
      </ParallaxVideo>

      <ParallaxVideo
        top={true}
        alt={true}
        sourcePath="/_porsche.mp4"
        colourTo="#f0f0f0"
        blur={true}
      >
        <div className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%]">
          <div className="relative w-fit left-1/2 -translate-x-[50%] font-rocksalt tracking-widest text-5xl">
            Rock Salt
          </div>
          <div className="relative w-fit left-1/2 -translate-x-[50%] -translate-y-[20%] font-montserrat font-light text-[12rem]">
            MONTSERRAT
          </div>
          <div className="absolute w-[60%] left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Rock Salt brings the grit, Montserrat brings the grid. This combo
            fuses grunge with modern geometry — expressive, urban, and stylishly
            raw. Rock Salt scrawls with attitude, while Montserrat delivers
            strong structure. Great for edgy branding, fashion sites, or bold
            landing pages.
          </div>
        </div>
      </ParallaxVideo>

      <div className="h-[90vh] text-[12vw] text-balance overflow-hidden">
        <GradientText
          colourEdge="#e75a5f"
          colourCenter="#f7ba88"
          colourBg="#642558"
          font="font-allura"
        >
          Fine Prints
        </GradientText>
      </div>

      <TransitionFade
        sourcePath={"/_jesko.mp4"}
        colourFrom="#2c375a"
        colourTo="#000000"
      />

      <Footer />

      {/* <div className="relative h-[330vh] w-full">
        <StickyStackItem>
          <Image
            src={images[0].src}
            width={1600}
            height={900}
            alt="1"
            className="h-screen w-full object-cover blur-md scale-110"
          />
          <div className="absolute top-0 left-0 h-full w-full text-white">
            <div className="relative w-fit left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-full font-playfair text-[16rem]">
                playfair
              </div>
              <div className="relative w-full flex justify-between -translate-y-[80%] font-dangrek tracking-wide text-5xl">
                <div>WITH</div>
                <div>DANGREK</div>
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
              <div className="relative w-fit translate-x-[0%] translate-y-[50%] font-ballet text-[16rem]">
                fair
              </div>
              <div className="relative w-fit -translate-x-[105%] -translate-y-[60%] font-playfair tracking-tighter text-[10rem]">
                Play
              </div>
              <div className="relative w-fit -translate-x-[25%] -translate-y-[100%] font-ballet  text-[6rem]">
                Ballet
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
              <div className="relative w-fit -translate-x-[50%] font-forum tracking-tighter text-[12rem]">
                Forum
              </div>
              <div className="relative w-fit -translate-x-[50%] -translate-y-[20%] font-montserrat font-thin text-[1rem]">
                MONTSERRAT
              </div>
            </div>
          </div>
        </StickyStackItem>
      </div> */}

      {/* <StickyScroll />
      <ParallaxGallery />
      <ImageWheel Carousel /> */}
    </div>
  );
}
