import Script from 'next/script'


export function UserStyle(){
    return(
        <>
            <style global jsx>{`
                    @import url('../assets/css/style.css');
                    @import url('../assets/css/tailwind.css');
                    @import url('../styles/globals.css')           
            `}</style>


            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="beforeInteractive" />
            <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" strategy="beforeInteractive" />

            <Script src="../assets/js/uikit.min.js" strategy="beforeInteractive" />
            <Script src="../assets/js/script.js" strategy="beforeInteractive" />
        </>    
    
    )
}