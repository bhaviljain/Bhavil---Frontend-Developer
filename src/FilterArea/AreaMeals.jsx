import React, { useState } from 'react'
import Data from '../DataForFilterByArea/Data'
import Filterdata from './CountryFoodData';
import CountryFilterBtn from './CountryFilterBtn';
import CountryFoodData from './CountryFoodData';



const AreaMeals = () => {
  //state for storing items of all country
  const [items, setItems] = useState(Data)

  //state for toggling the filter button
  const [Filter, setFilter] = useState(false)

  //state for showing that particular country user had clicked
  const [countries, setCountry] = useState([])

  //function for getting the countries name
  const filterButtons = [...new Set(Data.map((val) => val.country))]


  //function for getting the dishes of that particular country
  const FilterItems = (categories) => {
    const newItems = Data.filter((newVal) => newVal.country === categories)
    setItems(newItems)
    setCountry(categories)
  }

  //sorting the dishes in ascending order
  const ascending = () => {
    let AscendingOrder = [...Data]
    if (AscendingOrder.length > 0) {
      let result = AscendingOrder.sort((a, b) =>
        a.strMeal.localeCompare(b.strMeal))
      setItems(result)

    }
  }

  const btnOFFandONfilterBTN = () => {
    setFilter(!Filter)
  }
  return (

    <>


      {Filter ? (<h2 className='text-center text-4xl font-bold mt-10'>{countries}</h2>) :
        <h2 className='text-center text-4xl font-bold mt-10'>World Food</h2>}


      <button onClick={btnOFFandONfilterBTN} className='flex cursor-pointer border border-gray-400 ml-2 rounded-xl hover:bg-gray-400'>
        <img alt='logo' src='https://img.icons8.com/?size=100&id=84052&format=png&color=000000' className='h-4 mt-1' />
        Filter Data</button>


      {Filter && <CountryFilterBtn filterButtons={filterButtons}
        FilterItems={FilterItems}
        setItems={setItems}
        countries={countries}
        ascending={ascending}
      />}

      <CountryFoodData items={items}

      />
    </>

  )
}

export default AreaMeals