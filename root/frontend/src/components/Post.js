import React from 'react'

const Post = ({ postInfo, onClickDelete }) => {
    
    return(
        <div className="flex items-center justify-between">
        <div key={postInfo._id}>
            <h1 className="text-xl mt-5">{postInfo.title}</h1>
            <h2 className='text-sm'>{postInfo.postDate.slice(0,10)}</h2>
            <p className='mt-4 px-6 pb-4 leading-6 border-b border-grey-500'>{postInfo.body}</p>
        </div>
        <div className='flex flex-col items-center'>
            <button>Edit</button>
            <a onClick={() => onClickDelete(postInfo._id)}>X</a>
        </div>
        </div>
    )
}

export default Post