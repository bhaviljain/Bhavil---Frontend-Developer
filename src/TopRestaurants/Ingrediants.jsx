import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Ingrediants = () => {
  // useparams helps to access the data of that ID to manage dynamic routing
const {itemID} = useParams()

//state for storing the data
const [ingrediants, setIngrediants] = useState([])

//use Navigate to make a back button
const navigate = useNavigate()

const backBtn = () =>{
  // (-1) so that user can go back 1 page behind thru back button
  navigate(-1)
}


    const fetchIngrediants = async () =>{
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + itemID)
        const res = await data.json()
        setIngrediants(res.meals)
        
    }


    useEffect(()=>{
        fetchIngrediants()
    },[])

  return (
    <>  
  
    <button onClick={backBtn}
    className='m-4 bg-[rgb(252,128,25)] p-2 px-3 rounded-full
    hover:font-extrabold
    '>🡐
    </button>
    <p className='font-bold ml-2'>Go back</p>

   {ingrediants && ingrediants.map((item,idMeal)=>{
    return(
      
        <div key={idMeal} className='flex flex-col items-center gap-5'>
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