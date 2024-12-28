import { Anton, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const custom = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-custom",
});

const custom2 = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-custom2",
});

export const metadata = {
  title: "Gallery",
  description: "Picture gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${custom.variable} ${custom2.variable}`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
