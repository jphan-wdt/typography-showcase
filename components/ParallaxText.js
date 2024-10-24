import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxText({text, inputStart, offsetStart, outputStart, top = false, imagePath}) {

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: [offsetStart, 'end start']
    })
    const y = useTransform(scrollYProgress, [inputStart, 1], [outputStart, "600%"])

    return (

        <div className="h-screen w-full" ref={scrollRef}>

            <div className="h-screen w-full relative">
                <Image
                    src={imagePath}
                    layout="fill"
                    objectFit="cover"
                    alt="1"
                    className={`${top ? 'rounded-t-xl drop-shadow-[0px_0px_50px_rgba(0,0,0,0.5)]' : ''}`}
                />

                <motion.div
                    className="absolute top-1/2 left-1/2
                    text-white text-9xl font-extrabold tracking-widest
                    drop-shadow-[0px_0px_6px_rgba(0,0,0,0.24)]"
                    style={{ y , x: "-50%"}}
                >
                    {text}
                </motion.div>

            </div>
            
        </div>
        
    );
}