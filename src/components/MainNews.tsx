import React from 'react'
import LatestNews from './LatestNews'
import HeroSection from './HeroSection'

const MainNews: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-9'>
                <HeroSection />
                <LatestNews />
            </div>

        </>

    )
}

export default MainNews
