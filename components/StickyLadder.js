import Image from "next/image";
import img from "@/public/Image 5.png";

export default function StickyLadder() {
  return (
    <div className="h-[400vh] relative bg-yellow-600">
      <div className="h-screen sticky top-0">TITLE</div>
      <div className="bg-green-400 sticky top-[10vh] h-[90vh]">
        <Image
          src={img}
          alt={`Image `}
          className="rounded-xl relative h-[20vh] w-[40vw] overflow-hidden"
        />
      </div>
      <div className="bg-red-400 sticky top-[10vh] h-[90vh]">
        <Image src={img} alt={`Image`} className="rounded-xl relative" />
      </div>
      <div className="bg-purple-400 sticky top-[10vh] h-[90vh]">
        <Image src={img} alt={`Image`} className="rounded-xl relative" />
      </div>
    </div>
  );
}
