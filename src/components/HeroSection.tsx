import React from 'react'
import pic from "../assets/image-web-3-desktop.jpg"

const HeroSection: React.FC = () => {
    return (
        <div className='desktop:col-start-1 desktop:col-end-10 mobile:col-span-12'>
            {/* grid with 12 cols */}
            <div className='grid grid-cols-12' >
                <div className='col-span-12 '>
                    {/* use picture tag here */}
                    <img src={pic} alt="main image" className='desktop:object-cover mobile:object-contain desktop:h-64  bg-pink-300 desktop:w-full ' />
                </div>
                <div className='desktop:col-span-6 mobile:col-span-12 py-8  '>
                    <p className='break-words desktop:text-6xl font-bold font-inter text-very_dark_blue'>
                        The Bright  Future of <br /> Web 3.0?
                    </p>
                </div>
                <div className='desktop:col-span-6 mobile:col-span-12 py-8   flex flex-col justify-between '>
                    <p className='break-words text-dark_grayish_blue text-lg mb-8 '>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <div className='bg-red_primary cursor-pointer hover:bg-very_dark_blue duration-150 text-off_white w-fit px-5 py-2 uppercase tracking-widest text-sm'>
                        Read more
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
