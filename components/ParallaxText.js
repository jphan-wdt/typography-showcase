import { useState } from "react";
import ParallaxScroll from "./ParallaxScroll";
import images from "./images";

export default function ParallaxText({ activeDesign }) {
  const propData = [
    [
      // Smooth scroll [0]
      {
        text: "Georgia.",
        top: true,
        imagePath: images[8].src,
        colour: "#2c3c56",
        font: "font-serif",
      },
      {
        text: "ANTON",
        imagePath: images[12].src,
        colour: "#ffffff",
        font: "font-custom",
      },
      {
        text: "Maguntia",
        bottom: true,
        imagePath: images[2].src,
        colour: "#ffff00",
        font: "font-custom2",
      },
    ],
    [
      // Scroll into each other [1] do not use
      {
        text: "LOREM",
        inputStart: 0,
        offsetStart: "start start",
        offsetEnd: "end start",
        outputStart: "-100%",
        outputEnd: "700%",
        top: true,
        imagePath: "/Image 7.png",
      },
      {
        text: "IPSUM",
        inputStart: 0.25,
        offsetStart: "start end",
        offsetEnd: "end start",
        outputStart: "-450%",
        outputEnd: "700%",
        imagePath: "/Image 11.png",
      },
      {
        text: "DOLOR",
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
