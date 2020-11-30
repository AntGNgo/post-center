const express = require('express')
const router = express.Router()
const Post = require('../models/post')


router.get('/posts', async (req, res) => {
    console.log('here')
    const posts = await Post.find({})

    if(!posts) {
        res.status(404).send('No posts found!')
    }

    res.send(posts)
})

router.post('/post', async (req, res) => {
    const post = await Post.create({
        title: req.body.title,
        body: req.body.body
    })

    if(!post) {
        res.status(400).send("Something went wrong with your post!")
    }

    post.save()
    res.send(post)
})

router.patch('/post/update/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const validUpdates = ['title', 'body']
    const isValidUpdate = updates.every((update) => validUpdates.includes(update))

    if(!isValidUpdate) {
        return res.status(400).send('Not a valid update.')
    }

    try {
        const post = await Post.findByIdAndUpdate(req.params.id)

        if(!post) {
            res.status(404).send('Post not found.')
        }

        updates.forEach((update) => {
            post[update] = req.body[update]
            
        })

        await post.save()

        res.send(post)

    } catch (error) {
        res.status(500).send()
    }
    
})


router.delete('/post/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id)

    if(!post) {
        res.status(404).send("Post was not found!")
    }

    res.send(`${post.title} was deleted`)
})

module.exports = router