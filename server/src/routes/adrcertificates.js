const express = require('express')
const Certificate = require('../models/AdrCertificates')
const generateId = require('../utils/generateId')
const verifyAdmin = require('../middleware/verifytoken')
const certificate = express.Router()

certificate.post('/', verifyAdmin, async (req, res) => {
    const allCertificates = await Certificate.countDocuments()
    const existCertificate = await Certificate.findOne({
        name: req.body.name,
        surname: req.body.surname,
        birthDate: req.body.birthDate,
    })
    if (existCertificate) {
        res.status(409).json('Sertifikat mavjud')
        return
    }
    try {
        const newCertificate = await Certificate.create({
            id: generateId(allCertificates + 1, 6),
            name: req.body.name,
            surname: req.body.surname,
            birthDate: req.body.birthDate,
            from: req.body.from,
            to: req.body.to,
        })
        res.status(201).json(newCertificate)
    } catch (err) {
        res.status(400).json('Sertifikat yaratishda xatolik!')
    }
})

certificate.get('/all', verifyAdmin, async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page || 1
    try {
        const totalCertificates = await Certificate.countDocuments({})
        const totalPage = Math.ceil(totalCertificates / limit)
        const allCertificates = await Certificate.find()
            .limit(limit)
            .skip(limit * (page - 1))
        res.status(200).json({ allCertificates, totalPage })
    } catch (err) {
        res.send(404).json('Sertifikat topilmadi')
    }
})

certificate.patch('/delete/:id', verifyAdmin, async (req, res) => {
    try {
        const removedCert = await Certificate.updateOne(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    name: 'Mavjud emas',
                    id: 'Mavjud emas',
                    surname: 'Mavjud emas',
                    name: 'Mavjud emas',
                    birthDate: 'Mavjud emas',
                    to: 'Mavjud emas',
                    givenDate: 'Mavjud emas',
                },
            }
        )
        res.json(removedCert)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = certificate
