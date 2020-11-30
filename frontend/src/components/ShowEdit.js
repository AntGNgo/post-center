import React from 'react'

const ShowEdit = ({ postInfo, onChangeEdits, onClickSendEdit }) => {
        return (
            <form className='flex flex-col mt-5'>
                <input type="text" id='title' placeholder={`${postInfo.title} (unchanged)`} onChange={onChangeEdits} className='border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5 mb-5' />
                <textarea type="text" id='body' placeholder={`${postInfo.body} (unchanged)`} onChange={onChangeEdits} className='border-2 rounded-xl border-gray-400 focus:border-gray-500 focus:outline-none p-5'></textarea>
                <button onClick={onClickSendEdit} className="border-2 rounded-full border-gray-400 cursor-pointer hover:border-gray-500 focus:outline-none transform active:scale-95 self-end mr-20 mt-10 px-10 py-2">Update</button>
            </form>
        )
}

export default ShowEdit