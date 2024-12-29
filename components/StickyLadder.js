import Image from "next/image";
import img from "@/public/Image 5.png";

export default function StickyLadder() {
  return (
    <div className="relative h-[520vh] w-full bg-green-300">
      <div className="sticky top-0 h-[200vh] bg-red-300 text-white">
        TITLE
        <div className="relative h-full m-16 bg-red-600"></div>
      </div>

      <div className="sticky top-[10vh] h-[90vh] bg-[#e0e1dd]">
        <div className="flex justify-around items-center h-full w-full ">
          <div className="basis-1/5 h-full w-full font-anton text-9xl text-[#0c4d1e]">
            <div className="mt-8">01.</div>
            <div className="mt-[18rem] text-center">TITLE</div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div
              className="flex items-center justify-between basis-24
                        font-anton tracking-widest text-4xl text-[#ffbf00]"
            >
              <div>LOREM</div>
              <div>IPSUM</div>
              <div>DOLOR</div>
            </div>
            <Image
              src={img}
              width={1600}
              height={900}
              alt={`Image `}
              className="bottom-0 right-0 h-[80vh] w-auto overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>

      <div className="sticky top-[10vh] h-[90vh] bg-[#0c1129] mt-[10vh]">
        <div className="flex justify-around items-center h-full w-full ">
          <div className="basis-1/5 h-full w-full font-anton text-9xl text-[#e0e1dd]">
            <div className="mt-8">02.</div>
            <div className="mt-[18rem] text-center">TITLE</div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div
              className="flex items-center justify-between basis-24
                        font-anton tracking-widest text-4xl text-[#d1a877]"
            >
              <div>LOREM</div>
              <div>IPSUM</div>
              <div>DOLOR</div>
            </div>
            <Image
              src={img}
              width={1600}
              height={900}
              alt={`Image `}
              className="bottom-0 right-0 h-[80vh] w-auto rounded-xl overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>

      <div className="sticky top-[10vh] h-[90vh] bg-[#212121] mt-[10vh]">
        <div className="flex justify-around items-center h-full w-full ">
          <div className="basis-1/5 h-full w-full font-anton text-9xl text-[#661111]">
            <div className="mt-8">03.</div>
            <div className="mt-[18rem] text-center">TITLE</div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div
              className="flex items-center justify-between basis-24
                        font-anton tracking-widest text-4xl text-[#e0e1dd]"
            >
              <div>LOREM</div>
              <div>IPSUM</div>
              <div>DOLOR</div>
            </div>
            <Image
              src={img}
              width={1600}
              height={900}
              alt={`Image `}
              className="bottom-0 right-0 h-[80vh] w-auto rounded-xl overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
