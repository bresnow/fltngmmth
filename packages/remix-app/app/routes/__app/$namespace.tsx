import { LoaderFunction } from "remix";
import type { LoaderContext } from "types";
import Iframe from "../../../../ui/iframe";
import FullPhotoCard from "../../../../ui/kit/components/pagesection/profile/FullPhotoCard";
import DraggingState from "../../../../ui/dragable";

export let loader: LoaderFunction = async ({ params, request, context }) => {
  let contextual = context as unknown as LoaderContext;
  return null;
};

export default function () {
  return (
    <Iframe url={"http://kanboard:8080"} />
    // <>
    //   <DraggingState>
    //     <FullPhotoCard />
    //   </DraggingState>
    //   <div className="flex gap-4 gap-y-1">
    //     <div className="col-1">
    //       <div className="mb-4">
    //         <div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
    //           <img
    //             alt="eggs"
    //             src="/images/gradient1.webp"
    //             className="rounded-t-lg"
    //           />
    //           <div className="bg-white w-full p-4 relative">
    //             <button
    //               aria-label="Go to article"
    //               type="button"
    //               className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6"
    //             >
    //               <svg
    //                 width="20"
    //                 height="20"
    //                 fill="currentColor"
    //                 className="h-6 w-6 text-white mx-auto"
    //                 viewBox="0 0 1792 1792"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
    //               </svg>
    //             </button>
    //             <p className="text-gray-800 text-xl font-medium mb-2">
    //               Natural
    //             </p>
    //             <p className="text-gray-600 text-xs">
    //               {/* Dare to take the lead and never let yourself be overtaken by
    //                                                     events. */}
    //             </p>
    //             <div className="flex flex-wrap justify-starts items-center mt-6">
    //               <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
    //                 #Finance
    //               </div>
    //               <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
    //                 #Development
    //               </div>
    //               <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
    //                 #Design
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* //// */}

    //       {/* //// */}

    //       {/* /// */}
    //     </div>
    //     <div className="col-1">
    //       <div className="mb-4 flex gap-4">
    //         <button
    //           type="button"
    //           className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    //         >
    //           Annuler
    //         </button>
    //         <button
    //           type="button"
    //           className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    //         >
    //           Confirmer
    //         </button>
    //       </div>
    //       <div className="mb-4">
    //         <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800">
    //           <img
    //             alt="profil"
    //             src="/images/gradient1.webp"
    //             className="rounded-t-lg h-28 w-full mb-4"
    //           />
    //           <div className="flex flex-col items-center justify-center p-4 -mt-16">
    //             <a href="#" className="block relative">
    //               <img
    //                 alt="profil"
    //                 src="/images/gradient.webp"
    //                 className="mx-auto rounded-full h-16 w-16 "
    //               />
    //             </a>
    //             <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
    //               Charlie
    //             </p>
    //             <p className="text-gray-400 text-xs flex items-center">
    //               <svg
    //                 width="10"
    //                 height="10"
    //                 fill="currentColor"
    //                 className="h-4 w-4 mr-2"
    //                 viewBox="0 0 1792 1792"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
    //               </svg>
    //               Nantes
    //             </p>
    //             <p className="text-gray-400 text-xs">FullStack dev</p>
    //             <div className="flex items-center justify-between gap-4 w-full mt-8">
    //               <button
    //                 type="button"
    //                 className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    //               >
    //                 See profile
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mb-4">
    //         <div className="shadow-lg rounded-2xl p-4 bg-gray-900 w-64 m-auto relative">
    //           <div className="w-full h-full text-center">
    //             <div className="flex h-full flex-col justify-between">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="40"
    //                 height="40"
    //                 fill="currentColor"
    //                 className="mt-4 w-20 h-20 m-auto text-white dark:text-white"
    //                 viewBox="0 0 2048 1792"
    //               >
    //                 <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z"></path>
    //               </svg>
    //               <p className="absolute text-sm italic text-white top-2 right-2">
    //                 by express
    //               </p>
    //               <p className="text-white text-lg mt-4">Package delivered</p>
    //               <p className="text-gray-50 text-xs font-thin py-2 px-6">
    //                 Your package was delivered in 1 day and 4 hours by our
    //                 postal partner
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-4">
    //         <div className="w-64">
    //           <div className="mt-1 relative">
    //             <button
    //               type="button"
    //               className="relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             >
    //               <span className="flex items-center">
    //                 <img
    //                   src="/images/gradient1.webp"
    //                   alt="person"
    //                   className="flex-shrink-0 h-6 w-6 rounded-full"
    //                 />
    //                 <span className="ml-3 block truncate">John Jackson</span>
    //               </span>
    //               <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    //                 <svg
    //                   className="h-5 w-5 text-gray-400"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 20 20"
    //                   fill="currentColor"
    //                   aria-hidden="true"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
    //                     clipRule="evenodd"
    //                   ></path>
    //                 </svg>
    //               </span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-4">
    //         <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
    //           <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
    //             Entreprise
    //           </p>
    //           <p className="text-gray-900 dark:text-white text-3xl font-bold">
    //             $199
    //             <span className="text-gray-300 text-sm">/ month</span>
    //           </p>
    //           <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
    //             For most businesses that want to optimize web queries.
    //           </p>
    //           <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="#10b981"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               All illimited link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="#10b981"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Own analitycs plateform link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="#10b981"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               24/24 support link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="#10b981"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Unlimited user
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="#10b981"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Best ranking
    //             </li>
    //             <li className="mb-3 flex items-center opacity-50">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 className="h-6 w-6 mr-2"
    //                 fill="red"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Prenium svg
    //             </li>
    //             <li className="mb-3 flex items-center opacity-50">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 className="h-6 w-6 mr-2"
    //                 fill="red"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               My wife
    //             </li>
    //           </ul>
    //           <button
    //             type="button"
    //             className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    //           >
    //             Choose plan
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-1">
    //       <div className="mb-4">
    //         <div className="shadow-lg rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-4">
    //           <div className="flex text-white  items-center justify-between">
    //             <p className="text-4xl font-medium mb-4">Pro</p>
    //             <p className="text-3xl font-bold flex flex-col">
    //               $99
    //               <span className="font-thin text-right text-sm">month</span>
    //             </p>
    //           </div>
    //           <p className="text-white text-md mt-4">Plan include :</p>
    //           <ul className="text-sm text-white w-full mt-6 mb-6">
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               All illimited link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Own analitycs plateform link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               24/24 support link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Unlimited user
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Best ranking
    //             </li>
    //             <li className="mb-3 flex items-center opacity-50">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 className="h-6 w-6 mr-2"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Prenium svg
    //             </li>
    //             <li className="mb-3 flex items-center opacity-50">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 className="h-6 w-6 mr-2"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               My wife
    //             </li>
    //           </ul>
    //           <button
    //             type="button"
    //             className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
    //           >
    //             Choose plan
    //           </button>
    //         </div>
    //       </div>
    //       <div className="mb-4">
    //         <div className="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
    //           <div className="flex items-center">
    //             <span className="bg-green-500 p-2 h-4 w-4 rounded-full relative">
    //               <svg
    //                 width="20"
    //                 fill="currentColor"
    //                 height="20"
    //                 className="text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    //                 viewBox="0 0 1792 1792"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
    //               </svg>
    //             </span>
    //             <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
    //               Sales
    //             </p>
    //           </div>
    //           <div className="flex flex-col justify-start">
    //             <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
    //               36K
    //             </p>
    //             <div className="relative w-28 h-2 bg-gray-200 rounded">
    //               <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-4">
    //         <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50">
    //           <div className="w-full pt-1 text-center -mt-16 mx-auto">
    //             <a href="#" className="block relative">
    //               <img
    //                 alt="profil"
    //                 src="/images/gradient.webp"
    //                 className="mx-auto rounded-full h-20 w-20 "
    //               />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-4">
    //         <div className="w-72 bg-white rounded-lg shadow-md p-6">
    //           <div className="w-16 mx-auto relative -mt-10 mb-3">
    //             <img
    //               className="-mt-1"
    //               src="/icons/icon-96x96.png"
    //               alt="cookie"
    //             />
    //           </div>
    //           <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
    //             We care about your data, and we&#x27;d love to use cookies to
    //             make your experience better.
    //           </span>
    //           <div className="flex items-center justify-between">
    //             <a
    //               className="text-xs text-gray-400 mr-1 hover:text-gray-800"
    //               href="#"
    //             >
    //               Privacy Policy
    //             </a>
    //             <div className="w-1/2">
    //               <button
    //                 type="button"
    //                 className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    //               >
    //                 See more
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-4">
    //         <div className="shadow-lg rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-4">
    //           <div className="flex text-white  items-center justify-between">
    //             <p className="text-4xl font-medium mb-4">Pro</p>
    //             <p className="text-3xl font-bold flex flex-col">
    //               $99
    //               <span className="font-thin text-right text-sm">month</span>
    //             </p>
    //           </div>
    //           <p className="text-white text-md mt-4">Plan include :</p>
    //           <ul className="text-sm text-white w-full mt-6 mb-6">
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               All illimited link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Own analitycs plateform link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               24/24 support link
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Unlimited user
    //             </li>
    //             <li className="mb-3 flex items-center ">
    //               <svg
    //                 className="h-6 w-6 mr-2"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 stroke="currentColor"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Best ranking
    //             </li>
    //             <li className="mb-3 flex items-center opacity-50">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 className="h-6 w-6 mr-2"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               Prenium svg
    //             </li>
    //             <li className="mb-3 flex items-center opacity-50">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="6"
    //                 height="6"
    //                 className="h-6 w-6 mr-2"
    //                 fill="white"
    //                 viewBox="0 0 1792 1792"
    //               >
    //                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
    //               </svg>
    //               My wife
    //             </li>
    //           </ul>
    //           <button
    //             type="button"
    //             className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
    //           >
    //             Choose plan
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
// export function CatchBoundary() {
//   let caught = useCatch();

//  switch (caught.status) {
// case 401:
//  case 403:
//     case 404:
//       return (
// <></>
// );
// }
// throw new Error(`Unexpected caught response with status: ${caught.status}`);
// }
