"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";

import Hero from "@/components/Hero";
import StickyPanel from "@/components/StickyPanel";
import TransitionFade from "@/components/TransitionFade";
import ParallaxVideo from "@/components/ParallaxVideo";
import RadialGradient from "@/components/RadialGradient";
import GradientText from "@/components/GradientText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import images from "@/components/images";
import LoadEverything from "@/components/LoadUtil";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
        setTimeout(resolve, 5000)
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
    <main ref={scrollRef}>
      <SpeedInsights />
      <Analytics />
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
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-white"
        >
          <span className="font-allura text-[24rem]">All</span>
          <span className="font-majormono tracking-tighter text-[5rem] pl-5">
            {""}
            ura
          </span>
          <h3 className="flex justify-between -translate-y-[600%] font-majormono font-light text-2xl">
            <span className="tracking-[0.2rem]">major</span>
            <span className="tracking-normal">mono</span>
            <span className="-tracking-[0.12rem]">display</span>
          </h3>
          <p
            className="absolute w-full left-1/2 -translate-x-1/2 -translate-y-full font-extralight text-balance text-lg text-center"
            delay={0.4}
          >
            <strong>Allura</strong> and <strong>Major Mono Display</strong>{" "}
            combine flowing elegance with sharp modernism.{" "}
            <strong>Allura&apos;s</strong> graceful script creates a refined,
            personal feel, while <strong>Major Mono Display</strong> provides
            strong, structured clarity. The result is a polished, stylish
            pairing, ideal for upscale branding, invitations, or design-focused
            websites.
          </p>
        </div>
      </ParallaxVideo>
      <ParallaxVideo sourcePath="/Ford.mp4" blur={true}>
        <div
          id="lora-opensans"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 -translate-y-[5%] text-white"
        >
          <div className="-translate-x-16">
            <h1 className="font-lora text-[18rem] -tracking-[1rem] whitespace-nowrap">
              Lora
            </h1>
            <h2 className="text-4xl">
              <div className="font-lora translate-x-1/4 -translate-y-[200%]">
                with
              </div>
              <div className="font-opensans tracking-tighter text-8xl translate-x-[45%] -translate-y-[160%]">
                Open Sans
              </div>
            </h2>
          </div>
          <p className="absolute w-full left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            The pairing of <strong>Lora</strong> and <strong>Open Sans</strong>{" "}
            brings together classic form and modern clarity.{" "}
            <strong>Lora&apos;s</strong> subtle serifs provide warmth and
            elegance, while <strong>Open Sans</strong> delivers clean, neutral
            readability. This combination is both timeless and professional,
            ideal for editorial layouts, blogs, or sophisticated web designs.
          </p>
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
          <h2 className="flex items-center whitespace-nowrap">
            <span className="font-nunito text-2xl font-extralight">
              Nunito Meets
            </span>
            <span className="font-anton font-bold tracking-tight text-[16rem]">
              ANTON
            </span>
          </h2>
          <p className="absolute w-full left-1/2 -translate-x-1/2 text-lg text-balance font-extralight text-center">
            The blend of <strong>Nunito</strong> and <strong>Anton</strong>{" "}
            delivers bold impact with friendly tone. <strong>Anton</strong>{" "}
            commands attention with strong geometric weight, while{" "}
            <strong>Nunito</strong> offers a rounded, approachable feel.
            Together, they strike a confident balance, perfect for modern
            brands, landing pages, or creative portfolios.
          </p>
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
          font1: "font-montserrat text-8xl",
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
        images={[images[3].src, images[4].src, images[5].src]}
        content={{
          h1: "Lotus Evija",
          h2: "sharp. direct. built to DISRUPT.",
          h3: "every curve feels hand-drawn — expressive, human, unfiltered. it's a striking contrast, engineered for impact.",
          h4: "this is caveat and mono major — pure style, no compromise.",
          font1: "font-caveat tracking-tighter text-[10rem]",
          font2: "font-majormono -tracking-[0.2rem]",
          colour: "text-[#f0f0f0]",
        }}
        sourcePath={"/Evija2.mp4"}
      />
      {/* /////////////////////////////// EVIJA ///////////////////////////// */}
      {/* /////////////////////////////// PARALLAX SECTION ///////////////////////////// */}
      <div className="h-[20vh]"></div>
      <ParallaxVideo top={true} alt={true} sourcePath="/R8.mp4" blur={true}>
        <section
          id="luxurious-opensans"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-white"
        >
          <h2 className="relative w-fit left-1/2 -translate-x-1/2 font-luxurious text-[12rem]">
            Luxurious
          </h2>
          <h3 className="relative w-fit left-1/2 -translate-x-[20%] -translate-y-[220%] font-opensans font-light tracking-[1.6rem] text-4xl">
            OPEN SANS
          </h3>
          <p className="absolute w-full left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            The elegance of <strong>Luxurious Script</strong> meets the clarity
            of <strong>Open Sans</strong> for a look that&apos;s both refined
            and accessible. <strong>Luxurious Script </strong>
            brings high-end flair with sweeping, ornate strokes, while{" "}
            <strong>Open Sans </strong>
            keeps things grounded with clean, modern readability. This duo suits
            luxury brands, upscale event sites, or any layout needing grace with
            function.
          </p>
        </section>
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
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-[#f0f0f0]"
        >
          <h2 className="relative w-fit left-1/2 -translate-x-1/2 font-dangrek text-[14rem]">
            Dangrek
          </h2>
          <h3 className="relative w-fit left-1/2 -translate-x-[105%] -translate-y-[200%] font-nunito tracking-[1.8rem] text-5xl">
            NUNITO
          </h3>
          <p className="absolute w-full left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            <strong>Dangrek&apos;s</strong> distinct, angular personality pairs
            with
            <strong> Nunito&apos;s</strong> soft, rounded friendliness for a
            uniquely modern contrast. <strong>Dangrek</strong> adds sharp
            cultural character and edge, while
            <strong> Nunito</strong> balances with warmth and approachability.
            Great for creative projects that want personality without
            sacrificing readability.
          </p>
        </div>
      </ParallaxVideo>
      <ParallaxVideo top={true} alt={true} sourcePath="/NSX.mp4" blur={true}>
        <div
          id="rocksalt-playfair"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-white"
        >
          <h2 className="relative w-full flex justify-between translate-y-[50%] font-playfair tracking-wide text-5xl">
            <div>PLAYFAIR</div>
            <div>DISPLAY</div>
          </h2>
          <h3 className="relative w-full font-rocksalt text-[7rem] text-nowrap">
            Rock Salt
          </h3>
          <p className="absolute w-full left-1/2 top-1/3 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Classic meets chaos in this expressive pairing.{" "}
            <strong>Playfair Display </strong>
            brings editorial class with high-contrast serifs, while{" "}
            <strong>Rock Salt </strong>
            injects a raw, handwritten punch. Poised, but never polished.
            Perfect for brands or layouts that want a stylish edge with a
            rebellious twist.
          </p>
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
        images={[images[6].src, images[7].src, images[8].src]}
        content={{
          h1: "Bugatti Chiron",
          h2: "Built for extremes, detailed for elegance.",
          h3: "Crafted to impress both eye and mind, every surface curves with control, smooth balance, and quiet precision. It's power is undeniable, but never loud. Styled to perform with grace and strength.",
          h4: "It's Allura and Montserrat — script with structure.",
          font1: "font-allura text-[8rem]",
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
        images={[images[9].src, images[10].src, images[11].src]}
        content={{
          h1: "Porsche 911 GT2 RS",
          h2: "Every curve is deliberate.",
          h3: "Not flashy — but unforgettable. Smooth curves give way to complex engineering, while detail rewards the second glance more than the first. It's luxury by intention, and performance by design. Refined, articulate, and built to endure.",
          h4: "Lora and Forum — classic form meeting contemporary clarity.",
          font1: "font-lora tracking-tighter text-[6rem]",
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
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-white"
        >
          <h3 className="relative w-fit left-1/2 -translate-x-[45%] font-forum tracking-widest text-5xl">
            FORUM
          </h3>
          <h2 className="relative w-fit left-1/2 -translate-x-[60%] -translate-y-[20%] font-ballet text-[12rem]">
            Ballet
          </h2>
          <p className="absolute w-full left-1/2 -translate-x-1/2 font-extralight text-lg text-pretty text-center">
            <strong>Forum&apos;s</strong> elegance combines with{" "}
            <strong>Ballet&apos;s</strong> graceful modernity for a pairing of
            poise and character. <strong>Forum</strong> grounds the text with
            Roman-inspired forms, while <strong>Ballet</strong> dances across
            the page. Ideal for artistic portfolios, boutique brands, or
            storytelling with flair.
          </p>
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
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-white"
        >
          <h2 className="relative w-fit left-1/2 -translate-x-1/2 font-majormono text-[6rem] text-nowrap">
            major mono
          </h2>
          <h3 className="relative w-fit left-1/2 -translate-x-[90%] -translate-y-[70%] font-inter tracking-[2.3rem] text-4xl">
            INTER
          </h3>
          <p className="absolute w-full top-1/3 left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            Crisp and functional, <strong>Major Mono Display</strong> and{" "}
            <strong>Inter</strong> deliver a tech-savvy aesthetic with polish.{" "}
            <strong>Mono&apos;s</strong> monospaced structure gives personality
            and precision, while <strong>Inter</strong> keeps it legible and
            flexible. A confident pairing for developer portfolios, creative
            tech brands, or data-driven storytelling.
          </p>
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
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-[#f0f0f0]"
        >
          <h3 className="relative w-fit left-1/2 -translate-x-[140%] font-caveat tracking-widest text-7xl">
            Caveat
          </h3>
          <h2 className="relative w-fit left-1/2 -translate-x-[50%] -translate-y-[20%] font-anton font-bold text-[16rem]">
            ANTON
          </h2>
          <p className="absolute w-full left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            <strong>Caveat&apos;s</strong> informal script energy meets{" "}
            <strong>Anton&apos;s</strong> loud, no-nonsense impact. The result
            is punchy and playful — handwriting meets headline. It&apos;s
            perfect for bold campaigns, youth-focused designs, or any project
            that needs both voice and volume.
          </p>
        </div>
      </ParallaxVideo>
      <ParallaxVideo top={true} alt={true} sourcePath="/Chiron.mp4" blur={true}>
        <div
          id="mont-rocksalt"
          className="relative max-w-fit h-full left-1/2 -translate-x-1/2 text-white"
        >
          <h3 className="relative w-fit left-1/2 -translate-x-[50%] font-rocksalt tracking-widest text-3xl">
            Rock Salt
          </h3>
          <h2 className="relative w-fit left-1/2 -translate-x-[50%] -translate-y-[20%] font-montserrat font-light text-[6rem]">
            MONTSERRAT
          </h2>
          <p className="absolute w-full left-1/2 -translate-x-1/2 font-extralight text-lg text-balance text-center">
            <strong>Rock Salt</strong> brings the grit,{" "}
            <strong>Montserrat</strong> brings the grid. This combo fuses grunge
            with modern geometry — expressive, urban, and stylishly raw.{" "}
            <strong>Rock Salt</strong> scrawls with attitude, while{" "}
            <strong>Montserrat</strong> delivers strong structure. Great for
            edgy branding, fashion sites, or bold landing pages.
          </p>
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
    </main>
  );
}
