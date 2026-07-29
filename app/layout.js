/* eslint-disable @next/next/next-script-for-ga -- GA4 is existing markup, and GTM uses a custom deferred loader. */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cuts by Haris | Barbershop in Saskatoon",
  description: "Premium fades, beard work, and sharp lineups in Saskatoon.",
  verification: {
    google: "ltkTbM_5bnx899563B0pMusEHiqMeFrvR_-VKuCka7w",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
      `,
    }}
  />

  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-NTSTRV98RD"
  ></script>

  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NTSTRV98RD');
      `,
    }}
  />

  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          var gtmLoaded = false;
          function loadGTM() {
            if (gtmLoaded) return;
            gtmLoaded = true;
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVN36VP4');
          }
          window.addEventListener('load', loadGTM);
          ['scroll','click','touchstart','keydown'].forEach(function(evt){
            window.addEventListener(evt, loadGTM, { once: true, passive: true });
          });
          setTimeout(loadGTM, 4000);
        })();
      `,
    }}
  />
</head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVN36VP4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
