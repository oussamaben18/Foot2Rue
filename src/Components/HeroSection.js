import React, { useState } from "react";

import Header from "./Header";
import MovieList from "./MovieList";

function HeroSection() {
  const [bannerImage,setBannerImage]=useState("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fe0138586c9938a8c235e056923f027395b44c4f00f85783e2252ab3cc290fa3._RI_V_TTW_.png")
 
  return (
    <div className="">
      <div className="absolute z-[-1] m-auto ">
        <img src={bannerImage}
        className="h-screen object-cover w-screen"/>
      </div>
      
      <div className="h-48 absolute  w-screen z-[-1]  bg-gradient-to-b from-gray-900">
          
      </div>

      <div className="h-48 absolute bottom-0  w-screen z-[-1]  bg-gradient-to-t mb-[-20px] from-gray-900">
          
          </div>

      <Header/>
      <div className="p-10">
        <p className="text-[35px] mx-14	 font-bold text-white">Foot De Rue</p>
        <p className="text-[20px] text-white mx-20 font-normal my- ">2005 ‧ 4 seasons</p>
     
        <p className=" mt-1 mx-20 bg-amber-600 hover:scale-128
         text-white p-1 px-10 rounded-full w-[140px] text-center
         cursor-pointer hover:font-bold  transition-all duration-300">
         Play</p>

      </div>
      <MovieList/>
    
    </div>
  );
}

export default HeroSection;
