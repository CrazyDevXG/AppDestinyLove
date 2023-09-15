import Image from 'next/image'
import Link from 'next/link'
import { FaUserAlt, FaRegHeart, FaBars, FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa"

import Flag_USA from '@/public/landing/images/flag/usa.png'
import Flag_CN from '@/public/landing/images/flag/china.png'
import Flag_TH from '@/public/landing/images/flag/thailand.png'

import Logo from '@/public/landing/images/logo/logo.png'

    export default function Navbar(){
        return(
            <>
            <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-area">
                        <ul className="left">
                            <li>
                               <Link href="#"><i><FaTwitterSquare /></i></Link>                            
                            </li>
                            <li>
                                <Link href="#"><i><FaFacebookSquare /></i></Link>
                            </li>
                            <li>
                                <Link href="#"><i><FaInstagram /></i></Link>
                            </li>
                        </ul>
                        <ul className="social-icons d-flex align-items-center">        
                             <li>
                                <div className="dropdown m-1">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false">
                                    <Image src={Flag_USA}  alt="Flag-USA" width={18} /> ENG
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">                                    
                                    <li>
                                        <a className="dropdown-item" href="#">
                                        <Image src={Flag_TH}  alt="Flag-thai" /> TH
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                        <Image src={Flag_CN}  alt="Flag-china" /> CN
                                        </a>
                                    </li>
                                    </ul>
                                </div>
    
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link href="/">
                                <Image src={Logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="menu-area">
                            <ul className="menu">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
    
                                <li>
                                    <Link href="#">Features</Link>
                                    <ul className="submenu">
                                        <li><Link href="/members">All Members</Link></li>
                                        <li><Link href="/profile">My Profile</Link></li>                                       
                                        <li><Link href="/pricing-plan">Pricing Plan</Link></li>     
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/community">Community</Link>
                                </li>
                               
                            </ul>
                            <Link href="/sign_in" className="login"><i><FaUserAlt /></i> <span>SIGN IN</span> </Link>
                            <Link href="/register" className="signup"><i><FaRegHeart /></i> <span>REGISTER</span> </Link>
                               
                            <div className="header-bar d-lg-none">
                                <h4><FaBars /></h4>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>        
        )
    }
