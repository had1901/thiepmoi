import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const myFont = localFont({
  src: '../../public/font/FC-Brema.otf',
  subsets: ["latin"],
})

// const fontName = localFont({
//   variable: "--font-name",
//   src: '../../public/font/LF-Aretha-Bridge.ttf',
//   subsets: ["latin"],
// })

// const fontName = localFont({
//   variable: "--font-name",
//   src: '../../public/font/type.ttf',
//   subsets: ["latin"],
// })

const fontName = localFont({
  variable: "--font-name",
  src: '../../public/font/pro.ttf',
  subsets: ["latin"],
})

export const metadata = {
  title: "Thiệp mời đám cưới",
  description: "Lời mời đặc biệt đến dự lễ thành hôn của chúng tôi",
  openGraph: {
    title: "Thiệp mời đám cưới",
    description: "Lời mời đặc biệt đến dự lễ thành hôn của chúng tôi",
    url: "https://thiepmoi-pearl.vercel.app/",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "https://thiepmoi-pearl.vercel.app/img/humbnail.png", // ảnh preview
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Thumbnail",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} ${fontName.variable} antialiased h-[5000px] bg-[#fff9ed]`}
      >
        {children}
      </body>
    </html>
  );
}
