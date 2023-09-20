import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

           <Script src="../assets/js/uikit.min.js" strategy="beforeInteractive" />
            <Script src="../assets/js/script.js" strategy="beforeInteractive" />
            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="beforeInteractive" />
            <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" strategy="beforeInteractive" />
            

            <Script src="../landing/js/functions.js" strategy="beforeInteractive" />
                <Script src="../landing/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
                <Script src="../landing/js/jquery.js" strategy="beforeInteractive" />
                <Script src="../landing/js/swiper.min.js" strategy="beforeInteractive" />
                <Script src="../landing/js/wow.min.js" strategy="beforeInteractive" />    
   
      </body>
    </Html>
  )
}
