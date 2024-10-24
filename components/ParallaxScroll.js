import ParallaxText from "./ParallaxText";

export default function ParallaxScroll() {
    return(
        <div>
                <ParallaxText
                    text="VISION"
                    inputStart={0.05}
                    offsetStart="start start"
                    outputStart="-50%"
                    top={true}
                    imagePath="/Image 10.png"
                />
                <ParallaxText
                    text="STYLE"
                    inputStart={0.3}
                    offsetStart="start end"
                    outputStart="-320%"
                    imagePath="/Image 11.png"
                />
                <ParallaxText
                    text="DESIGN"
                    inputStart={0.3}
                    offsetStart="start end"
                    outputStart="-320%"
                    imagePath="/Image 7.png"
                />
        </div>
    );
}