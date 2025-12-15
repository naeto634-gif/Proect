import React from 'react'
import logo from '../assets/logo.svg'

const Header =() => {
  return (
    <div className = 'flex justify-between mt-7 items-center mx-40'>
      <div className = 'bg-[#4c40f7] rounded-2xl p-3.5 shadow-[-5px_10px_30px_rgba(76,64,247,0.5)]'>
          <img src={logo} alt=''/>
      </div>

      <div className='flex gap-[81px] text-[20px]'>
        <a href="" className='text-[#4C40F7]'>Home</a>
        <a href="">Works</a>
        <a href="">About</a>
      </div>
      <div className="l">
        <a href="" className='bg-[#4c40f7] rounded-2xl text-white px-[35px] py-[19px]'>
          contact us
        </a>
      </div>
    </div>
  )
}
export default Header

























