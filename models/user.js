const mongoose, {Schema} = require('mongoose')
const {composeWithMongoose} = require('graphql-compose-mongoose')

export const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        isAuthor: {
            type: Boolean,
            required: true,
            default: false
        },
        Image: {
            type: String,
            required: false
        },
        likes: {
            type: Array,
            default: [],
            required: true
        }
    }
)

const User = mongoose.model('User', UserSchema)
const userTC = composeWithMongoose(User)

module.exports = {User, userTC}