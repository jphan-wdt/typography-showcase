import { useState } from "react";
import ParallaxText from "./ParallaxText";

export default function ParallaxScroll({activeDesign}) {

    const propData = [
        [
            // Smooth scroll 0
            {
                text: "VISION",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                top: true,
                imagePath: "/Image 10.png",
            },
            {
                text: "STYLE",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                imagePath: "/Image 11.png",
            },
            {
                text: "DESIGN",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                imagePath: "/Image 7.png",
            }
        ],
        [    
            // Scroll into each other 1
            {
                text: "VISION",
                inputStart: 0,
                offsetStart: "start start",
                offsetEnd: "end start",
                outputStart: "-100%",
                outputEnd: "600%",
                top: true,
                imagePath: "/Image 10.png",
            },
            {
                text: "STYLE",
                inputStart: 0.3,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-350%",
                outputEnd: "600%",
                imagePath: "/Image 11.png",
            },
            {
                text: "DESIGN",
                inputStart: 0.3,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-350%",
                outputEnd: "600%",
                imagePath: "/Image 7.png",
            }
        ]
    ]

    return(
        <div>
            {propData[activeDesign].map((props, index) => (
                <ParallaxText key={index} {...props} />
            ))}
        </div>
    );
}