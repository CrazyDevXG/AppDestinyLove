
import Link from 'next/link'



    export default function Footer(){
        return(
            <>      
   
    <footer className="footer-section">
        
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-bottom-content text-center">
                            <ul className="footer-menu"> 
                            <Link href="#">• About Us</Link>
                             <Link href="#">• Terms and Conditions</Link>
                             <Link href="#">• Privacy Policy</Link>
                            </ul>
                            <p>&copy; Copyright 2023 <Link href="/">Destiny Love</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
            </>
        )
    }