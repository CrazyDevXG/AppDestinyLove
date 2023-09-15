export default function PlanUpgrade() {
    return  (

            <>
                <div className="plan__model w-screen h-screen fixed inset-0 flex justify-center items-center overflow-hidden z-50 bg-white/40 backdrop-blur-sm dark:bg-black/40">         
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl relative dark:bg-dark2"> 
                    <div className="pt-6">
                        <div className="text-center"> 
                            <h1 className="lg:text-3xl lg:font-bold md:text-2xl text-xl bg-gradient-to-tr from-orange-500 to-yellow-500 bg-clip-text text-transparent leading-relaxed">  With Instello Premium</h1>
                            <p className="text-sm text-gray-500 mt-2"> Exclusive features and benefits on Instello are accessible to you. </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto mt-10">

                            <label for="monthly">
                                <input type="radio" name="radio" id="monthly" className="peer appearance-none hidden" checked/>
                                <div className="relative p-4 bg-slate-100 shadow-sm rounded-xl cursor-pointer peer-checked:[&_.active]:block dark:bg-dark3">
                                    <div className="mb-4 text-sm"> Monthly </div>
                                    <h2 className="text-3xl font-bold text-black relative px-2 dark:text-white"> <span className="text-xs absolute top-1.5 -left-1 font-normal text-gray-400">$</span> 12.99 </h2>
                                    <ion-icon name="checkmark-circle" class="hidden active absolute top-0 right-0 m-4 text-2xl text-blue-600 uk-animation-scale-up"></ion-icon>
                                </div>
                            </label>
                            <label for="yearly">
                                <input type="radio" name="radio" id="yearly" className="peer appearance-none hidden"  />
                                <div className="relative p-4 bg-slate-100 shadow-sm rounded-xl cursor-pointer peer-checked:[&_.active]:block dark:bg-dark3">
                                    <div className="mb-4 text-sm"> Yearly </div>
                                    <h2 className="text-3xl font-bold text-black relative px-2 dark:text-white"> <span className="text-xs absolute top-1.5 -left-1 font-normal text-gray-400">$</span> 32.99 </h2>
                                    <ion-icon name="checkmark-circle" class="hidden active absolute top-0 right-0 m-4 text-2xl text-blue-600 uk-animation-scale-up"></ion-icon>
                                </div>
                            </label>
                            <label for="forever">
                                <input type="radio" name="radio" id="forever" className="peer appearance-none hidden" />
                                <div className="relative p-4 bg-slate-100 shadow-sm rounded-xl cursor-pointer peer-checked:[&_.active]:block dark:bg-dark3">
                                    <div className="mb-4 text-sm"> Forever </div>
                                    <h2 className="text-3xl font-bold text-black relative px-2 dark:text-white"> <span className="text-xs absolute top-1.5 -left-1 font-normal text-gray-400">$</span> 92.99 </h2>
                                    <ion-icon name="checkmark-circle" class="hidden active absolute top-0 right-0 m-4 text-2xl text-blue-600 uk-animation-scale-up"></ion-icon>
                                </div>
                            </label>                
                        </div>

                        <div className="lg:p-8 p-4 shadow-sm mt-6">                            
                            <h1 className="text-base font-medium text-black dark:text-white">Why Choose Premium Membership </h1>                        
                            <div className=" text-sm text-gray-500 grid grid-cols-2 gap-10 mt-8 dark:text-white/80">
                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="camera" class="flex shrink-0 p-2 text-2xl rounded-full bg-sky-100 text-sky-500 dark:bg-sky-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Stories </h5>
                                        <p className="mt-1 max-md:hidden"> Post moments your everyday life that disappear after 24 hours </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="image" class="flex shrink-0 p-2 text-2xl rounded-full bg-teal-100 text-teal-500 dark:bg-teal-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Images </h5>
                                        <p className="mt-1 max-md:hidden"> You can upload Unlimited photes and share with your friends </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="chatbox" class="flex shrink-0 p-2 text-2xl rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Messages </h5>
                                        <p className="mt-1 max-md:hidden"> Send photos, videos, and messages privately to your friends or groups </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="videocam" class="flex shrink-0 p-2 text-2xl rounded-full bg-pink-100 text-pink-500 dark:bg-pink-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Shorts </h5>
                                        <p className="mt-1 max-md:hidden"> Create and share short, entertaining videos with music, filters, and effects </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="compass" class="flex shrink-0 p-2 text-2xl rounded-full bg-purple-100 text-purple-500 dark:bg-purple-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Explore </h5>
                                        <p className="mt-1 max-md:hidden">  Discover content and creators based on their interests </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="bookmark" class="flex shrink-0 p-2 text-2xl rounded-full bg-green-100 text-green-500 dark:bg-green-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Bookmark </h5>
                                        <p className="mt-1 max-md:hidden"> Create collections of saved posts based on themes, topics, or categories. </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="shield" class="flex shrink-0 p-2 text-2xl rounded-full bg-red-100 text-red-500 dark:bg-red-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Privacy  </h5>
                                        <p className="mt-1 max-md:hidden"> Make your account visible only to people who follow you </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 max-md:items-center">
                                    <ion-icon name="cart" class="flex shrink-0 p-2 text-2xl rounded-full bg-sky-100 text-sky-500 dark:bg-sky-500/20"></ion-icon>
                                    <div> 
                                        <h5 className="text-black text-base font-medium dark:text-white"> Shopping </h5>
                                        <p className="mt-1 max-md:hidden"> Browse and buy products from your favorite brands and creators</p>
                                    </div>
                                </div>
                            </div>  
                        </div> 

                        <div className="py-10 flex justify-between"> 
                            <p className="max-w-xl mx-auto text-center text-xs text-gray-500 dark:text-white/80"> Instello Premium is the ultimate way to enhance your Instello experience and connect with your passions. Try it free for 30 days and cancel anytime. </p>
                        </div> 
                    </div>

                    <button type="button" 
                            className="bg-slate-100 rounded-full p-1 absolute top-0 right-0 m-6 shrink-0 flex dark:bg-dark3"
                            uk-toggle="target: .plan__model ; cls: hidden opacity-0"> 
                            <ion-icon class="text-2xl" name="close"></ion-icon> 
                    </button>

                </div>
            </div>
        </>
    )
}