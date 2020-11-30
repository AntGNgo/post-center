const mongoose = require('mongoose')
const Filter = require('bad-words')

filter = new Filter()

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        validate: {
            validator: (value) => {
               return !filter.isProfane(value)
            },
            message: "Try to not curse here!"
        },
        required: true
    },
    postDate: {
        type: Date,
        default: new Date()
    },
    body: {
        type: String,
        validate: {
            validator: (value) => {
               return !filter.isProfane(value)
            },
            message: "Try to not curse here!"
        },
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post