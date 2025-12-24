import React from 'react'
import Ogon from '../assets/Ogon.svg'
import Rucka from '../assets/Rucka.svg'
import Monitor from '../assets/Monitor.svg'
import Telefon from '../assets/Telefon.svg'
import { ArrowRight, Church } from 'lucide-react';
const Sayt3 = () => {
  return (
    <div className="">
      <div className='text-center font-semibold absolute'>
        {/* <div className="">
          <p className='text-[#FF2D59] text-[20px] font-semibold'>Our Services</p>
        </div>
        <div className="text-[42px] mt-5 font-semibold">
          <p>The various services we provide to make your<br />business more powerful</p>
        </div> */}
      </div>
      <div className="display flex justify-center">
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#4C40F7] rounded-2xl shadow-[-10px_30px_70px_rgba(76,64,247,0.5)]">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <img className='shadow-[-5px_10px_30px_rgba(76,64,247,0.5)]' src={Ogon} alt="" />
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-white'>Ideate</p>
                <p className='text-[15px] font-normal text-white'>We help you develop creative<br />ideas so that your business<br />can grow more rapidly</p>
              </div>
              <div className="bg-white rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <img className='shadow-[-10px_30px_70px_rgba(219,222,225,0.4)]' src={Rucka} alt="" />
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>Design</p>
                <p className='text-[15px] font-normal text-black'>We provide services with the<br />best designs than our designer<br />team for your business</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <div className="bg-[#4ADB61] rounded-full shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex">
              <img className='' src={Monitor} alt="" />
              </div>
              <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>Web Development</p>
                <p className='text-[15px] font-normal text-black'>We help develop company<br />websites to be more<br />professional and attractive</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* <div className="display flex justify-center mt-16">
        <div className="flex">
          <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl">
            <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
              <div className="bg-[#FFCC00] rounded-full shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex" >
              <img className='' src={Phone} alt="" />
              </div>
              {/* <div className="">
                <p className='text-[20px] font-semibold mb-6 text-black'>App Development</p>
                <p className='text-[15px] font-normal text-black'>We help develop company<br />mobile apps to be more<br />professional and attractive</p>
              </div>
              <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>

        </div>
      </div> */}
    </div>
  )
}

export default Sayt3
