"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
  AnimatePresence,
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
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import images from "@/components/images";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import LoadEverything from "@/components/LoadUtil";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const Load = async () => {
      const loadPromise = LoadEverything();
      const timeoutPromise = new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      try {
        await Promise.race([loadPromise, timeoutPromise]);
      } finally {
        setReady(true);
        document.body.classList.remove("overflow-hidden");
      }
    };

    Load();
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (!ready) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [ready]);

  return (
    <div ref={scrollRef}>
      <AnimatePresence>
        {!ready && (
          <motion.div
            className="h-screen w-full fixed flex flex-col items-center justify-center
              text-balance tracking-tighter font-thin text-white
            bg-[#0f0f0f] z-10 overflow-hidden"
            initial="visible"
            variants={variants}
            exit="hidden"
          >
            <div className="text-9xl">Loading</div>
            <div className="text-2xl">Best experienced on desktop</div>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <RadialGradient scrollRef={scrollRef} />
      <Hero />
      {/* /////////////////////////////// PARALLAX VIDEO 3 ///////////////////////////// */}
      <ParallaxVideo top={true} sourcePath="/Porsche.mp4" blur={true}>
        <div
          id="allura-majormono"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
      <ParallaxVideo sourcePath="/Ford.mp4" blur={true}>
        <div
          id="lora-opensans"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <ParallaxVideo
        sourcePath="/Valhalla.mp4"
        bottom={true}
        colourFrom="#0f0f0f"
        colourTo="#f0f0f0" // soft white
        blur={true}
      >
        <div id="anton-nunito" className="relative max-w-fit -translate-y-[5%]">
          <div className="flex items-center whitespace-nowrap">
            <span className="font-nunito text-2xl font-extralight">
              Nunito Meets
            </span>
            <span className="font-anton font-bold tracking-tight text-[16rem]">
              ANTON
            </span>
          </div>
          <div className="absolute w-[120%] left-1/2 -translate-x-1/2 text-lg text-balance font-extralight text-center">
            The blend of Nunito and Anton delivers bold impact with friendly
            tone. Anton commands attention with strong geometric weight, while
            Nunito offers a rounded, approachable feel. Together, they strike a
            confident balance, perfect for modern brands, landing pages, or
            creative portfolios.
          </div>
        </div>
      </ParallaxVideo>
      {/* /////////////////////////////// PARALLAX 3.1 ///////////////////////////// */}
      {/* /////////////////////////////// GRADIENT TEXT 1 ///////////////////////////// */}
      <div className="h-[70vh]" />
      <div className="h-[90vh] text-[12vw] text-balance">
        <GradientText
          colourCenter="#87d8ff"
          colourEdge="#d4b5ff"
          colourBg="#ffab9a"
          font="font-allura"
        >
          Perfection in Print
        </GradientText>
      </div>
      {/* /////////////////////////////// GRADIENT TEXT 1 ///////////////////////////// */}
      {/* /////////////////////////////// FERRARI ///////////////////////////// */}
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <TransitionFade
        sourcePath={"/LaFerrari1.mp4"}
        colourFrom="#f0f0f0"
        colourTo="#fcd5ce"
      />
      <div id="mont-lora" />
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
          colour: "text-[#212121]",
        }}
        sourcePath={"/LaFerrari2.mp4"}
      />
      {/* /////////////////////////////// FERRARI ///////////////////////////// */}
      {/* /////////////////////////////// EVIJA ///////////////////////////// */}
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <TransitionFade
        sourcePath={"/Evija1.mp4"}
        top={true}
        colourFrom="#fcd5ce"
        colourTo="#664974" // purple
      />
      <div id="caveat-majormono" />
      <StickyPanel
        layout={{
          left: "images",
          right: "text",
        }}
        parallax={{ left: "height", right: "translate" }}
        ranges={{
          height: ["200vh", "150vh"],
          translate: ["0vw", "0vw"],
        }}
        images={[images[10].src, images[11].src, images[12].src]}
        content={{
          h1: "Lotus Evija",
          h2: "lightweight. direct. built to DISRUPT.",
          h3: "every curve feels hand-drawn — expressive, human, unfiltered. it's a striking contrast, engineered for impact.",
          h4: "this is caveat and mono major — pure style, no compromise.",
          font1: "font-caveat tracking-tighter",
          font2: "font-majormono -tracking-[0.2rem]",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/Evija2.mp4"}
      />
      {/* /////////////////////////////// EVIJA ///////////////////////////// */}
      {/* /////////////////////////////// PARALLAX SECTION ///////////////////////////// */}
      <div className="h-[20vh]"></div>
      <ParallaxVideo top={true} alt={true} sourcePath="/R8.mp4" blur={true}>
        <div
          id="luxurious-opensans"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
          colourCenter="#e8511e"
          colourEdge="#d4124e"
          colourBg="#5a0953"
          font="font-allura"
        >
          Strokes of Character
        </GradientText>
      </div>
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <ParallaxVideo
        bottom={true}
        alt={true}
        sourcePath="/Italia.mp4"
        colourFrom="#664974"
        colourTo="#333952" // blue grey
        blur={true}
      >
        <div
          id="dangrek-nunito"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-[#f0f0f0]"
        >
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
      <ParallaxVideo top={true} alt={true} sourcePath="/NSX.mp4" blur={true}>
        <div
          id="rocksalt-playfair"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
          colourCenter="#d4124e"
          colourEdge="#9985f3"
          colourBg="#5a0953"
          font="font-allura"
        >
          Type Art
        </GradientText>
      </div>
      {/* /////////////////////////////// PARALLAX 3.2 ///////////////////////////// */}
      {/* /////////////////////////////// CHIRON ///////////////////////////// */}
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <TransitionFade
        sourcePath={"/Chiron1.mp4"}
        colourFrom="#333952"
        colourTo="#2c375b" // dark blue
      />
      <div id="allura-mont" />
      <StickyPanel
        layout={{
          left: "text",
          right: "images",
        }}
        parallax={{ left: "height", right: "translate" }}
        ranges={{
          height: ["200vh", "100vh"],
          translate: ["0vw", "0vw"],
        }}
        images={[images[3].src, images[4].src, images[5].src]}
        content={{
          h1: "Bugatti Chiron",
          h2: "Built for extremes, detailed for elegance.",
          h3: "Crafted to impress both eye and mind, every surface curves with control, smooth balance, and quiet precision. It's power is undeniable, but never loud. Styled to perform with grace and strength.",
          h4: "It's Allura and Montserrat — script with structure.",
          font1: "font-allura",
          font2: "font-montserrat",
          colour: "text-[#ffffff]",
        }}
        sourcePath={"/Chiron2.mp4"}
      />
      {/* /////////////////////////////// CHIRON ///////////////////////////// */}
      {/* /////////////////////////////// SPYDER ///////////////////////////// */}
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <TransitionFade
        sourcePath={"/Porsche1.mp4"}
        colourFrom="#2c375b"
        colourTo="#2f4135" // green
      />
      <div id="lora-forum" />
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
          h1: "Porsche 911 GT2 RS",
          h2: "Every curve is deliberate.",
          h3: "Not flashy — but unforgettable. Smooth curves give way to complex engineering, while detail rewards the second glance more than the first. It's luxury by intention, and performance by design. Refined, articulate, and built to endure.",
          h4: "Lora and Forum — classic form meeting contemporary clarity.",
          font1: "font-lora tracking-tighter",
          font2: "font-forum -tracking-[0.2rem",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/Porsche2.mp4"}
      />
      {/* /////////////////////////////// SPYDER ///////////////////////////// */}
      {/* /////////////////////////////// PARALLAX 3.3 ///////////////////////////// */}
      <div className="h-[20vh]"></div>
      <ParallaxVideo sourcePath="/Evija.mp4" blur={true}>
        <div
          id="ballet-forum"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
        sourcePath="/Valhalla.mp4"
        blur={true}
      >
        <div
          id="majormono-inter"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
          colourCenter="#55844a"
          colourEdge="#18442a"
          colourBg="#001c00"
          font="font-allura"
        >
          Style in Script
        </GradientText>
      </div>
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <ParallaxVideo
        bottom={true}
        alt={true}
        sourcePath="/LaFerrari.mp4"
        colourFrom="#2f4135"
        colourTo="#6d3c5e"
        blur={true}
      >
        <div
          id="anton-caveat"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-[#f0f0f0]"
        >
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
      <ParallaxVideo top={true} alt={true} sourcePath="/Chiron.mp4" blur={true}>
        <div
          id="mont-rocksalt"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
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
      {/* /////////////////////////////// PARALLAX 3.3 ///////////////////////////// */}
      {/* /////////////////////////////// COLOUR CHANGE ///////////////////////////// */}
      <TransitionFade
        sourcePath={"/PorscheFEOutro.mp4"}
        colourFrom="#6d3c5e"
        colourTo="#0f0f0f"
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
