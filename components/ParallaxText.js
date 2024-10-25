import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxText({text, inputStart, offsetStart, offsetEnd, outputStart, outputEnd, top = false, imagePath}) {

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: [offsetStart, offsetEnd]
    })
    const y = useTransform(scrollYProgress, [inputStart, 1], [outputStart, outputEnd])

    return (

            <div className="h-[125vh] w-full relative" ref={scrollRef}>
                <Image
                    src={imagePath}
                    layout="fill"
                    objectFit="cover"
                    alt="1"
                    className={`z-[-1] ${top ? 'rounded-t-xl drop-shadow-[0px_0px_50px_rgba(0,0,0,0.5)]' : ''}`}
                />

                <motion.div
                    className="absolute top-1/2 left-1/2
                    text-white text-9xl font-extrabold tracking-widest
                    drop-shadow-[0px_0px_6px_rgba(0,0,0,0.24)]] z-[-1]"
                    style={{ y , x: "-50%"}}
                >
                    {text}
                </motion.div>

            </div>
    );
}