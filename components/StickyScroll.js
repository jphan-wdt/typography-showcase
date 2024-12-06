import Image from "next/image";

import image1 from "@/public/Image 3.png"
import image2 from "@/public/Image 5.png"
import image3 from "@/public/Image 9.png"
import image4 from "@/public/Image 6.png"
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function StickyScroll() {

    const [activePicture, setActivePicture] = useState(1)
    const [activeText, setActiveText] = useState("lorem.")
    const images = [image1, image2, image3, image4]

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end start']
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        switch (true) {
            case latest < 0.125:
                if (activePicture != 1) {
                    setActivePicture(1);
                    setActiveText("lorem.")
                }
                break;
    
            case latest >= 0.125 && latest < 0.375:
                if (activePicture != 2) {
                    setActivePicture(2);
                    setActiveText("ipsum.")
                }
                break;
    
            case latest >= 0.375 && latest < 0.625:
                if (activePicture != 3) {
                    setActivePicture(3);
                    setActiveText("dolor.")
                }
                break;

            case latest >= 0.625 && latest < 1:
                if (activePicture != 4) {
                    setActivePicture(4);
                    setActiveText("sit amet.")
                }
                break;
        }
    });
    
    return(
        <div className="relative h-auto bg-6">
            <div className="h-auto w-full flex mt-10 mb-10" ref={scrollRef}>

                <div className="h-[60vh] w-1/2 sticky top-8">
                    <div className="text-5xl text-white font-extrabold tracking-tighter text-center mt-[30vh] translate-y-[-50%]">
                        {activeText}
                    </div>
                </div>

                <div className="h-auto w-1/2 flex flex-col">
                    {images.map((img, index) => (
                        <div key={index} className={`${
                            activePicture === index + 1
                                ? 'h-[60vh] -translate-x-14 scale-110 flex items-center justify-center transition-all duration-500' 
                                : 'h-[60vh] flex items-center justify-center transition-all duration-700'}`}
                        >
                            <Image
                                src={img}
                                objectFit="cover"
                                alt={`Image ${index + 1}`}
                                className="rounded-xl right-10 relative"
                            />
                        </div>
                    ))}
                </div>
                    
            </div>

            <div className="h-screen bg-white"></div>
        </div>
    );
}