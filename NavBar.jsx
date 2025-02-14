import React from 'react'

export default function NavBar() {
  return (
    <div className='main flemain z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#40407a] py-4 shadow-md sticky top-0x justify-between'>
        <div className="left flex items-center space-x-3"></div>
        <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="img" />
        <h2 className="logo font-bold text-2xl text-white text-center">MovieMasala</h2>
        <div className="right">
            <ul className='flex space-x-4 text-white justify-center'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Services</li>           
            </ul>
        </div>
            
      
    </div>
  )
}
