import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <div className='flex justify-between p-7 items-center font-light'>
            <h1 className='text-3xl'>Post Center</h1>
            <ul className='flex text-lg'>
                <Link to="/" className="border-b border-white hover:border-black"><li>Home</li></Link>
                <Link to='/post' className='ml-5 border-b border-white hover:border-black' ><li >Post</li></Link>
                <Link to='/about' className='ml-5 border-b border-white hover:border-black' ><li >About</li></Link>
            </ul>
        </div>
    )
}

export default Navigation