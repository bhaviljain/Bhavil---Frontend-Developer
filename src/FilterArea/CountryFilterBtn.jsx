import React from 'react'
import Data from '../DataForFilterByArea/Data'
import { sort } from '../Constant/utils';

const CountryFilterBtn = ({filterButtons,FilterItems,setItems,ascending}) => {
  // console.log(filterButtons);
  // console.log(countries);
  return (
    <div className='m-2'>
      <div className='flex hover:bg-gray-500 hover:rounded-xl w-max mt-5 iPhoneSE:ml-2'>
      <img alt='sortingLogo' src={sort} className='h-[20px] border border-gray-500 rounded-l-xl'/>
      <button onClick={ascending}
      className='border border-gray-500 rounded-r-xl text-[12px]'
      >Ascending</button>
      </div>
    
        <div className='flex mt-7 justify-evenly items-center flex-wrap '>
            {filterButtons && filterButtons.map((val)=>(
              <div className={`border border-gray-600 rounded-xl iPhoneSE:m-1 SamsungS8:m-1 zfold:m-1`}>
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