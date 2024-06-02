import React from 'react'
import Data from '../DataForFilterByArea/Data'
import { sort } from '../Constant/utils';

const CountryFilterBtn = ({filterButtons,FilterItems,setItems,ascending}) => {
  //filterButtons : has the name of all the countries
  //FilterItems : stores the data of the dishes of that particular country user has clicked on
  //set items has all the dishes , when user clickes the ALL button
  return (
    <div className='m-2'>

      <div className='flex hover:bg-gray-500 hover:rounded-xl w-max mt-5 iPhoneSE:ml-2'>
   
      {/* sort icon */}
      <img alt='sortingLogo' src={sort} className='h-[20px] border border-gray-500 rounded-l-xl'/>

      {/* function for sort ascending */}
      <button onClick={ascending}
      className='border border-gray-500 rounded-r-xl text-[12px]'
      >Ascending</button>
      </div>
    
        <div className='flex mt-7 justify-evenly items-center flex-wrap '>
            {filterButtons && filterButtons.map((val,index)=>(
              <div key={index} className={`border border-gray-600 rounded-xl iPhoneSE:m-1 SamsungS8:m-1 zfold:m-1`}>
                <button className='hover:bg-gray-500 px-2 hover:rounded-xl'
                onClick={()=>FilterItems(val)}
                >{val}</button>
                      
                      </div>

            ))}
           <button onClick={()=>setItems(Data)}
           className='border border-gray-600 rounded-xl px-5 hover:bg-gray-500 hover:rounded-xl'
           >All</button>
        </div>
       
    </div>
  )
}

export default CountryFilterBtn