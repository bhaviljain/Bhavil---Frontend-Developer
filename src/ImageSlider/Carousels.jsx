import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 389 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
    const [ResData, setResData] = useState([])

    const fetchRest = async () =>
        {
          const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
          const res =  await data.json()
          // console.log(res);
          setResData(res.meals)
        }
        useEffect(()=>{
          fetchRest()
        },[])
        
  return (
    <>
   

    <Carousel responsive={responsive}
    className='shadow-lg onplusnord3:pl-36 iPhoneSE:pl-2'
    >
   {ResData.map((items)=>(
    <div className='mt-28 bg-white '>
   <img src={items.strMealThumb}
   className='h-40 w-40  rounded-full onplusnord3:h-28 onplusnord3:w-28 iPhoneSE:h-28 iPhoneSE:w-28 SamsungS8:h-20 SamsungS8:w-20 SamsungS8:ml-36 zfold:h-20 zfold:w-20 zfold:ml-32'
   />
   <h4 className='font-bold text-center onplusnord3:pr-12 pt-5 iPhoneSE:pr-30'>{items.strMeal}</h4>
   </div>
   ))}
  
  </Carousel>
   </>
   
  )
}

export default Carousels