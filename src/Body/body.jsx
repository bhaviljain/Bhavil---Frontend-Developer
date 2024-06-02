import { useEffect, useState } from 'react'
import Carousels from '../ImageSlider/Carousels'
import Header from '../HeaderSection/Header'
import { Ratings } from '../Constant/utils'


function Body() {


  //state for storing meals
  const [ResData, setResData] = useState([])

  //state for search functionality
  const [FilterSearchData, setFilterSearchData] = useState([])

  //state for modal, we are showing name and the steps to make the dish
  const [modal, setmodal] = useState({
    strInstructions: "",
    strMeal: ""
  })
  //state for modal to close and open
  const [openModal, setOpenmodal] = useState(false)

  const fetchRest = async () => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    const res = await data.json()
    setResData(res.meals)
    setFilterSearchData(res.meals)
  }
  useEffect(() => {
    fetchRest()
  }, [])


  
  //function been created to open modal for the particular image the user has clicked on
  const showDetail = async (strMeal) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
    const res = await data.json()
    setmodal(res.meals)
    setOpenmodal(!openModal)

  }

  
  return (
    <>
    
      {/* search bar is in header component so passing its functionality as props (search to be typed in lowercase)*/}
      <Header FilterSearchData={FilterSearchData}
        setResData={setResData}/>


      <div className='text-black text-xl absolute top-[65px]  font-extrabold onplusnord3:ml-20 iPhoneSE:ml-20 SamsungS8:ml-20 zfold:ml-20 
      ml-2
      '>What's on your mind?</div>


      {/* Carousel component */}
      <Carousels />
      <div className={`flex flex-wrap justify-center items-center `}>

       {/* Mapping the json data into  UI */}
        {ResData && ResData.map((items, index) => {
          return (
            <div className='mt-16 p-6'>
              <div key={items.idCategory}
                className={`${openModal ? "blur" : ""} bg-gray-100 p-3 h-52 rounded-xl transition ease-in-out hover:-translate-y-2.5 hover:scale-110 duration-300`}
              >

                {/* oneplus, iphoneSE, samsung 8, zfold this are added to made the design responsive in all devices */}
                <img alt='logo' src={items.strMealThumb}
                  className='h-[115px] w-[170px] rounded-2xl onplusnord3:h-20 onplusnord3:w-20 iPhoneSE:w-20 iPhoneSE:h-20 SamsungS8:h-20 SamsungS8:w-20 zfold:h-20 zfold:w-20'
                  onClick={(e) => showDetail(items.strMeal)}
                />

                
                <h4 className='font-bold'>{items.strMeal}</h4>
                <h4 className='font-mono'>{Ratings}<span>4.3</span></h4>
                <div className='font-sans opacity-70'>{items.strCategory}</div>

              </div>

            </div>

          )
        })}

       {/* as the state made for modal was an object to map into objects so we have to make with key and value*/}
        {openModal && Object.keys(modal).map((items) => {
          const { strInstructions, strMeal } = modal[items]
          return (
            <>

              <div className='absolute h-100 w-[80%] bg-[#FC8019] 
    top-[60%] rounded-3xl animate-rotate-y'>
                <span className='px-2 py-0.5 bg-black rounded-full text-white cursor-pointer '
                  onClick={() => setOpenmodal(false)}
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



