import { useState } from "react";
import ParallaxScroll from "./ParallaxScroll";

export default function ParallaxText({activeDesign}) {

    const propData = [
        [
            // Smooth scroll 0
            {
                text: "Lorem",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                top: true,
                imagePath: "/Image 10.png",
            },
            {
                text: "Ipsum",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                imagePath: "/Image 11.png",
            },
            {
                text: "Dolor",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                bottom: true,
                imagePath: "/Image 7.png",
            }
        ],
        [    
            // Scroll into each other 1
            {
                text: "Lorem",
                inputStart: 0,
                offsetStart: "start start",
                offsetEnd: "end start",
                outputStart: "-100%",
                outputEnd: "600%",
                top: true,
                imagePath: "/Image 10.png",
            },
            {
                text: "Ipsum",
                inputStart: 0.3,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-350%",
                outputEnd: "600%",
                imagePath: "/Image 11.png",
            },
            {
                text: "Dolor",
                inputStart: 0.3,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-350%",
                outputEnd: "600%",
                bottom: true,
                imagePath: "/Image 7.png",
            }
        ],
        [
            // Smooth scroll 3
            {
                text: "lorem.",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                top: true,
                imagePath: "/Image 10.png",
            },
            {
                text: "ipsum.",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                imagePath: "/Image 11.png",
            },
            {
                text: "dolor.",
                inputStart: 0,
                offsetStart: "start end",
                offsetEnd: "end start",
                outputStart: "-400%",
                outputEnd: "300%",
                bottom: true,
                imagePath: "/Image 7.png",
            }
        ]
    ]

    return(
        <div>
            {propData[activeDesign].map((props, index) => (
                <ParallaxScroll key={index} {...props} />
            ))}
        </div>
    );
}