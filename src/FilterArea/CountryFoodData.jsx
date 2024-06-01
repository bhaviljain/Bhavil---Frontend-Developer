import React from 'react'

const CountryFoodData = ({items}) => {
  console.log(items);
  return (
    <div>
      
        <div className='flex flex-wrap justify-center items-center gap-16 mt-5'>
            {items && items?.map((val,index)=>(
                <div key={index}>
                    <img alt='logo' src={val.strMealThumb}
                    className='h-[115px] w-[170px] rounded-2xl transition ease-in-out hover:-translate-y-2.5 hover:scale-110 duration-300'
                    /> 
                    <h2 className='text-center w-auto'>{val.strMeal}</h2>
                    
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default CountryFoodData