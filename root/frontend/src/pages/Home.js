import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../components/Post'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then((response) => {
                console.log(response.data[0].postDate.toString())
            })
    })

  return (
    <div className="container mx-auto px-2 bg-white h-screen">
      <Post />
    </div>
  );
}

export default Home;
