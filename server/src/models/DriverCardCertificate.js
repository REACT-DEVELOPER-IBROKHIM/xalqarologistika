const mongoose = require('mongoose')
const { Schema } = mongoose

const DriverCardCertificates = new Schema({
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
    photo: {
        type: String,
    },
    photo_uploaded: {
        type: Boolean,
        default: false,
    },
    driverLicenceNumber: {
        type: String,
        required: true,
    },
})

const model = mongoose.model('drivercardcertificates', DriverCardCertificates)
module.exports = model
