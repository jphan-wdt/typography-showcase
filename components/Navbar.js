import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTabVisible(false);
    }
    if (sectionId == "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTabVisible(false);
    }
  };

  const [tabVisible, setTabVisible] = useState(false);
  const toggleTab = () => {
    setTabVisible(!tabVisible);
  };

  const [activeMenu, setActiveMenu] = useState("fonts");
  const setMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      <motion.div
        className="fixed top-0 w-full h-40 bg-transparent z-10 flex justify-between items-center text-center text-white"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
      >
        <div
          className="w-40 text-8xl font-bold translate-y-6 hover:cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          ^
        </div>
        <div
          className="w-40 text-6xl font-bold hover:cursor-pointer"
          onClick={toggleTab}
        >
          =
        </div>
      </motion.div>

      <AnimatePresence>
        {tabVisible && (
          <motion.div
            className="h-screen w-full fixed top-0 right-0 bg-black/50 z-10 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: [1, 1, 0],
              transition: {
                duration: 1,
                times: [0, 0.9, 1],
              },
            }}
            onClick={toggleTab}
          >
            <motion.div
              className="h-full w-[50%] absolute top-0 right-0 bg-[var(--color6)] transition-colors duration-300"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute h-40 w-40 top-0 right-0 flex justify-center items-center 
                 text-3xl font-bold text-white hover:cursor-pointer"
                onClick={toggleTab}
              >
                ✕
              </button>

              <div className="h-full w-full flex flex-col">
                <div className="w-full flex pt-16 pl-20">
                  <div
                    className={`w-32 h-16 flex justify-center items-center text-8xl font-bold
                      translate-y-6  hover:cursor-pointer text-white`}
                    onClick={() => scrollToSection("hero")}
                  >
                    ^
                  </div>
                  <div
                    className={`w-32 h-16 flex justify-center items-center font-bold 
                        ${activeMenu === "fonts" ? "bg-white" : " text-white"}  
                        hover:cursor-pointer rounded-full transition-colors`}
                    onClick={() => setMenu("fonts")}
                  >
                    Fonts
                  </div>
                  <div
                    className={`w-32 h-16 flex justify-center items-center font-bold 
                        ${activeMenu === "cars" ? "bg-white" : "text-white"} 
                        hover:cursor-pointer rounded-full transition-colors`}
                    onClick={() => setMenu("cars")}
                  >
                    Cars
                  </div>
                </div>

                {activeMenu === "fonts" && (
                  <motion.div
                    className="w-full h-full flex flex-col gap-1 pl-20 py-10 text-white text-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("allura-majormono")}
                    >
                      <span className="font-allura">Allura</span>
                      <span className="font-majormono tracking-tighter text-3xl">
                        {" "}
                        + major mono display
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("lora-opensans")}
                    >
                      <span className="font-lora tracking-tighter">Lora</span>
                      <span className="font-opensans tracking-tighter">
                        {" "}
                        + Open Sans
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("anton-nunito")}
                    >
                      <span className="font-anton">ANTON</span>
                      <span className="font-nunito tracking-tighter">
                        {" "}
                        + Nunito
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("mont-lora")}
                    >
                      <span className="font-montserrat tracking-tighter">
                        Montserrat
                      </span>
                      <span className="font-lora tracking-tighter">
                        {" "}
                        + Lora
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("caveat-majormono")}
                    >
                      <span className="font-caveat text-5xl tracking-tighter">
                        Caveat
                      </span>
                      <span className="font-majormono tracking-tighter text-3xl">
                        {" "}
                        + major mono display
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("luxurious-opensans")}
                    >
                      <span className="font-luxurious text-6xl">Luxurious</span>
                      <span className="font-opensans tracking-tighter text-3xl">
                        {" "}
                        + OPEN SANS
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("dangrek-nunito")}
                    >
                      <span className="font-dangrek">Dangrek</span>
                      <span className="font-nunito tracking-tighter text-3xl">
                        {" "}
                        + NUNITO
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("rocksalt-playfair")}
                    >
                      <span className="font-rocksalt text-3xl">Rock Salt</span>
                      <span className="font-playfair tracking-tighter">
                        {" "}
                        + PLAYFAIR DISPLAY
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("allura-mont")}
                    >
                      <span className="font-allura">Allura</span>
                      <span className="font-montserrat tracking-tighter">
                        {" "}
                        + Montserrat
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("lora-forum")}
                    >
                      <span className="font-lora tracking-tighter">Lora</span>
                      <span className="font-forum tracking-tighter">
                        {" "}
                        + Forum
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("ballet-forum")}
                    >
                      <span className="font-ballet text-5xl">Ballet</span>
                      <span className="font-forum tracking-tighter">
                        {" "}
                        + FORUM
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("majormono-inter")}
                    >
                      <span className="font-majormono tracking-tighter">
                        major mono display
                      </span>
                      <span className="font tracking-tighter"> + INTER</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("anton-caveat")}
                    >
                      <span className="font-anton">ANTON</span>
                      <span className="font-caveat tracking-tighter text-5xl">
                        {" "}
                        + Caveat
                      </span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("mont-rocksalt")}
                    >
                      <span className="font-montserrat tracking-tighter">
                        MONTSERRAT
                      </span>
                      <span className="font-rocksalt tracking-tighter">
                        {" "}
                        + rock salt
                      </span>
                    </div>
                  </motion.div>
                )}
                {activeMenu === "cars" && (
                  <motion.div
                    className="w-full h-full flex flex-col gap-1 pl-20 py-10 text-white text-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("allura-majormono")}
                    >
                      <span className="font-lora">Porsche 911 GT2 RS</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("lora-opensans")}
                    >
                      <span className="font-lora">Ford GT</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("anton-nunito")}
                    >
                      <span className="font-lora">Aston Martin Valhalla</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("mont-lora")}
                    >
                      <span className="font-lora">Ferrari LaFerrari</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("caveat-majormono")}
                    >
                      <span className="font-lora">Lotus Evija</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("luxurious-opensans")}
                    >
                      <span className="font-lora">Audi R8 V10</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("dangrek-nunito")}
                    >
                      <span className="font-lora">Ferrari 458 Italia</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("rocksalt-playfair")}
                    >
                      <span className="font-lora">Acura NSX</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("allura-mont")}
                    >
                      <span className="font-lora">Buggati Chiron</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("lora-forum")}
                    >
                      <span className="font-lora">Porsche 911 GT2 RS</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("ballet-forum")}
                    >
                      <span className="font-lora">Lotus Evija</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("majormono-inter")}
                    >
                      <span className="font-lora">Aston Martin Valhalla</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("anton-caveat")}
                    >
                      <span className="font-lora">Ferrari LaFerrari</span>
                    </div>
                    <div
                      className="hover:cursor-pointer hover:pl-4 transition-all"
                      onClick={() => scrollToSection("mont-rocksalt")}
                    >
                      <span className="font-lora">Buggati Chiron</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
