import React, { useState } from 'react'
import axios from 'axios'

const NewPost = () => {
    const [postValues, setPostValues] = useState({})
    const [isShowingError, setIsShowingError] = useState(false)
    const [isShowingSuccess, setIsShowingSuccess] = useState(false)

    const onChange = (e) => {
        setPostValues({
            ...postValues,
            [e.target.id] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/post', postValues)
            .then((response) => {
                setIsShowingSuccess(true)
                setTimeout(() => {
                    setIsShowingSuccess(false)
                }, 3000);
            })
            .catch((error) => {
                setIsShowingError(true)
                setTimeout(() => {
                    setIsShowingError(false)
                }, 3000);
            })
    }

    return(
        <form onSubmit={onSubmit} className='flex flex-col'>
            <input type="text" id='title' onChange={onChange} required={true} className='border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5 mb-5' placeholder="Title" />
            <textarea type="text" id='body' onChange={onChange} required={true} className='border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5' placeholder="Tell your story here..."></textarea>
            <button className="border-2 rounded-full border-gray-400 cursor-pointer hover:border-gray-500 focus:outline-none transform active:scale-95 self-end mr-20 mt-10 px-10 py-2" >Post!</button>
            {isShowingSuccess ? <p className='self-center'>Thanks for your submission!</p> : null }
            {isShowingError ? <p className='self-center'>That didn't work try again!</p> : null }
        </form>
    )
}

export default NewPost