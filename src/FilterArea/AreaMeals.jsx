import React, {  useState } from 'react'
import Data from '../DataForFilterByArea/Data'
import Filterdata from './CountryFoodData';
import CountryFilterBtn from './CountryFilterBtn';
const AreaMeals = () => {
   
   
  
 const [items,setItems] = useState(Data)
 const[Filter,setFilter] = useState(false)
 const[countries, setCountry]= useState([])
 const [show,setShow] = useState(false)

 const filterButtons = [...new Set(Data.map((val)=>val.country))]

 const FilterItems = (categories)=>{
const newItems = Data.filter((newVal)=> newVal.country === categories)
setItems(newItems)
setCountry(categories)
 }

 const ascending = () =>{
  let AscendingOrder = [...Data]
  if(AscendingOrder.length > 0)
    {
      let result = AscendingOrder.sort((a,b)=>
        a.strMeal.localeCompare(b.strMeal))
      setItems(result)
      
    }
 }

 const btnOFFandONfilterBTN = () =>{
  setFilter(!Filter)
  setShow(!show)
 }
  return (
    
    <>
    
       
   {Filter ? (<h2 className='text-center text-4xl font-bold mt-10'>{countries}</h2>): 
   <h2 className='text-center text-4xl font-bold mt-10'>World Food</h2>
   }
    <button onClick={btnOFFandONfilterBTN} className='flex cursor-pointer border border-gray-400 ml-2 rounded-xl hover:bg-gray-400'>
      <img alt='logo' src='https://img.icons8.com/?size=100&id=84052&format=png&color=000000' className='h-4 mt-1'/>
      Filter Data</button>
    {Filter && <CountryFilterBtn filterButtons={filterButtons}
    FilterItems={FilterItems}
    setItems={setItems}
    countries={countries}
    ascending={ascending}
    />}
  
    <Filterdata items ={items}
    
    />
   </>

  )
}

export default AreaMeals