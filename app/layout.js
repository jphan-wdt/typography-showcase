import {
  Inter, // Bebas, Anton P2
  Anton, // Nunito, Open Sans P1
  UnifrakturMaguntia, // Mont, Lora
  Montserrat, // Lora P1
  Nunito, // Open Sans P1
  Lora, // Open Sans, Mont P1 P2
  Open_Sans, // Lora P1
  Allura, // (Dianora) Mont P1
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
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
