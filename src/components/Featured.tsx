import React from 'react'
import Blogs from './Blogs'
import { blogs } from '../constants'

const Featured: React.FC = () => {
    return (
        <div className='mt-10 grid grid-cols-9'>
            {blogs.map((blog) => (
                <Blogs key={blog.id} blog={blog} />
            ))}

        </div>
    )
}

export default Featured
