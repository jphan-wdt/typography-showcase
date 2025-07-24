import {
  Inter,
  Allura, // ll
  Major_Mono_Display, // ll
  Lora, // ll
  Open_Sans, // ll
  Anton, // l
  Nunito, // ll
  Montserrat, // ll
  Caveat, // l
  Luxurious_Script, // l
  Dangrek, // l
  Rock_Salt, // l
  Playfair_Display, // l
  Ballet, // l
  Forum, // l
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const montserrat = Montserrat({
  weight: ["100", "300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const lora = Lora({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-allura",
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const luxurious = Luxurious_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-luxurious",
});

const rocksalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rocksalt",
});

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dangrek = Dangrek({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dangrek",
});

const majorMono = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-majormono",
});

const ballet = Ballet({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ballet",
});

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-forum",
});

export const metadata = {
  title: "Type and Motion",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${anton.variable} // script
        ${montserrat.variable} // sans
        ${nunito.variable} // sans round
        ${lora.variable} // serif
        ${openSans.variable} // sans
        ${allura.variable} // script
        ${caveat.variable} // script
        ${luxurious.variable} // script
        ${rocksalt.variable} // script
        ${playfair.variable} // serif
        ${dangrek.variable}
        ${majorMono.variable}
        ${ballet.variable}
        ${forum.variable}`} // script/sans
    >
      <body className={`${inter.className} antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
