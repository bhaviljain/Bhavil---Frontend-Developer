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
      breakpoint: { max: 800, min: 464 },
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
    <Carousel responsive={responsive}
    className='shadow-lg'
    >
   {ResData.map((items)=>(
    <div className='mt-20 bg-white '>
   <img src={items.strMealThumb}
   className='h-40 w-40 rounded-full'
   />
   <h4 className='font-bold text-center'>{items.strMeal}</h4>
   </div>
   ))}
  
  </Carousel>
   
   
  )
}

export default Carousels