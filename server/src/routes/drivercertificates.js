const express = require('express')
const Certificate = require('../models/DriverCertificates')
const verifyAdmin = require('../middleware/verifytoken')
const generateId = require('../utils/generateId')
const certificate = express.Router()

certificate.post('/', verifyAdmin, async (req, res) => {
    try {
        const allCertificates = await Certificate.countDocuments()
        const existCertificate = await Certificate.findOne({
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
        })
        if (existCertificate) {
            return res.status(409).json('Sertifikat mavjud')
        }

        const newCertificate = await Certificate.create({
            id: generateId(allCertificates + 1, 5, 'D'),
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
            birthDate: req.body.birthDate,
            from: req.body.from,
            to: req.body.to,
            courseName: '36 soat',
        })

        return res.status(201).json(newCertificate)
    } catch (err) {
        res.status(400).json('Sertifikat yaratishda xatolik!')
    }
})

certificate.get('/', verifyAdmin, async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page || 1
    try {
        const totalCertificates = await Certificate.countDocuments({})
        const totalPage = Math.ceil(totalCertificates / limit)
        const allCertificates = await Certificate.find()
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

certificate.get('/document-count', verifyAdmin, async (req, res) => {
    try {
        const totalCertificates = await Certificate.countDocuments({})
        res.status(200).json({
            data: generateId(totalCertificates + 1, 5, 'D'),
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
                    name: 'Mavjud emas',
                    surname: 'Mavjud emas',
                    middlename: 'Mavjud emas',
                    birthDate: 'Mavjud emas',
                    from: 'Mavjud emas',
                    to: 'Mavjud emas',
                    courseName: 'Mavjud emas',
                    givenDate: 'Mavjud emas',
                },
            }
        )
        res.json(removedCert)
    } catch (error) {
        res.json({ message: error })
    }
})

certificate.get('/search', async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page || 1
    try {
        const totalCertificates = await Certificate.countDocuments({})
        const totalPage = Math.ceil(totalCertificates / limit)

        const certificates = await Certificate.find({
            $or: [
                { id: { $regex: req.query.id, $options: 'i' } },
                { name: { $regex: req.query.name, $options: 'i' } },
                { surname: { $regex: req.query.surname, $options: 'i' } },
            ],
        })
            .limit(limit)
            .skip(limit * (page - 1))
        res.status(200).json({
            data: certificates,
            total_page: totalPage,
            total: totalCertificates,
            error: null,
            message: 'Sertifikatlar topildi',
        })
    } catch (error) {
        res.status(400).json({
            data: null,
            error: 'Sertifikatlar topilmadi',
            message: 'Sertifikatlar topilmadi',
        })
    }
})

certificate.get('/:id', async (req, res) => {
    try {
        const certificate = await Certificate.findById(req.params.id)
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

certificate.put('/:id', verifyAdmin, async (req, res) => {
    try {
        const updatedCertificate = await Certificate.updateOne(
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

module.exports = certificate
