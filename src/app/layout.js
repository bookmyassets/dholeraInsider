import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Script from "next/script";
import Whatsapp from "./components/whatsapp";

const poppins = Poppins({
  weight:'400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

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
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-XFRYX35W0G"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || []; 
                      function gtag(){ dataLayer.push(arguments); }
                      gtag('js', new Date());
                      gtag('config', 'G-XFRYX35W0G'); 
                    `,
          }}
        />
      </head>

      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
