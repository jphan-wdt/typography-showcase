import {
  Inter, // Bebas, Anton P2
  Anton, // Nunito, Open Sans P1
  Montserrat, // Lora P1
  Nunito, // Open Sans P1
  Lora, // Open Sans, Mont P1 P2
  Open_Sans, // Lora P1
  Allura, // (Dianora) Mont P1
  Caveat,
  Luxurious_Script,
  Babylonica,
  Playfair_Display,
  Dangrek,
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
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const nunito = Nunito({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const lora = Lora({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const openSans = Open_Sans({
  weight: "variable",
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
  weight: "variable",
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

const babylonica = Babylonica({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-babylonica",
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

export const metadata = {
  title: "Gallery",
  description: "Picture gallery",
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
        ${babylonica.variable} // script
        ${playfair.variable} // serif
        ${dangrek.variable}`} // script/sans
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
