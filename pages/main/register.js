import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { FaUsers } from 'react-icons/fa'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import LandingStyle from '@/components/LandingPage/global_css'
import Navbar from "@/components/LandingPage/nav_bar"        
import Footer from "@/components/LandingPage/footer" 


import img_banner01 from '@/public/landing/images/banner/Lover_2d.png'
import img_google from '@/public/landing/images/banner/google.png'


export default function Home() {


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
                      <div className="row m-3">
                          <div className="col-lg-12">
                              <div className="banner-content">
                                  <div className="intro-form">
                                      <div className="intro-form-inner">
                                          <h3>Make a Destiny Love</h3>
                                          <p>Serious Dating or Enjoy With Your Perfect
                                              Match is Just a Click Away.</p>
                                          <form action="/" className="banner-form">
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
                                              
                                              <button className="btn btn-block">Find Your Chance</button>
                                          </form>  
                                      </div>
                                  </div>
                              </div>
                          </div>                          
                      </div>
                  
              </div>              
          </section>

                <Footer />
                </>
      )
}