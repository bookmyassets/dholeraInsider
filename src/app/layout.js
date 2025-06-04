import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

import ThemeClientProvider from "./components/ThemeProvider";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dholera Insider",
  description: "Dholera Smart City",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <ThemeClientProvider>
          <Header />
          {children}
          <Footer/>
        </ThemeClientProvider>
      </body>
    </html>
  );
}