const mg = require('mongoose')

const UserSchema = new mg.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{type: mg.Schema.Types.ObjectId, ref: "Post"}],
    followers: [{type: mg.Schema.Types.ObjectId, ref: "User"}],
    following: [{type: mg.Schema.Types.ObjectId, ref: "User"}]
})

const User = mg.model('User', UserSchema)

module.exports = User