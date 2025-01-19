const mongoose = require('mongoose')

const ManagerCertificate = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        max: 1024,
    },
    surname: {
        type: String,
        required: true,
        max: 1024,
    },
    middlename: {
        type: String,
        required: true,
        max: 1024,
    },
    from: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
    },
})

const model = mongoose.model('managercertificates', ManagerCertificate)
module.exports = model
