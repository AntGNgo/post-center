import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../components/Post'

function Home() {
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then((response) => {
                setPosts(response.data)
            })
    }, [])

    const onClickDelete = (id) => {
      axios.delete(`http://localhost:4000/post/${id}`)
          .then((response) => {
              console.log(response)
          })
          .catch((error) => {
              console.log(error)
          })
      setPosts(posts.filter((post) => {
        return post._id !== id
      }))
  }

  return (
    <div className="container mx-auto px-2 bg-white h-screen">
      {posts.map((post) => <Post key={post._id} postInfo={post} onClickDelete={onClickDelete} />)}
    </div>
  );
}

export default Home;
