import React from 'react'
import devuska from '../assets/devuska.png'
import liniya from '../assets/liniya.svg'

const Sayt1 = () => {
    return (

        <div className=' ' >
            <div className="flex">  
                <div className="">
                    <div className=' absolute text-[56px] mt-70 ml-50 font-semibold '>
                        <p>Make your business</p>
                        <p className='text-[#FFCC00] '> more powerful</p>
                        <p>with us</p>
                    </div>
                    <div className='text-[20px] ml-50 mt-10 '>
                        <p>We provide various services to</p>
                        <p>make your business grow and get bigger. Your</p>
                        <p>satisfaction is our first priority.</p>
                    </div>

                    <div className="z-3 ml-80 mt-20 ">
                        <a href="" className='bg-[#4c40f7] rounded-2xl text-white px-[70px] py-[19px] max-w-50 max-h-50 '>
                            Get Started
                        </a>
                    </div>
                </div>
                <div className='-z-10 -mr-60'>
                    <img className='' src={devuska} alt='' width={1200} ></img>
                </div>
            </div>
            <div className='absolute -z-10 -mt-170 '>
                <img src={liniya} alt=''width={3400}></img>
            </div>
        </div>

    )
}
export default Sayt1 