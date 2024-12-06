import Image from "next/image";
import image from "@/public/Image 1.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end start']
    })
    const scale = useTransform(scrollYProgress, [0, 0.3], ["100%", "90%"])
    const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "100%"])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.5], ["0%", "5%", "-5%"])

    return(
            <div className="mb-[-100vh]">
                <motion.div
                    className="sticky top-3 w-full h-screen z-[-2]"
                    style={{ scale, opacity, y }}>
                        <Image
                            src={image}
                            layout="fill"
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl"
                        />
                        <div className="absolute h-full w-auto">
                            <div className="relative top-56 left-12
                                text-white text-8xl tracking-tighter font-semibold">
                                <div>Dynamic visuals.</div>
                                <div>Immersive design.</div>
                                <div>Crafted with precision.</div>
                                <div>Explore finesse in motion.</div>
                            </div>
                        </div>
                    

                </motion.div>

                <div className="h-[100vh]" ref={scrollRef}/>
            </div>
    );
}