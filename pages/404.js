import Head from 'next/head'
import Link from 'next/link'



export default function Eror404() {  
    return (
      <>
              <Head>
                  <meta charSet="UTF-8"/>
                  <title>Eror 404 | Destiny Love</title>
                  <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>  
                                
              </Head>
            

            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                    <h1>ERROR</h1>
                    <h2>Page not found</h2>
                </div>
                <Link href="./">Back Home</Link>
                </div>
            </div>
    </>
    )
}