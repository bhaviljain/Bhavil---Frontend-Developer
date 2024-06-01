import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MealsID } from '../Constant/utils'

const Ingrediants = () => {
const {itemID} = useParams()
const [ingrediants, setIngrediants] = useState([])

const navigate = useNavigate()

const backBtn = () =>{
  navigate(-1)
}


    const fetchIngrediants = async () =>{
        const data = await fetch(MealsID + itemID)
        const res = await data.json()
        setIngrediants(res.meals)
        console.log(res.meals);
        
    }


    useEffect(()=>{
        fetchIngrediants()
    },[])

  return (
    <>  
  
    <button onClick={backBtn}
    className='m-4 bg-[rgb(252,128,25)] p-2 rounded-full
    '>🡸
    </button>
    <p className='font-bold ml-2'>Go back</p>

   {ingrediants && ingrediants.map((item)=>{
    return(
      
        <div className='flex flex-col items-center gap-5'>
          <h3 className='text-center font-extrabold text-2xl'>Recipe for {item.strMeal}</h3>
            <img src={item.strMealThumb}
            className='h-40 w-44 rounded-xl'
            />
            <div className='font-bold 	text-decoration-line: underline'><span className='font-medium'>Category</span> : {item.strCategory}</div>
            <div className='w-[60%] mb-11 text-left font-mono'>{item.strInstructions}</div>
            </div>
    )
   })}

    </>
  )
}

export default Ingrediants