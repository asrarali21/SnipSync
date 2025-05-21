
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Snip from './components/Snip'
import Viewsnip from './components/Viewsnip'

const router = createBrowserRouter([
  {
    path : "/",
    element : <div>
      <Navbar/>
      <Home/>
    </div>
  },
   {
    path : "/snip",
    element : <div>
      <Navbar/>
      <Snip/>
    </div>
  },
   {
    path : "/viewsnip/:id",
    element : <div>
      <Navbar/>
      <Viewsnip/>
    </div>
  },
  
])

function App() {

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
