import React from 'react'
import { newNews } from '../constants'

const LatestNews: React.FC = () => {
    return (
        <div className='bg-very_dark_blue  desktop:col-start-10 desktop:col-end-13 mobile:col-span-12'>
            <h1 className='text-orange_primary p-5 text-3xl font-inter font-medium'>New</h1>
            {newNews.map((news) => (
                <div key={news.id} className=' font-inter px-5 flex flex-col gap-5 mb-8'>
                    <h5 className='font-semibold text-off_white'>{news.title}</h5>
                    <p className='text-grayish_blue font-normal text-sm'>{news.description}</p>

                    {news.hasBorder ? (<hr />) : null}
                </div>
            ))}
        </div>
    )
}

export default LatestNews
