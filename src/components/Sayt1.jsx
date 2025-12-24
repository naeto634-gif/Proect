import React from 'react'
import devuska from '../assets/devuska.png'
import liniya from '../assets/liniya.svg'

const Sayt1 = () => {
    return (
        <div className='relative overflow-hidden'>
            
            <div className='absolute top-0 left-0 -z-10 w-full overflow-hidden'>
                <img 
                    src={liniya} 
                    alt='' 
                    className="w-full max-w-none scale-150 opacity-70"
                />
            </div>
            
            <div className="flex items-center">
                
                <div className="w-1/2 ml-40">
                    <div className='text-[56px] font-semibold leading-tight mt-20'>
                        <p>Make your business</p>
                        <p className='text-[#FFCC00]'>more powerful</p>
                        <p>with us</p>
                    </div>
                    
                    <div className='text-[20px] mt-10 text-gray-600'>
                        <p>We provide various services to</p>
                        <p>make your business grow and get bigger.</p>
                        <p>Your satisfaction is our first priority.</p>
                    </div>

                    <div className="mt-20">
                        <a 
                            href="#" 
                            className='inline-block bg-[#4c40f7] rounded-2xl text-white px-[70px] py-[19px] text-lg font-medium hover:bg-[#3a30d5] transition duration-300'
                        >
                            Get Started
                        </a>
                    </div>
                </div>
                
                
                <div className="w-1/2 -ml-20">
                    <img 
                        className="w-full max-w-4xl" 
                        src={devuska} 
                        alt='Business woman'
                    />
                </div>
            </div>
        </div>
    )
}

export default Sayt1