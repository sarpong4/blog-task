const mongoose = require('mongoose')
const {composeWithMongoose} = require('graphql-compose-mongoose')

const commentSchema = new mongoose.Schema(
    {
        postedBy: {
            type: String,
            required: true,
        },
        forBlog: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }
)

const Comment = mongoose.model('Comment', commentSchema)
const CommentTC = composeWithMongoose(Comment)

module.exports = { Comment, CommentTC}