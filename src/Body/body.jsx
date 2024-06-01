import { useEffect, useState } from 'react'
import Carousels from '../ImageSlider/Carousels'
import Header from '../HeaderSection/Header'


function Body() {
  const [ResData, setResData] = useState([])
 const [FilterSearchData, setFilterSearchData] = useState([])
 const [modal, setmodal] = useState({
  strInstructions:"",
  strMeal:""
 })
 const [openModal , setOpenmodal] = useState(false)
 
  const fetchRest = async () =>
    {
      const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      const res =  await data.json()
      // console.log(res);
      setResData(res.meals)
      setFilterSearchData(res.meals)
    }
    useEffect(()=>{
      fetchRest()
    },[])

    const showDetail = async(strMeal) =>
      {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
        const res = await data.json()
        console.log(res.meals);
        setmodal(res.meals)
        console.log(modal);
        setOpenmodal(!openModal)
       
      }
      const handleFilterSearch = (value) =>{ 
  const result = FilterSearchData.filter((item)=>
  {
    return item.strMeal.toLocaleLowerCase().includes(value)
  })
  setResData(result)
      }
      
    
  return (
    <>
      
        <Header FilterSearchData={FilterSearchData}
   handleFilterSearch={handleFilterSearch}
   ResData={ResData}
   />
<Carousels/>
  <div className={`flex flex-wrap justify-center items-center `}>
          

{ResData && ResData.map((items,index)=>{
 return(
   <div className='mt-16 p-6'>  
    <div key={items.idCategory}
   className={`${openModal ? "blur" : ""}`}
   >
     <img alt='logo' src={items.strMealThumb}
     className='h-[115px] w-[170px] rounded-2xl transition ease-in-out hover:-translate-y-2.5 hover:scale-110 duration-300' 
     onClick={(e)=>showDetail(items.strMeal)}
    />
   <h4 className='font-bold'>{items.strMeal}</h4>
  
   </div>
  
   </div>

   )
})}


 {openModal && Object.keys(modal).map((items)=>{
  const {strInstructions,strMeal} = modal[items]
  return(
    <>
    
    <div className='absolute h-100 w-[80%] bg-[#FC8019] 
    top-[60%] rounded-3xl animate-rotate-y'>
      <span className='px-2 py-0.5 bg-black rounded-full text-white cursor-pointer '
      onClick={()=>setOpenmodal(false)}
      >X</span>
            <div className='font-bold text-2xl text-center'>{strMeal}</div>

      <div className='font-bold '>{strInstructions}</div>
    </div>
  
    </>

  )
 })}

</div> 



    
    </>
  )
}

export default Body



 