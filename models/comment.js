const mongoose, {Schema} = require('mongoose')
const {composeWithMongoose} = require('graphql-compose-mongoose')

export const commentSchema = new Schema(
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