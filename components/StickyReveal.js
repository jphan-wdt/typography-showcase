import Image from "next/image";
import images from "@/components/images";

export default function StickyReveal() {
  // bg-[#e0e1dd] text-[#0c4d1e] text-[#ffbf00]
  // bg-[#0c1129] text-[#e0e1dd] text-[#d1a877]
  // bg-[#212121] text-[#651612] text-[#e0e1dd]
  const sections = [
    {
      bgColour: "bg-[#e0e1dd]",
      titleColour: "text-[#0c4d1e]",
      textColour: "text-[#ffbf00]",
      font: "font-serif",
      imageSrc: images[6].src,
      title: "TITLE 1",
    },
    {
      bgColour: "bg-[#212121]",
      titleColour: "text-[#651612]",
      textColour: "text-[#e0e1dd]",
      font: "font-custom",
      imageSrc: images[13].src,
      title: "TITLE 3",
    },
    {
      bgColour: "bg-[#0c1129]",
      titleColour: "text-[#e0e1dd]",
      textColour: "text-[#d1a877]",
      font: "font-custom2",
      imageSrc: images[10].src,
      title: "Title 2",
    },
  ];
  return (
    <div className={`relative h-[320vh] w-full flow-root`}>
      <div className="sticky top-0 h-[10vh] bg-black/5 border-black border-b-2 backdrop-blur-3xl z-10">
        TITLE
      </div>
      {sections.map((section, index) => (
        <div
          className={`sticky top-[10vh] h-[90vh] mt-[10vh] px-10 ${section.bgColour} border-black border-t-2 overflow-hidden `}
          key={index}
        >
          <div className="relative flex h-full w-full">
            <div
              className={`h-full basis-2/5 flex flex-col justify-between pt-10 text-9xl ${section.titleColour} ${section.font}`}
            >
              <div className="">{`0${index + 1}.`}</div>
              <div className="pb-72 pr-20">{section.title}</div>
            </div>

            <div className="flex flex-col">
              <div
                className={`flex justify-between py-10
                        ${section.font} tracking-widest text-4xl ${section.textColour}`}
              >
                <div>LOREM</div>
                <div>IPSUM</div>
                <div>DOLOR</div>
              </div>

              <Image
                src={section.imageSrc}
                width={1600}
                height={900}
                alt={`Image`}
                className="h-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
