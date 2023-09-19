import Image from 'next/image'
import Link from 'next/link'

import Logo_Applestore from '@/public/landing/images/app/apple.png'
import Logo_playstore from '@/public/landing/images/app/playstore.png'
import People_chat from '@/public/landing/images/app/people-using-app-chat.png'

export default function AppDownload(){
    return (

        <>
         <section className="app-section bg-img">
        <div className="container">
            <div className="section-wrapper padding-tb">            
                <div className="app-content">
                    <h4>Download App Now</h4>
                    <h2>Find your new relationship.</h2>
                    <p>More than million people the world already shared the same experience 
                    <br/>Joining us today!</p>
                    <ul className="app-download d-flex flex-wrap">
                        <li><Link href="#" className="d-flex flex-wrap align-items-center">
                                <div className="app-thumb">
                                    <Image src={Logo_Applestore} alt="apple"/>
                                </div>
                                <div className="app-content">
                                    <p>Available on the</p>
                                    <h4>App Store</h4>
                                </div>
                            </Link></li>
                        <li className="d-inline-block"><Link href="#" className="d-flex flex-wrap align-items-center">
                                <div className="app-thumb">
                                    <Image src={Logo_playstore} alt="playstore"/>
                                </div>
                                <div className="app-content">
                                    <p>Available on the</p>
                                    <h4>Google Play</h4>
                                </div>
                            </Link></li>
                    </ul>

                </div>
                <div className="mobile-app">
                    <Image src={People_chat} alt="People_chat"/>
                </div>                               
            </div>
        </div>
    </section>
        </>
    )
}