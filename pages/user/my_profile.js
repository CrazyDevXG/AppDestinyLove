import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { UserStyle } from '@/components/UserPage/Global_Css'
import USidebar from "@/components/UserPage/sidebar"

import Avatar06 from '@/public/assets/images/avatars/avatar-6.jpg'
import AvatarLG6 from '@/public/assets/images/avatars/avatar-lg-6.jpg'
import Post2 from '@/public/assets/images/post/post-2.jpg'
import Reel from '@/public/assets/images/reels/reels-1.jpg'


export default function My_Profile() {

    

  
    return (
      <>
              <Head>
                  <meta charset="UTF-8"/>
                  <title>My Profile | Destiny Love</title>
                  <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>                
              </Head>

            <UserStyle />
            
            <USidebar />


              <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">

<div className="main__inner">

    <div className="py-6 relative">

    <div className="flex md:gap-16 gap-4 max-md:flex-col">
                        <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                            <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900"> 
                                <Image src={Avatar06} alt="" className="w-full h-full absolute object-cover" />
                            </div>
                            <button type="button" className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"> <ion-icon name="camera" class="text-2xl"></ion-icon></button>
                        </div>
                        <div className="max-w-2x flex-1">
                            <h3 className="md:text-xl text-base font-semibold text-black dark:text-white"><span className='font-semibold text-gray-500'><ion-icon name="shield" uk-tooltip="Non-Confirm Account"></ion-icon></span> My Profile</h3>                              
                            <p className="sm:text-sm text-green-600 mt-1 font-normal text-xs"><ion-icon name="flash"></ion-icon>Online</p>    
                                                    
                                <textarea  className="text-sm mt-2 md:font-normal font-light" cols={60} 
                                    defaultValue="I love emotion. I hope you like and feel my photos. 😊"
                                 />
                                
                            <p className="mt-2 space-x-2 text-gray-500 text-sm">
                                My Interests :
                                    • <Link href="#" className="inline-block">Travel</Link> •
                                    <Link href="#" className="inline-block">Music</Link> •
                                    <Link href="#" className="inline-block">Movie</Link> •
                                    
                                </p>                            
                            <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
                                <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
                                    <div>
                                        <p>Photos</p>
                                        <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">22</h3>
                                    </div>
                                    <div>
                                        <p>Video</p>
                                        <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">16</h3>
                                    </div>
                                    <div>
                                        <p>Like</p>
                                        <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">1,542</h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <button type="submit" className="button text-gray-600 bg-slate-200"> 2,000 <small>Credit</small></button>
                                    <button type="button" className="button bg-pink-100 text-pink-600 border border-pink-200">My Gifts</button>                                    
                                    <div> 
                                        <button type="submit" className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon></button>
                                        <div  className="w-[240px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10"> 
                                        <nav> 
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="create-outline"></ion-icon>  Edit Profile </Link>                                             
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-social-outline"></ion-icon>  Share profile </Link> 
                                            <hr />
                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="eye-off-outline"></ion-icon>  Block </Link> 
                                        </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>

    </div>

                <div className="mt-10">
                    <div  uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top">                        
                        <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
                            <ul className="flex gap-2 justify-center border-t dark:border-slate-700"
                                    uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium">                            
                                <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl" name="camera-outline"></ion-icon> Photos  </Link> </li>
                                <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl" name="play-outline"></ion-icon> Video </Link> </li>
                                <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl" name="lock-closed-outline"></ion-icon> Private </Link> </li>
                            </ul>
                        </nav>

                    </div>

        <div id="story_tab" className="uk-switcher">      
            <div>                         

                <div className="mt-8">                  
                    <div className="flex items-center justify-between py-3">
                        <h1 class="text-xl font-bold text-black dark:text-white">Highlight</h1>                        
                    </div>

                    <div className="relative mt-5" tabindex="-1" uk-slider="autoplay: true;finite: true">

                        <div className="overflow-hidden uk-slider-container py-10">
                        
                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]" uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50" uk-lightbox="">
                            <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 ">
                                <Link href="#">
                                <div className="flex flex-col items-center justify-center rounded-lg h-64 border-2 border-dashed border-teal-600">
                                    <ion-icon name="add-circle" class="text-4xl text-teal-900"></ion-icon>
                                    <div className="mt-1 font-semibold">Add New</div>
                                </div>
                                </Link>
                            </li>  
                            <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                <Link href=""  data-caption="Caption">
                                    <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                        <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                            <Image src={AvatarLG6} className="rounded-lg w-full h-full object-cover inset-0" alt=""/>
                                        </div>  
                                    </div>
                                </Link>
                            </li>
                            <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                <Link href={AvatarLG6}  data-caption="Caption">
                                    <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                        <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                            <Image src={AvatarLG6} className="rounded-lg w-full h-full object-cover inset-0" alt=""/>
                                        </div>  
                                    </div>
                                </Link>
                            </li>                          
                            <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                <Link href={AvatarLG6}  data-caption="Caption">
                                    <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                        <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                            <Image src={AvatarLG6} className="rounded-lg w-full h-full object-cover inset-0" alt=""/>
                                        </div>  
                                    </div>
                                </Link>
                            </li>
                            <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                <div className="w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse"></div>
                            </li>
                        </ul>
                    
                        </div>
                    
                        <button type="button" className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                        <button type="button" className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon></button>
                        
                    </div>

                </div>


              

                <div className="mt-8">

                 
                    <div className="flex items-center justify-between py-3">
                        <h1 class="text-xl font-bold text-black dark:text-white">Public</h1>     

                        <Link href="#" className="text-sm font-semibold flex items-center">
                             <ion-icon class="text-lg" name="create-outline"></ion-icon>Edit
                        </Link>
                    </div>

                  
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"  uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">
                        
                        <Link href="#preview_modal">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                            <div className="flex flex-col items-center justify-center rounded-lg h-60 border-2 border-dashed border-teal-600">
                                    <ion-icon name="add-circle" class="text-4xl text-teal-900"></ion-icon>
                                    <div className="mt-1 font-semibold">Add New</div>
                                </div>
                            </div>
                        </Link>                       

                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="chatbubble-ellipses"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="trash-outline"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                      
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="trash-outline"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                      
                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="trash-outline"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="trash-outline"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="trash-outline"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="#preview_modal" uk-toggle="">
                            <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                    <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                        <Image src={Post2} alt="" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                        <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="eye-outline"></ion-icon> </div>
                                            <div className="flex items-center gap-2"> <ion-icon class="text-2xl" name="trash-outline"></ion-icon> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                       
                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                    </div>


                </div>

              
                <div className="flex justify-center my-6">
                    <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                </div>

            </div>


            
           
            <div className="pt-16">


                <div className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2" 
                        uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 14
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>
                      
                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                     
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 24
                                    </div>
                                </div>
                        
                            </div>
                        </Link>
                    </div>

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 32
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 46
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>
                    
                  
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon>16
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>

                   
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                     
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 24
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>
                      
                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 38
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 33
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 62
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>
                      
                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 42
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 18
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>

                    
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    
                        <Link href="#">
                            <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                                
                                <Image className="object-cover w-full h-full" src={Reel} alt=""/>
                                
                                <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                    <div className="flex items-center gap-2.5 text-white p-3">
                                        <ion-icon class="text-2xl" name="play-outline"></ion-icon> 29
                                    </div>
                                </div>
                        
                            </div>
                        </Link>

                    </div>
            
               
                   
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                </div>

               
                <div className="flex justify-center my-6">
                    <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                </div>


            </div>
            




            
            <div className="pt-16">


                <div    className="grid lg:grid-cols-3 grid-cols-2 gap-4"
                        uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">


                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> Monroe Parker </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>

                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white">  Jesse Steeve </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>

                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> Martin Gray </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>
                
                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>

                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> John Michael </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> Alexa stella </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> Monroe Parker </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>

                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white">  Jesse Steeve </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>

                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> Martin Gray </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>
                
                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>

                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                       
                        <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                            <Link href="profile" className="max-md:hidden">
                                <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                            </Link>
                            <div className="flex-1">
                                <Link href="profile"><h4 className="text-black dark:text-white"> John Michael </h4></Link> 
                            </div>

                            
                            <div className="absolute top-0.5 right-0 m-2.5">
                                <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                    <nav> 
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                        <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                        <hr />
                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                    </nav>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                        <Link href="#preview_modal" uk-toggle="">
                            <div className="relative w-full h-48">
                                <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                            </div>
                        </Link>
                
                        
                        <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                            <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                            <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                        </div>

                    </div>

                    
                   
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                </div>

               
                <div className="flex justify-center my-6">
                    <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                </div>

            </div>


        </div>

    </div>
    
</div>


</main>

               
        </>  
    )
}
 