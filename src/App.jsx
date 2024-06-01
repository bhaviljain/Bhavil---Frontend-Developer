import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import Meals from './TopRestaurants/Meals'
import Ingrediants from './TopRestaurants/Ingrediants'
import Home from './Body/Home'


function App() {
 
const appRouter = createBrowserRouter([
  
  {
    path: '/',
    element : <Layout />,
    children:[
      {
          path:'/',
  element:<Home />
},
{
  path:"/Meals",
  element:<Meals/>
},
{
  path:'/:itemID',
  element:<Ingrediants />
},

]
}
])

  return (
    
    <div>
    <RouterProvider router={appRouter}>
    
    <Home />
      </RouterProvider>
    
        </div>
    
  )
}

export default App
