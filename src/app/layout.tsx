import GameProvider from "@/context/GameContext";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import Header from "@/components/Header";

const press_start_2p = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Pacman",
  description: "Code challenge for i.e.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${press_start_2p.className}`}>
        <Header></Header>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
