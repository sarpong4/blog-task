const mongoose, {Schema} = require('mongoose')
const {composeWithMongoose} = require('graphql-compose-mongoose')

export const BlogSchema = new Schema(
    {
        heading: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        writtenOn: {
            type: Date,
            required: true,
        },
        category: {
            type: String,
            enum: ['REACTJS',
                'NODEJS',
                'TYPESCIRPT',
                'JAVASCRIPT',
                'EXPRESS',
                'BACKEND',
                'FRONTEND',],
            default: 'BACKEND'
        },
        total_likes: {
            type: Number,
            required: false
        },
        total_unlikes: {
            type: Number,
            required: false
        },
        comments: {
            type: Array,
            required: true,
            default: []
        }
    }
)

const Blog = mongoose.model('Blog', BlogSchema)
const blogTC = composeWithMongoose(Blog)

module.exports = { Blog, blogTC}