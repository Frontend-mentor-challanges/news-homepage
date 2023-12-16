import React from 'react'
import MainNews from './MainNews'
import Featured from './Featured'

const Home: React.FC = () => {
    return (
        <div className='border border-black desktop:py-10 flex flex-col mobile:py-5'>
            <MainNews />
            <Featured />
        </div>
    )
}

export default Home
