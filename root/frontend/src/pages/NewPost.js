import React from 'react'

const NewPost = () => {
    return(
        <form className='flex flex-col'>
            <input type="text" className='border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5 mb-5' placeholder="Title" />
            <textarea type="text" className='border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5' placeholder="Tell your story here..."></textarea>
            <button className="border-2 rounded-full border-gray-400 bg-white active:bg-gray-400 cursor-pointer hover:border-gray-500 focus:outline-none self-end mr-20 mt-10 px-10 py-2" >Post!</button>
        </form>
    )
}

export default NewPost