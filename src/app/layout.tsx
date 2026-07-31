import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/site/header";
import { CartDrawer } from "@/components/site/cart-drawer";
import { Footer } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/language-context";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lunbyte — Estudio de videojuegos y apps móviles",
  description:
    "Especialistas en el desarrollo de aplicaciones móviles y videojuegos. Del concepto al lanzamiento: Unity, Unreal Engine, gamificación corporativa e integraciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body suppressHydrationWarning className="grain antialiased">
        <ClientBody>
          <LanguageProvider> 
            <CartProvider>
              <Header />
              <main id="top">{children}</main>
              <Footer />
              <CartDrawer />
              <Toaster />
            </CartProvider>
          </LanguageProvider>
        </ClientBody>
      </body>
    </html>
  );
}
