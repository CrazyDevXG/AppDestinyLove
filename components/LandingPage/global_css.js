import Script from 'next/script'

export default function LandingStyle(){
    return(
        <>

        <style global jsx>{`
            @import url('../landing/css/landing.css');
            @import url('../landing/css/animate.css');
            @import url('../landing/css/swiper.min.css');
        `}</style>
        
        
                <Script src="../landing/js/functions.js" strategy="beforeInteractive" />
                <Script src="../landing/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
                <Script src="../landing/js/jquery.js" strategy="beforeInteractive" />
                <Script src="../landing/js/swiper.min.js" strategy="beforeInteractive" />
                <Script src="../landing/js/wow.min.js" strategy="beforeInteractive" />    
        </>

    )
}