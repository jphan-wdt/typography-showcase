import { useState } from "react";
import ParallaxScroll from "./ParallaxScroll";
import images from "./images";

export default function ParallaxText({ activeDesign }) {
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
        imagePath: images[8].src,
      },
      {
        text: "Ipsum",
        inputStart: 0,
        offsetStart: "start end",
        offsetEnd: "end start",
        outputStart: "-400%",
        outputEnd: "300%",
        imagePath: images[9].src,
      },
      {
        text: "Dolor",
        inputStart: 0,
        offsetStart: "start end",
        offsetEnd: "end start",
        outputStart: "-400%",
        outputEnd: "300%",
        bottom: true,
        imagePath: images[1].src,
      },
    ],
    [
      // Scroll into each other 1
      {
        text: "Lorem",
        inputStart: 0,
        offsetStart: "start start",
        offsetEnd: "end start",
        outputStart: "-100%",
        outputEnd: "700%",
        top: true,
        imagePath: "/Image 7.png",
      },
      {
        text: "Ipsum",
        inputStart: 0.25,
        offsetStart: "start end",
        offsetEnd: "end start",
        outputStart: "-450%",
        outputEnd: "700%",
        imagePath: "/Image 11.png",
      },
      {
        text: "Dolor",
        inputStart: 0.25,
        offsetStart: "start end",
        offsetEnd: "end start",
        outputStart: "-450%",
        outputEnd: "700%",

        imagePath: "/Image 10.png",
      },
    ],
  ];

  return (
    <div>
      {propData[activeDesign].map((props, index) => (
        <ParallaxScroll key={index} {...props} />
      ))}
    </div>
  );
}
