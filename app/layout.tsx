import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "../components/common/theme-provider";
// import Meteors from "@/components/ui/meteors";
// import ShineBorder from "@/components/ui/shine-border";
import Particles from "@/components/ui/particles";
import Tabbar from "@/components/common/tabbar";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const poppins = localFont({
  src: "./assets/fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Braya Cheat",
  description: "Modern Portolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid place-items-center min-h-screen p-3 mx-auto overflow-hidden md:w-[900px] w-full">
            <div className="pb-20">
              <TooltipProvider>
                {children}
                <Tabbar />
              </TooltipProvider>
            </div>

            {/* bg effect */}
            <Particles className="fixed bottom-1/2" />
            <Particles className="fixed bottom-0" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
