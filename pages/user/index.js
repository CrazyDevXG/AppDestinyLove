import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import navURL from '@/components/Utility/navURL'
import { UserStyle } from '@/components/UserPage/Global_Css'
import  USidebar  from '@/components/UserPage/sidebar' 
import { Co_Online } from '@/components/UserPage/home/Co_online'
import { Co_Suggest } from '@/components/UserPage/home/Co_suggest'


import AvatarLG1 from '@/public/assets/images/avatars/avatar-lg-1.jpg'
import AvatarLG2 from '@/public/assets/images/avatars/avatar-lg-2.jpg'
import Avatar02 from '@/public/assets/images/avatars/avatar-2.jpg'

 


export default function Home() {  

    


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

            <UserStyle />
            
            <USidebar />

            <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
            <div className="main__inner">
                    
                <Co_Online />

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
                                <Link href={navURL("user/profile")}> <Image src={Avatar02} alt="" className="w-9 h-9 rounded-full" /> </Link>
                                <div className="flex-1">
                                    <Link href={navURL("user/profile")}> <h4 className="text-black dark:text-white"> UserName </h4> </Link>
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
                                        <Link href="/assets/images/avatars/avatar-lg-1.jpg"  data-caption="img-1">
                                            <Image src={AvatarLG1} className="w-full h-full object-cover inset-0" alt="AvatarLG1" />                                         
                                        </Link>
                                    </li>
                                    <li className="w-full overflow-hidden sm:rounded-md">
                                        <Link href="/assets/images/avatars/avatar-lg-2.jpg"  data-caption="img-2">
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

                    <Co_Suggest />
                </div> 
            </div> 

        </main>


        </>  
    )
}
 
