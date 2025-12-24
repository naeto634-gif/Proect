import React from "react"
import Telefon from '../assets/Telefon.svg'
import Dom from '../assets/Dom.svg'
import Statistika from '../assets/Statistika.svg'
import { ArrowRight } from 'lucide-react';
const Sayt4 =() => {
  return (
     <div className="display flex justify-center mt-[16px] ml-[-630px]">
             <div className="flex">
               <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl">
                 <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
                   <div className="bg-[#FFCC00] rounded-full shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex" >
                   <img className='' src={Telefon} alt="" />
                   </div>
                   <div className="">
                     <p className='text-[20px] font-semibold mb-6 text-black'>App Development</p>
                     <p className='text-[15px] font-normal text-black'>We help develop company<br />mobile apps to be more<br />professional and attractive</p>
                   </div>
                   <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                     <ArrowRight />
                   </div>
                 </div>
               </div>
             </div>
              <div className="absolute">
                        <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl ml-[650px]">
                          <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
                            <div className="bg-[#007BFF] rounded-full shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex">
                            <img className='' src={Dom} alt="" />
                            </div>
                            <div className="">
                              <p className='text-[20px] font-semibold mb-6 text-black'>Business Growth</p>
                              <p className='text-[15px] font-normal text-black'>We also provide services by <br />providing input for your <br />business growth</p>
                            </div>
                            <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                              <ArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
              <div className="absolute">
                        <div className="w-[322px] h-[438px] bg-[#ffffff] rounded-2xl shadow-xl ml-[1300px]">
                          <div className=" text-center items-center flex flex-col justify-between p-11 h-full">
                            <div className="bg-[#FF6800] rounded-full shadow-xl w-24 h-24 items-center align-middle text-center  justify-center flex">
                            <img className='' src={Statistika} alt="" />
                            </div>
                            <div className="">
                              <p className='text-[20px] font-semibold mb-6 text-black'>Digital marketing</p>
                              <p className='text-[15px] font-normal text-black'>We also help you market your<br />products through an online<br />marketplace</p>
                            </div>
                            <div className="bg-[#F3F4F6] rounded-full p-4 text-[#4C40F7]">
                              <ArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>        
           </div>
    )
}
export default Sayt4