const express = require('express')
const CertificateTank = require('../models/AdrTankCertificate')
const generateId = require('../utils/generateId')
const verifyAdmin = require('../middleware/verifytoken')
const certificateTank = express.Router()

certificateTank.post('/', verifyAdmin, async (req, res) => {
    const allCertificates = await CertificateTank.find()
    const existCertificate = await CertificateTank.findOne({
        name: req.body.name,
        surname: req.body.surname,
        birthDate: req.body.birthDate,
    })
    if (existCertificate) {
        res.status(409).json('Sertifikat mavjud')
        return
    }
    try {
        const newCertificate = await CertificateTank.create({
            id: generateId(allCertificates.length + 1, 6, 'T'),
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
            birthDate: req.body.birthDate,
            to: req.body.to,
            from: req.body.from,
        })
        const certificate = await newCertificate.save()
        res.status(201).json(certificate)
    } catch (err) {
        res.status(400).json('Sertifikat yaratishda xatolik!')
    }
})

certificateTank.get('/', verifyAdmin, async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page || 1
    try {
        const totalCertificates = await CertificateTank.countDocuments({})
        const totalPage = Math.ceil(totalCertificates / limit)
        const allCertificates = await CertificateTank.find()
            .limit(limit)
            .skip(limit * (page - 1))
        res.status(200).json({
            data: allCertificates,
            total: totalCertificates,
            total_page: totalPage,
            error: null,
            message: 'Sertifikatlar topildi',
        })
    } catch (err) {
        res.send(404).json({
            data: null,
            total: 0,
            total_page: 0,
            error: 'Sertifikatlar topilmadi',
            message: 'Sertifikatlar topilmadi',
        })
    }
})

certificateTank.get('/document-count', verifyAdmin, async (req, res) => {
    try {
        const totalCertificates = await CertificateTank.countDocuments({})
        res.status(200).json({
            data: generateId(totalCertificates + 1, 6, 'T'),
            error: null,
            message: 'Sertifikatlar soni topildi',
        })
    } catch (err) {
        res.send(404).json({
            data: null,
            total: 0,
            total_page: 0,
            error: 'Sertifikatlar topilmadi',
            message: 'Sertifikatlar topilmadi',
        })
    }
})

certificateTank.patch('/delete/:id', verifyAdmin, async (req, res) => {
    try {
        const removedCert = await CertificateTank.updateOne(
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
                    form: 'Mavjud emas',
                },
            }
        )
        res.json(removedCert)
    } catch (error) {
        res.json({ message: error })
    }
})

certificateTank.get('/:id', async (req, res) => {
    try {
        const certificate = await CertificateTank.findById(req.params.id)
        res.json({
            data: certificate,
            error: null,
            message: 'Sertifikat topildi',
        })
    } catch (error) {
        res.json({
            data: null,
            error: 'Sertifikat topilmadi',
            message: 'Sertifikat topilmadi',
        })
    }
})

certificateTank.put('/:id', verifyAdmin, async (req, res) => {
    try {
        const updatedCertificate = await CertificateTank.updateOne(
            {
                _id: req.params.id,
            },
            {
                $set: req.body,
            }
        )
        res.json({
            data: updatedCertificate,
            error: null,
            message: 'Sertifikat tahrirlandi',
        })
    } catch (error) {
        res.json({
            data: null,
            error: 'Sertifikat tahrirlanmadi',
            message: 'Sertifikat tahrirlanmadi',
        })
    }
})

module.exports = certificateTank
