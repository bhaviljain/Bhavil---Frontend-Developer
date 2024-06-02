import React, { useEffect, useState } from 'react'
import { Ratings } from '../Constant/utils'
import Restauranitems from './Restauranitems'

const Meals = () => {
  //state for storing the data
  const [meals, setMeals] = useState([])

  //This component is to redirect the user to show the ingrediants of the dishes for the same he clicks
  const fetchMeals = async () => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const res = await data.json()
    setMeals(res.meals)
  }
  useEffect(() => {
    fetchMeals()
  }, [])
  return (
    <>
      <div className='text-[30px] font-bold ml-7 mt-6 iPhoneSE:mt-28 SamsungS8:mt-12'>
        Top Restaurants Near You</div>
      <div className='flex justify-center items-center flex-wrap gap-[30px]'>
        {meals.map((item, idMeal) => {
          return (

            <div key={idMeal} className='m-3'>

{/* //passing id , image of the dish as props */}

              <Restauranitems id={item.idMeal}
                poster={item.strMealThumb}
              />

              <div className='font-bold'>{item.strMeal}</div>
              <div className='font-mono text-gray-500'>{Ratings}4.5</div>


            </div>

          )
        })}

      </div>
    </>

  )
}

export default Meals