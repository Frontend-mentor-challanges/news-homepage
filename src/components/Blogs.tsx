import React from 'react'

const Blogs: React.FC = ({ blog }) => {
    return (
        <div className='desktop:col-span-3 mobile:col-span-6 flex  gap-5'>
            <div className='flex justify-center'>
                <img src={blog.newsImg} alt="blog image" className='object-cover items-center' />
            </div>
            <div className='flex flex-col font-inter justify-evenly '>
                <h1 className='text-4xl text-grayish_blue font-bold'>0{blog.id}</h1>
                <p className='font-semibold text-very_dark_blue text-lg'>{blog.title}</p>
                <p className='text-dark_grayish_blue text-sm'>{blog.description}</p>
            </div>
        </div>


    )
}

export default Blogs
