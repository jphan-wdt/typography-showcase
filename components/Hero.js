import Image from "next/image";
import image1 from "@/public/Image 9.png"
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
                    className="sticky top-0 w-full h-screen z-[-2]"
                    style={{ scale, opacity, y }}>
                    
                        <Image
                            src={image1}
                            layout="fill"
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl"
                        />
                    

                </motion.div>

                <div className="h-[100vh]" ref={scrollRef}/>
            </div>
    );
}