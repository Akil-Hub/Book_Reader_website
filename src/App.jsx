import React, { useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/route'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '@/store/bookSlice'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
 
  }, [])
  
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App