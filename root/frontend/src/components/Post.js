import React, { useState } from 'react'
import axios from 'axios'
import ShowEdit from '../components/ShowEdit'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      textAlign            : 'center'
    }
  };

  Modal.setAppElement('#root')


const Post = ({ postInfo, onClickDelete }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [content, updateContent] = useState({
        title: postInfo.title,
        body: postInfo.body
    })
    const [editValues, setEditValues] = useState({
        title: postInfo.title,
        body: postInfo.body
    })
    const [modalIsOpen,setIsOpen] = useState(false)

      

    
    const onClickEdit = () => {
        setIsEditing(!isEditing)
    }

    const onChangeEdits = (e) => {
        setEditValues({
            ...editValues,
            [e.target.id] : e.target.value
        })
    }

    
    const onClickSendEdit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:4000/post/update/${postInfo._id}`, editValues)
            .then((response) => {
                updateContent({
                    title: editValues.title,
                    body: editValues.body
                })
                setIsOpen(true)
            })
            .catch((error) => {
                return console.log(error)
            })
        
    }

    return(
        <div>
            <div className="flex items-center justify-between border-b border-grey-500">
                <div key={postInfo._id}>
                    <h1 className="text-xl mt-5">{content.title}</h1>
                    <h2 className='text-sm'>{postInfo.postDate.slice(0,10)}</h2>
                    <p className='mt-4 px-6 pb-4 leading-6'>{content.body}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={onClickEdit}>Edit</button>
                    <a onClick={() => onClickDelete(postInfo._id)}>X</a>
                </div>
            </div>
            {isEditing ? <ShowEdit postInfo={postInfo} onChangeEdits={onChangeEdits} onClickSendEdit={onClickSendEdit} /> : null}
            <Modal isOpen={modalIsOpen} contentLabel="Minimal Modal Example" style={customStyles} >
                <h1 className='mb-5'>Post has been updated!</h1>
                <a onClick={() => setIsOpen(false)} className='border-b border-white hover:border-black cursor-pointer'>OK</a>
            </Modal>    
        </div>
    )
}

export default Post