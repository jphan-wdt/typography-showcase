import Image from "next/image";

import image1 from "@/public/Image 14.png"
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function StickyScroll() {

    const [activePicture, setActivePicture] = useState("Picture 1")

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end start']
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
    });
    
    return(
        <div className="relative h-auto bg-6">
            <div className="h-auto w-full flex" ref={scrollRef}>

                <div className="h-[60vh] w-1/2
                sticky top-0">
                    <div className="text-5xl text-white font-extrabold  text-center mt-[30vh] translate-y-[-50%]">
                        {activePicture}
                    </div>
                    
                </div>

                <div className="h-auto w-1/2 flex flex-col">
                        <Image
                            src={image1}
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl right-16 relative"
                        />
                        <Image
                            src={image1}
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl"
                        />
                        <Image
                            src={image1}
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl"
                        />
                        <Image
                            src={image1}
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl"
                        />
                </div>
                    

                
            </div>

            <div className="h-screen"></div>
        </div>
    );
}