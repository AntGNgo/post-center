import React from 'react'

const Navigation = () => {
    return(
        <div className='flex justify-between p-7 items-center font-light'>
            <h1 className='text-3xl'>Post Center</h1>
            <ul className='flex text-lg'>
                <a href="#" className="border-b border-white hover:border-black"><li>Home</li></a>
                <a className='ml-5 border-b border-white hover:border-black' href="#"><li >Post</li></a>
                <a className='ml-5 border-b border-white hover:border-black' href="#"><li >About</li></a>
            </ul>
        </div>
    )
}

export default Navigation