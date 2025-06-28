import {
  Inter, // Bebas, Anton
  Anton, // Nunito, Open Sans
  UnifrakturMaguntia, // Mont, Lora
  Montserrat, // Lora
  Nunito, // Open Sans
  Bebas_Neue, // Nunito
  Lora, // Open Sans, Mont
  Open_Sans, // Lora
  Allura, // (Dianora) Mont
  Beau_Rivage, // (Affair) Inter
} from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const maguntia = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-maguntia",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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

const beauRivage = Beau_Rivage({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-beau",
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
        ${anton.variable}
        ${maguntia.variable}
        ${montserrat.variable}
        ${nunito.variable}
        ${lora.variable}
        ${openSans.variable}
        ${allura.variable}
        ${beauRivage.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
