import React from 'react'
import pic from "../assets/image-web-3-desktop.jpg"
import mobilePic from '../assets/image-web-3-mobile.jpg'

const HeroSection: React.FC = () => {
    return (
        <div className='desktop:col-start-1 desktop:col-end-10 mobile:col-span-12'>
            {/* grid with 12 cols */}
            <div className='grid grid-cols-12' >
                <div className='col-span-12 '>
                    {/* use picture tag here */}
                    <img src={pic} alt="main image" className='object-contain' height={"100px"} />
                </div>
                <div className='desktop:col-span-6 mobile:col-span-12 py-8'>
                    <p className='break-words text-7xl font-bold font-inter text-very_dark_blue'>
                        The Bright Future of <br /> Web 3.0?
                    </p>
                </div>
                <div className='bg-pink-200 desktop:col-span-6 mobile:col-span-12'>2 cards</div>
            </div>

        </div>
    )
}

export default HeroSection
