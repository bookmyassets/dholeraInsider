import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

import ThemeClientProvider from "./components/ThemeProvider";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Dholera Insider",
  description: "Dholera Smart City",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script type="text/javascript">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "tj7p027fn5");
`}
        </Script>
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
