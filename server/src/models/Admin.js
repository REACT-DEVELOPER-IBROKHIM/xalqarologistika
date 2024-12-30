const mongoose = require('mongoose')

const Admin = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 1024,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
    },
})

const model = mongoose.model('Admin', Admin)
module.exports = model
