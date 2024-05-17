const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },  // new field for user name
    profilePicture: { type: String }  // new field for profile picture URL/path
});

const User = mongoose.model('User', userSchema);

module.exports = User;
