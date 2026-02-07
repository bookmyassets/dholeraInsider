import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Script from "next/script";
import Whatsapp from "./components/whatsapp";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Clarity */}
        <Script type="text/javascript" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "tj7p027fn5");
`}
        </Script>
        {/* tag manager */}

        <Script type="text/javascript">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4MC4RPF');
           `}
        </Script>
        {/* GTM */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-XFRYX35W0G"
        />

        {/* Analytics */}
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
        {/* tag manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CXXQ9DJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
