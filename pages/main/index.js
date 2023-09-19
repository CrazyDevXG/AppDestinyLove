import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { FaUsers } from 'react-icons/fa'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import LandingStyle from '@/components/LandingPage/global_css'
import Navbar from "@/components/LandingPage/nav_bar"
import AppDownload from '@/components/LandingPage/app_download'        
import Footer from "@/components/LandingPage/footer" 


import img_banner01 from '@/public/landing/images/banner/Lover_2d.png'
import img_google from '@/public/landing/images/banner/google.png'
import img_shapes01 from '@/public/landing/images/banner/banner-shapes/01.png'
import img_shapes02 from '@/public/landing/images/banner/banner-shapes/02.png'

import img_member01 from '@/public/landing/images/member/01.jpg'
import img_member03 from '@/public/landing/images/member/03.jpg'
import img_member05 from '@/public/landing/images/member/05.jpg'
import img_member07 from '@/public/landing/images/member/07.jpg'

export default function Home() {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

      

  return (
    <>    
            <Head>
                <meta charset="UTF-8"/>
                <title>Destiny Love</title>
                <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>                
            </Head>

            <LandingStyle />
            
            <Navbar />

            <section className="banner-section">
              <div className="container">
                  <div className="section-wrapper">
                      <div className="row align-items-end">
                          <div className="col-lg-6">
                              <div className="banner-content">
                                  <div className="intro-form">
                                      <div className="intro-form-inner">
                                          <h3>Make a Destiny Love</h3>
                                          <p>Serious Dating or Enjoy With Your Perfect
                                              Match is Just a Click Away.</p>
                                          <form action="/main/register" className="banner-form">
                                              <div className="gender">
                                                  <label for="gender" className="left">I am a </label>
                                                  <div className="custom-select right">
                                                      <select name="gender" id="gender" className="">
                                                          <option value="0">Select Gender</option>
                                                          <option value="1">Male</option>
                                                          <option value="2">Female</option>
                                                          <option value="3">Others</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="person">
                                                  <label for="gender-two" className="left">Looking for</label>
                                                  <div className="custom-select right">
                                                      <select name="gender" id="gender-two" className="">
                                                          <option value="0">Select Gender</option>
                                                          <option value="1">Male</option>
                                                          <option value="2">Female</option>
                                                          <option value="3">Others</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="age">
                                                  <label for="age" className="left">Between Age</label>
                                                  <div className="right d-flex justify-content-between">
                                                      <div className="custom-select">
                                                          <select name="age-start" id="age">
                                                              <option value="1">18</option>
                                                              <option value="2">19</option>
                                                              <option value="3">20</option>
                                                              <option value="4">21</option>
                                                              <option value="5">22</option>
                                                              <option value="6">23</option>
                                                              <option value="7">24</option>
                                                              <option value="8">25</option>
                                                              <option value="9">26</option>
                                                              <option value="10">27</option>
                                                              <option value="11">28</option>
                                                              <option value="13">29</option>
                                                              <option value="14">30</option>
                                                          </select>
                                                      </div>

                                                      <div className="custom-select">
                                                          <select name="age-end" id="age-two">
                                                              <option value="1">18</option>
                                                              <option value="2">19</option>
                                                              <option value="3">20</option>
                                                              <option value="4">21</option>
                                                              <option value="5">22</option>
                                                              <option value="6">23</option>
                                                              <option value="7">24</option>
                                                              <option value="8">25</option>
                                                              <option value="9">26</option>
                                                              <option value="10">27</option>
                                                              <option value="11">28</option>
                                                              <option value="13">29</option>
                                                              <option value="14">30</option>
                                                          </select>
                                                      </div>
                                                  </div>

                                              </div>
                                              <div className="city">
                                                  <label for="city" className="left">Location</label>
                                                  <input className="right" type="text" id="city" placeholder="Your City Name.."/>
                                              </div>
                                              <button className="">Find Your Chance</button>

                                          </form>
                                          <ul className="social-list">
                                              <li className="google">
                                                <Link href="#">
                                                      <Image src={img_google}  alt="logo-google"/><span> Continue with google</span>
                                                </Link></li>
                                              
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="banner-thumb">
                                  <Image src={img_banner01} alt="img"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="all-shapes">
                  <Image src={img_shapes01} alt="shape01" className="banner-shape shape-1"/>
                  <Image src={img_shapes02} alt="shape02" className="banner-shape shape-2"/>
                 
              </div>
          </section>
      
    <section className="member-section padding-tb">
        <div className="container">
            <div className="section-header">
                <h4 className="theme-color">Meet New People Today!</h4>
                <h2>Active Members</h2>
            </div>
            <div className="section-wrapper">
                <div className="row justify-content-center g-3 g-md-4">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="lab-item member-item style-1">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <Image src={img_member01} alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><Link href="profile">Andrea Guido</Link> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="lab-item member-item style-1">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <Image src={img_member07} alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><Link href="profile">Gihan-Fernando</Link></h6>
                                    <p>Active 2 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="lab-item member-item style-1">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <Image src={img_member05}  alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><Link href="profile">Sweet Admin</Link></h6>
                                    <p>Active 3 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="lab-item member-item style-1">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <Image src={img_member03}  alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><Link href="profile">Gyan-Baffour</Link></h6>
                                    <p>Active 5 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="lab-item member-item style-1">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <Image src={img_member07}  alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><Link href="profile">Teszt Eleking</Link></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="lab-item member-item style-1">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <Image src={img_member03}  alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><Link href="profile">Zeahra Guido</Link>
                                    </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member-button-group d-flex flex-wrap justify-content-center">
                    <Link href="login" className="lab-btn"><i><FaUsers /></i> <span> Our Community</span></Link>
                </div>
            </div>
        </div>
    </section>

    <AppDownload />

    <Footer />

    </>
  )
}
