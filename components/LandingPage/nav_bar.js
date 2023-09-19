import Image from 'next/image'
import Link from 'next/link'
import { FaUserAlt, FaRegHeart, FaUserCircle, } from "react-icons/fa"
import navtURL from '../Utility/navURL'

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
                        <ul className="d-flex align-items-center">        
                             <li>
                                <div className="dropdown m-3 px-3">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false">
                                    <Image src={Flag_USA}  alt="Flag-USA" width={18} /> ENG
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">                                    
                                    <li>
                                        <a className="dropdown-item" href="#">
                                        <Image src={Flag_TH} width={24}  alt="Flag-thai" /> TH
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                        <Image src={Flag_CN} width={24} alt="Flag-china" /> CN
                                        </a>
                                    </li>
                                    </ul>
                                </div>    
                             </li>
                        </ul>
                            
                            <Link href={navtURL("/sign_in")} className="login"><i><FaUserAlt /></i> <span>SIGN IN</span> </Link>
                            <Link href={navtURL("main/register")} className="signup"><i><FaRegHeart /></i> <span>REGISTER</span> </Link>
                               
                            <div className="d-lg-none">
                                <a href=''><h3><FaUserCircle /></h3></a>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>        
        )
    }
