import React from 'react'
import { Ratings } from '../Constant/utils';

const CountryFoodData = ({items}) => {
  console.log(items);
  return (
    <div>
      
        <div className='flex flex-wrap justify-center items-center gap-16 mt-5 '>
            {items && items?.map((val,index)=>(
                <div key={index} className='bg-gray-100 p-3 h-52 rounded-xl transition ease-in-out 
                hover:-translate-y-2 hover:scale-100 duration-300'>
                    <img alt='logo' src={val.strMealThumb}
                    className='h-[115px] w-[170px] rounded-2xl transition ease-in-out hover:-translate-y-2.5 hover:scale-110 duration-300'
                    /> 
                    <h2 className='w-auto font-bold'>{val.strMeal}</h2>
                    <div className='font-mono opacity-70'>{Ratings}4.6</div>
                    <div className='font-mono opacity-70'>{val.country}</div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default CountryFoodData