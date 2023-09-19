import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { UserStyle } from '@/components/UserPage/Global_Css'
import USidebar from "@/components/UserPage/sidebar"  


export default function GiftShop() {
      return  (

        <>
            <Head>
                  <meta charset="UTF-8"/>
                  <title>Gift Shop | Destiny Love</title>
                  <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>                
              </Head>

              <UserStyle />
            
            <USidebar />


        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
            <div className="main__inner">                
                <div uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4; start: 80; animation: uk-animation-slide-top">
                
                    
                    <div className="page__heading">
                        <h1>Credit Shop </h1>
                    </div>                    
                    <div className="overflow-hidden mt-6">
                        <div id="product-nav" className="relative flex items-center justify-between border-b dark:border-slate-800 uk-animation-slide-top-medium">                            
                            <ul className="flex gap-2 text-sm text-center text-gray-600 capitalize font-semibold dark:text-white/80 -mb-px" uk-switcher="connect: #shop_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">                                
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="cash-outline"></ion-icon> Credit</Link> </li>
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="storefront-outline"></ion-icon> Stores</Link> </li>
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="bag-check-outline"></ion-icon> My Pocket</Link> </li>
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="list-outline"></ion-icon> History</Link> </li>                                
                            </ul>     
                            
                            <div className="flex items-center gap-4"> 
                                <button className="flex" uk-toggle="target: #product-nav">
                                    <ion-icon class="text-xl" name="search"></ion-icon> 
                                </button> 
                                <select className="!bg-transparent focus:!border-transparent focus:!ring-transparent max-sm:hidden md:w-40">
                                    <option value="1">Latest</option> 
                                    <option value="3">Popular</option>
                                    <option value="4">Newest</option>
                                </select>
                            </div>    
                        </div> 
                       
                        <div id="product-nav" className=" w-full  rounded-lg z-30 uk-animation-slide-bottom" hidden>
                            <div className="bg-slate-200 py-2 px-3.5 rounded-md w-full flex items-center gap-3 dark:bg-dark2"> 
                                <button type="submit" className="flex"> <ion-icon class="text-2xl" name="search"></ion-icon></button> 
                                <input type="text" className="!bg-transparent !outline-none !w-full" placeholder="Search"/>
                                <button className="flex" uk-toggle="target: #product-nav">
                                    <ion-icon class="text-2xl" name="close"></ion-icon> 
                                </button>
                            </div>  
                        </div>
                    </div>                     
                </div>

                <div className="uk-switcher" id="credit_tab">                       
                    <div>                 
                        <div className="flex justify-center my-8">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>                
                    </div>                                        
                </div>  

                <div className="uk-switcher" id="shop_tab">                       
                    <div>           
                                       
                        <div className="flex justify-center my-8">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>                
                    </div>                                        
                </div>  

            </div>
        </main>
            
        </>
      )
}