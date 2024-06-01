import React from 'react'
import { footerlogo } from '../Constant/utils'
import { Link } from 'react-router-dom'
import Body from '../Body/body'

export const Footer = () => {
  return (
    <>
    <div className='bg-black p-10 flex justify-around text-white flex-wrap gap-16'>
        <img alt='logo' src={footerlogo}
        className='h-10'
        />
        <div className='text-white'>© Bhavil</div>
        <div className='flex flex-col gap-3'>
        <p className='text-xl font-bold'>
       Company
        </p>
        <p>
        <Link to='/'>Home</Link>
        </p>
        <p>
            <Link to='/Meals'>Top Restaurants</Link>
            </p>
        <p>
        About Us
        </p>
        <p>
        Help & Support
        </p>
        <p>
       Partner with us
        </p>
        <p>
        Ride with Us
        </p>
        </div>
       
        <div className='flex flex-col gap-3'>
        
        <p className='font-bold text-xl'>
        Contact us
        </p>
        <p>
        Help & Support
        </p>
        <p>
       Partner with us
        </p>
        <p>
        Ride with Us
        </p>
        </div>
        {/* <div className='flex flex-col gap-3'>
        
        <p className='font-bold text-xl'>
        Legal
        </p>
        <p>
        Help & Support
        </p>
        <p>
       Partner with us
        </p>
        <p>
        Ride with Us
        </p>
        </div>
        */}
        
        <div className='flex flex-col gap-3'>
        
        <p className='font-bold text-xl'>
        About Us
        </p>
        <p>
        Help & Support
        </p>
        <p>
       Partner with us
        </p>
        <p>
        Ride with Us
        </p>
        </div>
        <div className='flex flex-col gap-3'>
       
        <p className='font-bold text-xl'>
        We deliver to:
        </p>
        <p>
        Pune
        </p>
        <p>
       Bangalore
        </p>
        <p>
       Mumbai
        </p>
        <select className='text-black'>
         <option>589 cities</option>
        </select>
        </div>
        </div>
        </>
  )
}
