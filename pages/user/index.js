import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import AppStyle from '@/components/UserPage/CSS_User'
import Avatar02 from '@/public/assets/images/avatars/avatar-2.jpg'
import AvatarLG1 from '@/public/assets/images/avatars/bc3128.jpg'
import AvatarLG2 from '@/public/assets/images/avatars/sca00.jpg'
import Product1 from '@/public/assets/images/product/product-1.jpg'

import AppSidebar from "@/components/sidebar"    


export default function Home() {  

    const router = useRouter();
    
    useEffect(() => {
      const isAuthenticated = true;
  
      if (!isAuthenticated) {
        router.push('./sign_in');
      }
  
      <Script src="./assets/js/script.js" strategy="beforeInteractive"  />
    }, []);
    


    return (
      <>
              <Head>
                  <meta charSet="UTF-8"/>
                  <title>Home | Destiny Love</title>
                  <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>                
              </Head>

            <AppStyle />
            
              <AppSidebar />

            <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
            <div className="main__inner"><div>
                    <h3 className="font-extrabold text-2xl  text-black dark:text-white">Online</h3>
                    <div className="relative" tabIndex="-1" uk-slider="autoplay: true;finite: true">    
                        <div className="py-5 uk-slider-container">                           
                            <ul className="uk-slider-items w-[calc(100%+14px)]">
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">                                                                              
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />                                                                                        
                                            </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div>                                             
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li> 
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li> 
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2 hover:scale-[1.2] hover:-rotate-2 duration-300">
                                    <Link href="profile">
                                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                                            <Image src={Avatar02} alt="" className="absolute w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-5 bg-green-500 rounded-full w-2 h-2"></div> 
                                    </Link>
                                </li>
                                <li className="md:pr-2.5 pr-2">
                                    <div className="md:w-20 md:h-20 w-12 h-12 bg-slate-200/60 rounded-full dark:bg-dark2 animate-pulse"></div>
                                </li>
                            </ul>                    
                        </div>
                       
                        <div className="max-md:hidden">
                            <button type="button" className="absolute -translate-y-1/2 bg-white shadow rounded-full top-1/2 -left-3.5 grid w-8 h-8 place-items-center dark:bg-dark3" uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                            <button type="button" className="absolute -right-2 -translate-y-1/2 bg-white shadow rounded-full top-1/2 grid w-8 h-8 place-items-center dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon> </button>

                        </div>
                    </div>
                </div>
                <div className="flex max-lg:flex-col xl:gap-10 md:gap-3 md:mt-10" id="js-oversized">
                 <div className="md:max-w-[510px] mx-auto flex-1 xl:space-y-6 space-y-3">                        
                        <div className="bg-white rounded-xl shadow-sm p-4 space-y-4 text-sm font-medium border1 dark:bg-dark2">

                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-slate-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer dark:bg-dark3" uk-toggle="target: #filter-setting"> 
                                    <div className="py-2.5 text-center dark:text-white"><ion-icon name="search-outline"></ion-icon> Setting Filter </div>
                                </div>
                                <div className="p-2 transition-all rounded-lg cursor-pointer" uk-toggle="target: #filter-location">
                                    <ion-icon name="location-outline" class="text-2xl text-red-400"></ion-icon>
                                </div>
                                <div className="p-2 transition-all rounded-lg cursor-pointer" uk-toggle="target: #filter-setting">
                                    <ion-icon name="settings-outline" class="text-2xl text-pink-300"></ion-icon>
                                </div>
                            </div>                            
                        </div>                                              


                        <div className="bg-white rounded-xl shadow-sm text-sm font-medium border1 dark:bg-dark2">
                            <div className="flex gap-3 sm:p-4 p-2.5 text-sm font-medium">
                                <Link href="profile"> <Image src={Avatar02} alt="" className="w-9 h-9 rounded-full" /> </Link>
                                <div className="flex-1">
                                    <Link href="profile"> <h4 className="text-black dark:text-white"> Martin Gray </h4> </Link>
                                    <div className="text-xs text-gray-500 dark:text-white/80"><ion-icon name="male-female"></ion-icon>female : 25 </div>
                                </div>

                                <div className="-mr-1">
                                    <button type="button" className="button__ico w-8 h-8"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                    <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                        <nav> 
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="gift"></ion-icon>  Send Gifts </Link>                                             
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-social-outline"></ion-icon>  Share profile </Link> 
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="alert-circle-outline"></ion-icon>  Report profile </Link> 
                                            <hr />
                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="eye-off-outline"></ion-icon>  Block </Link> 
                                        </nav>
                                    </div>
                                </div>
                            </div>                             
                            
                            <div className="relative uk-visible-toggle sm:px-4" tabIndex="-1" uk-slideshow="animation: fade; finite: true; min-height:490;">
                                <ul className="uk-slideshow-items" uk-lightbox=""> 
                                    <li className="w-full overflow-hidden sm:rounded-md">
                                        <Link href="/assets/images/avatars/bc3128.jpg"  data-caption="Caption">
                                            <Image src={AvatarLG1} className="w-full h-full object-cover inset-0" alt="AvatarLG1" />                                         
                                        </Link>
                                    </li>
                                    <li className="w-full overflow-hidden sm:rounded-md">
                                        <Link href="/assets/images/avatars/sca00.jpg"  data-caption="Martin Gray">
                                            <Image src={AvatarLG2} className="w-full h-full object-cover inset-0" alt="AvatarLG2" />
                                        </Link>
                                    </li>                                     
                                </ul>
                                <div className="sm:p-4 p-2.5 border-t border-gray-100 flex items-center text-xs font-semibold gap-4 dark:border-slate-700/40"> 
                                    <button type="button" className="button__ico "><ion-icon class="text-2xl" name="refresh-outline"></ion-icon> </button>  
                                    <button type="button" className="button__ico ml-auto"> <ion-icon class="text-4xl" name="close-outline"></ion-icon></button>   
                                    <button type="button" className="button__ico ml-auto"> <ion-icon class="text-3xl" name="share-outline"></ion-icon> </button>  
                                    <button type="button" className="button__ico ml-auto"> <ion-icon class="text-3xl" name="gift"></ion-icon> </button>
                                    <button type="button" className="button__ico text-red-500 ml-auto"> <ion-icon class="text-4xl" name="heart"></ion-icon> </button> 
                                </div>      

                                <button type="button" className="absolute left-2 -translate-y-1/2 bg-black/40 backdrop-blur-3xl rounded-full top-1/2 grid w-7 h-7 place-items-center shadow" uk-slideshow-item="previous"> <ion-icon name="chevron-back" class="text-xl text-white"></ion-icon></button>
                                <button type="button" className="absolute right-2 -translate-y-1/2 bg-black/40 backdrop-blur-3xl rounded-full top-1/2 grid w-7 h-7 place-items-center shadow" uk-slideshow-item="next"> <ion-icon name="chevron-forward" class="text-xl text-white"></ion-icon></button>
                            </div>       
                        </div>

                        
                        
                        <div className="rounded-xl shadow-sm p-4 space-y-4 bg-slate-200/40 animate-pulse border1 dark:bg-dark2">
                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-full bg-slate-300/20"></div>
                                <div className="flex-1 space-y-3">
                                    <div className="w-40 h-5 rounded-md bg-slate-300/20"></div>
                                    <div className="w-24 h-4 rounded-md bg-slate-300/20"></div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-slate-300/20"></div>
                            </div>

                            <div className="w-full h-52 rounded-lg bg-slate-300/10 my-3"> </div>
                            <div className="flex gap-3">
                                <div className="w-16 h-5 rounded-md bg-slate-300/20"></div>
                                <div className="w-14 h-5 rounded-md bg-slate-300/20"></div>
                                <div className="w-6 h-6 rounded-full bg-slate-300/20 ml-auto"></div>
                                <div className="w-6 h-6 rounded-full bg-slate-300/20  "></div>
                            </div>
                        </div> 
                    </div> 

                    <div className="lg:max-w-[370px] md:max-w-[510px] mx-auto">
                        <div className="xl:space-y-6 space-y-3 md:pb-12"  uk-sticky="end: #js-oversized; offset: 50; media:992">
                            <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">                                
                                <div className="flex justify-between text-black dark:text-white">
                                    <h3 className="font-bold text-base"> Suggested For You </h3>                                    
                                </div>
    
                                <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">    
                                    <div className="flex items-center gap-3">
                                        <Link href="profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> User name 1</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> I Like </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link href="profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> User name 2</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 20 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> I Like </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link href="profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white"> User name 3</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 31  </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> I Like </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link href="profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white">  User name 4</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>male : 29 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> I Like </button>
                                    </div> 
                                    <div className="flex items-center gap-3">
                                        <Link href="profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="font-semibold text-sm text-black dark:text-white">  User name 5</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>any : 25 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> I Like </button>
                                    </div>
                                </div>    
                            </div>
    

                            
                            <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">                                
                                <div className="flex justify-between text-black dark:text-white">
                                    <h3 className="font-bold text-base"> Private Photos </h3>
                                </div>
    
                                <div className="relative capitalize font-medium text-sm text-center mt-4 mb-2" tabIndex="-1" uk-slider="autoplay: true;finite: true">
                                    <div className="overflow-hidden uk-slider-container">                                       
                                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">                                            
                                            <li className="w-1/2 pr-2"> 
                                                <Link href="#">
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <div className="relative w-full md:h-40 h-full">
                                                            <Image src={Product1} alt="" className="object-cover w-full h-full inset-0" />
                                                        </div> 
                                                        <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> 12 </div>
                                                    </div>
                                                    <div className="mt-3 w-full"> User1 </div>
                                                </Link>

                                            </li>
                                            <li className="w-1/2 pr-2"> 
                                                <Link href="#">
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <div className="relative w-full md:h-40 h-full">
                                                            <Image src={Product1} alt="" className="object-cover w-full h-full inset-0" />
                                                        </div> 
                                                        <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> 12 </div>
                                                    </div>
                                                    <div className="mt-3 w-full"> User2 </div>
                                                </Link>
 
                                            </li>
                                            <li className="w-1/2 pr-2"> 
                                                <Link href="#">
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <div className="relative w-full md:h-40 h-full">
                                                            <Image src={Product1} alt="" className="object-cover w-full h-full inset-0" />
                                                        </div> 
                                                        <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> 12 </div>
                                                    </div>
                                                    <div className="mt-3 w-full"> User3 </div>
                                                </Link> 
                                            </li>
                                        </ul>
                                        <button type="button" className="absolute bg-white rounded-full top-16 -left-4 grid w-9 h-9 place-items-center shadow dark:bg-dark3"  uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                                        <button type="button" className="absolute -right-4 bg-white rounded-full top-16 grid w-9 h-9 place-items-center shadow dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon></button>
                                    </div>                                
                                </div>    
                            </div>              
                           
                            <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">                                
                                <div className="flex justify-between text-black dark:text-white">
                                    <h3 className="font-bold text-base"> Popular User </h3>
                                </div>    
                                <div className="relative capitalize font-normal text-sm mt-4 mb-2" tabIndex="-1" uk-slider="autoplay: true;finite: true">
                                    <div className="overflow-hidden uk-slider-container">                                       
                                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">                                            
                                            <li className="w-1/2 pr-2">                                            
                                                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                                                    <Link href="profile"> 
                                                        <div className="relative w-16 h-16 mx-auto mt-2">
                                                            <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full" />
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 text-center w-full">
                                                        <Link href="profile"> <h5 className="font-semibold"> Martin Gray</h5> </Link>
                                                        <div className="text-xs text-gray-400 mt-0.5 font-medium"> <ion-icon name="male-female"></ion-icon>female : 25</div>
                                                        <button type="button" className="bg-primary block font-semibold text-white mt-4 py-1.5 rounded-lg text-sm w-full border1"> I Like </button>
                                                    </div>
                                                </div>                                         
                                            </li>
                                            <li className="w-1/2 pr-2">
                                                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                                                    <Link href="profile"> 
                                                        <div className="relative w-16 h-16 mx-auto mt-2">
                                                            <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full" />
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 text-center w-full">
                                                        <Link href="profile"> <h5 className="font-semibold"> Alexa Park</h5> </Link>
                                                        <div className="text-xs text-gray-400 mt-0.5 font-medium"> <ion-icon name="male-female"></ion-icon>female : 25</div>
                                                        <button type="button" className="bg-primary block font-semibold text-white mt-4 py-1.5 rounded-lg text-sm w-full border1"> I Like </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="w-1/2 pr-2">
                                                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                                                    <Link href="profile"> 
                                                        <div className="relative w-16 h-16 mx-auto mt-2">
                                                            <Image src={Avatar02} alt="" className="h-full object-cover rounded-full shadow w-full" />
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 text-center w-full">
                                                        <Link href="profile"> <h5 className="font-semibold"> James Lewis</h5> </Link>
                                                        <div className="text-xs text-gray-400 mt-0.5 font-medium"> <ion-icon name="male-female"></ion-icon>female : 20</div>
                                                        <button type="button" className="bg-primary block font-semibold text-white mt-4 py-1.5 rounded-lg text-sm w-full border1"> I Like </button>
                                                    </div>
                                                </div>
                                            </li> 
                                        </ul>
                                        <button type="button" className="absolute -translate-y-1/2 bg-slate-100 rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center dark:bg-dark3"  uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                                        <button type="button" className="absolute -right-4 -translate-y-1/2 bg-slate-100 rounded-full top-1/2 grid w-9 h-9 place-items-center dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon></button>

                                    </div>                                
                                </div>     
                            </div>

                            
                            
                        </div>
                    </div>  
                </div> 
            </div> 

        </main>

            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="beforeInteractive" />
            <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" strategy="beforeInteractive" />
            <Script src="./assets/js/uikit.min.js" strategy="beforeInteractive" />
            
        </>  
    )
}
 