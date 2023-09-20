import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Avatar02 from '@/public/assets/images/avatars/avatar-2.jpg'
import { UserStyle } from '@/components/UserPage/Global_Css'
import USidebar from "@/components/UserPage/sidebar"  

export default function Matching() {




  
    return (
      <>
              <Head>
                  <meta charset="UTF-8"/>
                  <title>Matching | Destiny Love</title>
                  <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>                
              </Head>

        <UserStyle />
            
        <USidebar />

        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
            <div className="max-w-3xl p-6 mx-auto">                
                <div className="page__heading">
                    <Link href="#">
                        <ion-icon name="chevron-back-outline"></ion-icon> Back
                    </Link>
                    <h1> Destiny Matching </h1>
                </div>                

                <nav className="border-b dark:border-slate-700" uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 ;  animation: uk-animation-slide-top">                  
                    <ul uk-tab className="flex gap-5 text-sm text-center text-gray-600 capitalize font-semibold -mb-px dark:text-white/80"  
                        uk-switcher="connect: #ttabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">                        
                       <li> <Link href="#" className="inline-block py-5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> Someone like </Link> </li>
                       <li> <Link href="#" className="inline-block py-5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> I like </Link> </li>
                       <li> <Link href="#" className="inline-block py-5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> Interest match </Link> </li>
                   
                   </ul> 
                </nav>

                <div className="uk-switcher mt-10" id="ttabs">                       
                    <div>
                        <div className="grid sm:grid-cols-2 gap-2 mt-5 mb-2 text-xs font-normal text-gray-500 dark:text-white/80" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">

                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> Jesse Steeve</h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>

                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> John Michael</h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>
                            
                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>

                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> Monroe Parker </h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>
                            
                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white">  Johnson smith</h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>

                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white">  Martin Gray </h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>
 
                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> John Michael</h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>
                            
                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>

                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> Monroe Parker </h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>
                            
                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white">  Johnson smith</h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>

                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white">  Martin Gray </h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>
                            
                            <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                                <Link href="profile">
                                    <Image src={Avatar02} alt="" className="rounded-full lg:w-16 lg:h-16 w-10 h-10"/>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> Jesse Steeve</h4> </Link>
                                    <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>
                                <button type="button" className="button bg-primary rounded-full py-1.5 font-semibold text-white">Like too</button>
                            </div>

                        </div>

                        <div className="flex justify-center my-10">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>

                    </div>
                    
                    <div>                  
                        <div className="space-y-6 text-sm font-normal text-gray-500" uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100 ">
  
                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Monroe Parker </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>  
  
                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Jesse Steeve </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> John Michael </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> James Lewis </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Monroe Parker </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>  
  
                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Jesse Steeve </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> John Michael </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link href="profile">
                                    <div className="relative w-12 h-12"> 
                                        <Image src={Avatar02} className="object-cover w-full h-full rounded-full" alt=""/>
                                    </div>
                                </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-base font-medium text-black dark:text-white"> James Lewis </h4> </Link>
                                    <p className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </p>/
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"> <ion-icon class="text-2xl" name="heart"></ion-icon>  </button>
                                    <button type="button" className="text-white bg-primary button"> Supper Like </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-10">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>
                    </div>


                    
                    <div>                  
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-xs font-normal text-gray-500 dark:text-white/80" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">
                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Jesse Steeve</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full  text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> John Michael</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Martin Gray</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Monroe Parker</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> James Lewis </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Jesse Steeve</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> John Michael</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Martin Gray</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Monroe Parker</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> James Lewis </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="profile">
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="profile"> <h4 className="font-semibold text-sm text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25s</div>
                                    <button type="button" className="block font-semibold mt-4 py-1.5 rounded-lg text-[16px] w-full text-red-500 bg-slate-100/70 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                </div>
                            </div>       
                        </div>
                        <div className="flex justify-center my-10">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>
                    </div>  
                </div>               
            </div>
        </main>

       

               
        </>  
    )
}
 
