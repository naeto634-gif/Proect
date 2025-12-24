import React from "react"
import { BadgeCheck } from 'lucide-react'

const Sayt6 = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto py-[120px] px-[120px]">
           
            <div className="flex justify-between items-start mb-[100px]">
                <h2 className="text-[56px] font-bold leading-[1.2] max-w-[600px]">
                    Customer satisfaction is<br />our first priority
                </h2>
                <p className="text-gray-600 text-lg max-w-[400px] mt-4">
                    We serve many customers, ranging from small businesses, medium enterprises to large corporations
                </p>
            </div>

            
            <div className="flex justify-between mb-[120px]">
                <div className="text-center">
                    <p className="text-[#4C40F7] text-[56px] font-bold">70K+</p>
                    <p className="text-gray-600 mt-4">We have more than<br />customers</p>
                </div>
                <div className="text-center">
                    <p className="text-[#FF6800] text-[56px] font-bold">100K+</p>
                    <p className="text-gray-600 mt-4">Projects we have<br />completed</p>
                </div>
                <div className="text-center">
                    <p className="text-[#FF2D59] text-[56px] font-bold">10M+</p>
                    <p className="text-gray-600 mt-4">People who are helped<br />because of our hard work</p>
                </div>
                <div className="text-center">
                    <p className="text-[#4ADB61] text-[56px] font-bold">200+</p>
                    <p className="text-gray-600 mt-4">Support from world-<br />renowned companies</p>
                </div>
            </div>

            
            <div className="grid grid-cols-2 gap-x-32 gap-y-8">
                <div className="flex items-start gap-4">
                    <BadgeCheck className="text-[#4C40F7] mt-1 flex-shrink-0" size={24} />
                    <p className="font-medium">Provide idea support from our creative team</p>
                </div>
                <div className="flex items-start gap-4">
                    <BadgeCheck className="text-[#4C40F7] mt-1 flex-shrink-0" size={24} />
                    <p className="font-medium">Support for service 24 hours a week</p>
                </div>
                <div className="flex items-start gap-4">
                    <BadgeCheck className="text-[#4C40F7] mt-1 flex-shrink-0" size={24} />
                    <p className="font-medium">Provide attractive and professional design services</p>
                </div>
                <div className="flex items-start gap-4">
                    <BadgeCheck className="text-[#4C40F7] mt-1 flex-shrink-0" size={24} />
                    <p className="font-medium">Helping our customers to grow their business</p>
                </div>
                <div className="flex items-start gap-4">
                    <BadgeCheck className="text-[#4C40F7] mt-1 flex-shrink-0" size={24} />
                    <p className="font-medium">Provide support to market products through online marketplace</p>
                </div>
            </div>
        </div>
    )
}

export default Sayt6