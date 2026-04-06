import React from 'react'
import bannerBook from '../assets/blackBook.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 container mx-auto rounded-lg p-5 py-15 px-20'>
       <div className="left w-120">
         <h1 className='text-5xl font-bold '>Books to freshen up your bookshelf</h1>
         <button className='btn mt-10 btn-success text-white'>View The List</button>
       </div>

       <div className="">
        <img src={bannerBook}  />
       </div>
    </div>
  )
}

export default Banner