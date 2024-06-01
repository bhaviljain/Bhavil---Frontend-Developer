import React from 'react'
import { logo } from '../Constant/utils'

const Header = ({handleFilterSearch}) => {
 
  return (
    
    <div className='flex justify-between shadow-lg z-10 w-full bg-white fixed'>
      <img alt='logo' src={logo} className='h-16 onplusnord3:h-10'
      />
  <form className='pr-[20%] '>
      
      <input className='pt-2  border border-black 
      w-96 rounded-2xl text-center mt-3.5 onplusnord3:w-44 onplusnord3:m-2'
        placeholder="Search for your favourite food..."
        
        onChange={e =>handleFilterSearch(e.target.value)}
      />
    </form>

    </div>
  )
}

export default Header