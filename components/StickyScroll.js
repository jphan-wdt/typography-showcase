import Image from "next/image";

import image1 from "@/public/Image 14.png"

export default function StickyScroll() {
    return(
        <div className="relative h-auto bg-6">
            <div className="h-auto w-full flex">

                <div className="h-[60vh] w-1/2 flex flex-col text-white font-extrabold
                sticky top-0">
                    <div>COL 1</div>
                    
                </div>

                <div className="h-auto w-1/2 flex flex-col">
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
                        <Image
                            src={image1}
                            objectFit="cover"
                            alt="1"
                            className="rounded-xl"
                        />
                </div>
                    

                
            </div>
        </div>
    );
}