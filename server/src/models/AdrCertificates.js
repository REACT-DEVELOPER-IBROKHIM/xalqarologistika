const mongoose = require('mongoose')

const Adr = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        max: 1024,
    },
    middlename: {
        type: String,
        required: true,
        max: 1024,
    },
    surname: {
        type: String,
        required: true,
        max: 1024,
    },
    birthDate: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
    },
    photo: {
        type: String,
    },
    photo_uploaded: {
        type: Boolean,
        default: false,
    },
    tank: {
        type: Boolean,
        default: false
    }
})

const model = mongoose.model('Adr', Adr)
module.exports = model
