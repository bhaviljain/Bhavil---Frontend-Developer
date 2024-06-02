import React from 'react'
import { Ratings } from '../Constant/utils';

const CountryFoodData = ({items}) => {
  
  //shows the data into the UI

  return (
    <div>
      
        <div className='flex flex-wrap justify-center items-center gap-16 mt-5 '>
            {items && items?.map((val,index)=>(
                <div key={index} className='bg-gray-100 p-3 rounded-xl transition ease-in-out 
                hover:-translate-y-2 hover:scale-100 duration-300 iPhoneSE:h-100 iPhoneSE:w-28 SamsungS8:h-100 SamsungS8:w-32'>
                    <img alt='logo' src={val.strMealThumb}
                    className='h-[135px] w-[170px] rounded-2xl transition ease-in-out hover:-translate-y-2.5 hover:scale-110 duration-300 iPhoneSE:h-24 iPhoneSE:w-24 zfold:h-24 zfold:w-24'
                    /> 
                    <h2 className='w-auto font-bold zfold:w-20'>{val.strMeal}</h2>
                    <div className='font-mono opacity-70'>{Ratings}4.6</div>
                    <div className='font-mono opacity-70'>{val.country}</div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default CountryFoodData