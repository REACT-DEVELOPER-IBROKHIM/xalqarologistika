const express = require('express')
const DriverCertificates = require('../models/DriverCertificates')
const ManagerCertificates = require('../models/ManagerCertificates')
const AdrCertificates = require('../models/AdrCertificates')
const AdrTankCertificates = require('../models/AdrTankCertificate')
const verifyAdmin = require('../middleware/verifytoken')
const generateId = require('../utils/generateId')

const search = express.Router()

search.get('/', async (req, res) => {
    const id = req.query.id
    let certificate
    try {
        if (id.toLowerCase().includes('d')) {
            certificate = await DriverCertificates.findOne({ id })
        } else if (id.toLowerCase().includes('m')) {
            certificate = await ManagerCertificates.findOne({ id })
        } else if (id.toLowerCase().includes('t')) {
            certificate = await AdrTankCertificates.findOne({ id })
        } else {
            certificate = await AdrCertificates.findOne({ id })
        }
        res.status(200).json({
            data: certificate,
            error: null,
            message: 'Sertifikat topildi',
        })
    } catch (err) {
        res.send(404).json({
            data: null,
            error: 'Sertifikat topilmadi',
            message: 'Sertifikat topilmadi',
        })
    }
})

module.exports = search
