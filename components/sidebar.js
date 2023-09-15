import Image from 'next/image'
import Link from 'next/link'

import LogoIcon from '@/public/assets/images/logo-icon.png'
import LogoDark from '@/public/assets/images/logo-dark.png'
import LogoLight from '@/public/assets/images/logo-light.png'
import Avatar from '@/public/assets/images/avatars/avatar-2.jpg'
import Notyfi from './notify'
import Searching from './searching'

export default function AppSidebar() {
    return (
        <>
            <div id="sidebar" className="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0">
                <div id="sidebar__inner" className="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700">

                    <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
                        <Link href="/user" id="logo" className="flex items-center gap-3">
                            <Image id="logo__icon" src={LogoIcon} alt="Logo-icon" className="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up" />
                            <Image src={LogoDark} alt="Logo" className="w-full h-10 ml-1 max-xl:hidden max-md:block dark:!hidden" />
                            <Image src={LogoLight} alt="Logo" className="w-full h-10 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block" />
                        </Link>
                    </div>

                    <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">

                        <Link href="/user">
                            <ion-icon name="people" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Home </span>
                        </Link>

                        <Link href="#" className="max-md:!fixed max-md:top-2 max-md:right-2">
                            <ion-icon name="male-female" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Search </span>
                        </Link>
                        <Searching />               

                        <Link href="/matching">                            
                            <ion-icon name="heart-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Matching </span>
                            <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
                        </Link>

                        <Link href="/my_messages">
                            <ion-icon name="chatbubble-ellipses-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Messages </span>
                            <div className="w-2 h-2 bg-green-500 rounded-full absolute left-7 top-2.5"></div> 
                        </Link>


                        <Link href="/popular">                            
                            <ion-icon name="star-half-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Popular </span>
                        </Link>


                        <Link href="#" className="max-md:!fixed max-md:top-2 max-md:right-14 relative">
                            <ion-icon name="mail-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Notifications </span> 
                            <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-7 top-2.5"></div>                           
                        </Link>
                        <Notyfi />



                        <Link href="/shop" className="max-md:!hidden">
                        <ion-icon name="gift-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Gift Shop </span>
                        </Link>         

                    </nav>

                    <div >
                        <Link href="" id="profile-link" className="flex items-center gap-3 p-3 group">
                            <Image src={Avatar} alt="" className="rounded-full md:w-8 md:h-8 w-7 h-7 shrink-0" />
                            <span className="font-semibold text-sm max-xl:hidden"> USER </span>
                            <ion-icon name="chevron-forward-outline" class="text-xl ml-auto duration-200 group-aria-expanded:-rotate-90 max-xl:hidden"></ion-icon>
                        </Link>
                        <div className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden" uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true">

                            <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>

                            <div className="p-4 text-xs font-medium">
                                <Link href="/my_profile">
                                    <Image src={Avatar} className="w-8 h-8 rounded-full" alt="" />
                                    <div className="mt-2 space-y-0.5">
                                        <div className="text-base font-semibold"> USER </div>
                                        <div className="text-gray-400 dark:text-white/80"> @monroe </div>
                                    </div>
                                </Link>
                                <div className="mt-3 flex gap-3.5">
                                    <div> <Link href="my_profile"> <strong> 620K </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Following </span> </Link> </div>
                                    <div> <Link href="my_profile"> <strong> 38k </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Followers </span> </Link>  </div>
                                </div>

                            </div>
                            <hr className="opacity-60" />
                            <ul className="text-sm font-semibold p-2">
                                <li> <Link href="/my_profile" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="person-outline" class="text-lg"></ion-icon> My Profile </Link></li>
                                <li> <Link href="/upgrade" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="bookmark-outline" class="text-lg"></ion-icon> Upgrade </Link></li>
                                <li> <Link href="/setting" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="settings-outline" class="text-lg"></ion-icon> Acount Setting  </Link></li>
                                <li> <Link href="/sign_out" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="log-out-outline" class="text-lg"></ion-icon> Log Out </Link></li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
