import React, { useState } from 'react'
import Body from './body'
import Meals from '../TopRestaurants/Meals'
import AreaMeals from '../FilterArea/AreaMeals'


const Home = () => {

  return (
    <div>
    <Body/>
          
    <AreaMeals />
    <Meals/>

    </div>
  )
}

export default Home