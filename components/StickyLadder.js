import Image from "next/image";
import img from "@/public/Image 5.png";

export default function StickyLadder() {
  return (
    <div className="relative h-[420vh] bg-yellow-600">
      <div className="sticky top-0 h-screen text-white">TITLE</div>
      <div>
        {/* <Image
          src={img}
          width={1600}
          height={900}
          alt={`Image `}
          className="rounded-xl relative h-[20vh] w-[40vw] overflow-hidden"
        /> */}
      </div>

      <div className="sticky top-[10vh] h-[90vh] bg-green-400">
        <div className="flex justify-around items-center h-full w-full ">
          <div className="flex flex-col justify-around items-center basis-1/5 h-full w-full">
            <div>NUMBER HERE</div>
            <div>TITLE</div>
          </div>

          <div className="flex flex-col justify-end h-full">
            <div className="flex items-center justify-between basis-24">
              <div>lorem</div>
              <div>ipsum</div>
              <div>dolor</div>
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

      <div className="bg-red-400 sticky top-[10vh] h-[90vh] mt-[5vh]">
        <div className=" h-full w-full flex justify-around items-center">
          <div className="h-full w-full basis-1/5 flex flex-col justify-around items-center ">
            <div>NUMBER HERE</div>
            <div>TITLE</div>
          </div>

          <div className="h-full flex flex-col justify-end">
            <div className="flex basis-24 items-center justify-between">
              <div>lorem</div>
              <div>ipsum</div>
              <div>dolor</div>
            </div>
            <Image
              src={img}
              width={1600}
              height={900}
              alt={`Image `}
              className="h-[80vh] bottom-0 right-0 w-auto overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-purple-400 sticky top-[10vh] h-[90vh] mt-[5vh]">
        <div className=" h-full w-full flex justify-around items-center">
          <div className="h-full w-full basis-1/5 flex flex-col justify-around items-center ">
            <div>NUMBER HERE</div>
            <div>TITLE</div>
          </div>

          <div className="h-full flex flex-col justify-end">
            <div className="flex basis-24 items-center justify-between">
              <div>lorem</div>
              <div>ipsum</div>
              <div>dolor</div>
            </div>
            <Image
              src={img}
              width={1600}
              height={900}
              alt={`Image `}
              className="h-[80vh] bottom-0 right-0 w-auto overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
