import React , {useState} from "react";
import { saleData } from "../CardData/SaleCard";
import Cards from "./Cards";

const RecentSale = () => {
 
  return (
    <Cards Type='Recent Places For Sale' Desc='Show More Places For Sale' Cards={saleData}/>

  //   <div className="sm:max-w-6xl m-auto pt-10">
  //     <div className="p-2">
  //       <div className="text-slate-800 font-bold text-2xl">Recent places for sale</div>
  //       <p className="hover:underline inline text-sm text-blue-700">
  //         Show More Places For Sale
  //       </p>
  //     </div>
  //     <div className="max-w-6xl m-auto pt-2 px-2 flex flex-wrap  gap-5">
  //       {saleData.map((card) => {
  //         return (
  //           <div
  //             className="w-full sm:w-[320px] sm:h-[400px] bg-white rounded-md shadow-md shadow-zinc-400 "
  //             key={card.id}
  //             onClick={()=>handleClick(card.title)}
  //           >
  //             <div className="w-full h-[50%] flex overflow-hidden rounded-md rounded-b-none">
  //               <img
  //                 src={card.img_url}
  //                 alt="onion"
  //                 className="w-full h-full bg-center object-cover align-middle rounded-md rounded-b-none hover:scale-105 transition-all duration-100"
  //               />
  //             </div>
  //             <div className="flex px-3 pt-5 flex-col">
  //               <div className="font-bold text-lg ">{card.title}</div>
  //               <div className="text-xs font-light">
  //                 <FaLocationDot className="inline text-emerald-700" />{" "}
  //                 {card.location}
  //               </div>
  //               <div className="text-gray-500 font-bold">{card.value}</div>
  //               <div className="flex gap-5">
  //                 <div className="font-semibold text-black ">
  //                   {card.beds} Beds
  //                 </div>
  //                 <div className="font-semibold text-black ">
  //                   {card.bath} Baths
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  );
};

export default RecentSale;
