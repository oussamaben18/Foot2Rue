import React from 'react'
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
function MovieList() {
    const videoList = [
        {
          id: 1,
          image:
            "https://media.senscritique.com/media/000006494906/300/foot_2_rue.jpg",
        },
        {
          id: 2,
          image:
            "https://www.bedetheque.com/media/Couvertures/foot2rue09_110992.jpg",
        },
        {
          id: 3,
          image:
            "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782302002975_1_75_2.jpg",
        },
        {
          id: 4,
          image:
            "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782302098473_1_75.jpg",
        },
      ];
  return (
    <div className="mt-20 "> 
    <p className=" px-5 text-white text-[30px] font-bold">New Releases</p>

    <div className="w-full py-2  px-60 overflow-x-scroll 
    scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {/* <HiChevronLeft className='text-white text-[30px] 
        absolute  z-10 hover:scale-125 cursor-pointer  h-[250px]' /> */}
      {videoList.map((item) => (
        <div className="inline-block m-2 md:m-3" key={item.id}>
          <img
            src={item.image}
            className="
                  w-[130px] h-[200px]
                  transition-all ease-in-out
                  duration-500 rounded-2xl object-cover
                  md:w-[160px] md:h-[240px] 
                  
                  cursor-pointer
                  hover:scale-125
                  "
          />
           
         <div
      class="absolute  inset-x-[15%] z-10 bottom-5 hidden py-5 text-center text-white md:block">
      {/* <h5 class="text-xl">First slide label</h5> */}
      
    </div>
    
        </div>
      ))}
     {/* <HiChevronRight className='text-white text-[30px] right-0 
        absolute  z-10 hover:scale-125 cursor-pointer ' /> */}
      </div>
      
    </div>
  )
}

export default MovieList