import React from 'react'
import './App.css'
import Navbar from '@/components/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/route'

const App = () => {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App