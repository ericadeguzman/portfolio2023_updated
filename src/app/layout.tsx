import "./globals.css";
import type { Metadata } from "next";
import {
  Bungee,
  Press_Start_2P,
  Plus_Jakarta_Sans,
  Sacramento,
  Syncopate,
  Jost,
} from "next/font/google";
import "./main.scss";
import MusicPlayerPersistent from "./components/MusicPlayerPersistent";

const JostFont = Jost({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Jost",
});
const SacramentoFont = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Sacramento",
});
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pressStartFont",
});
const SyncoFont = Syncopate({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-synco",
});
const bungeeFont = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungeeFont",
});

const PlusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-PlusJakarta",
});

export const metadata: Metadata = {
  title: "Erica 2023",
  description: "Erica De Guzman's 2023 Porfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${bungeeFont.variable} ${PlusJakarta.variable} ${SacramentoFont.variable} ${SyncoFont.variable}  ${JostFont.variable} bg-black`}
      >
        {children}
        <MusicPlayerPersistent />
      </body>
    </html>
  );
}
