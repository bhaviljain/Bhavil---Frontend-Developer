import React, { useEffect, useState } from 'react'
import { Ratings } from '../Constant/utils'
import Restauranitems from './Restauranitems'

const Meals = () => {
const [meals, setMeals] = useState([])


    const fetchMeals = async()=>{
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        const res = await data.json()
        setMeals(res.meals)
        console.log(res.meals);
    }
    useEffect(()=>{
        fetchMeals()
    },[])
  return (
  <>    
  <div className='text-[30px] font-bold ml-7 mt-6'>
    Top Restaurants Near You</div>
  <div className='flex justify-center items-center flex-wrap gap-[30px]'>
{meals.map((item,index)=>{
    return(
        <div key={index} className='m-3'>
        <Restauranitems id={item.idMeal}
        poster = {item.strMealThumb}
                />
     
     <div className='font-bold'>{item.strMeal}</div>
     <div className='font-mono text-gray-500'>{Ratings}</div>


        </div>

    )
})}

    </div>
    </>

  )
}

export default Meals