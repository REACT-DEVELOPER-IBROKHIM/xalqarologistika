const mongoose = require('mongoose')
const { Schema } = mongoose

const DriverCertificates = new Schema({
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
    to: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
        max: 1024,
    },
    signature: {
        type: String,
    },
})

const model = mongoose.model('drivercertificates', DriverCertificates)
module.exports = model
