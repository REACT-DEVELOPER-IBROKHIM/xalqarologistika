const express = require('express')
const ManagerCertificate = require('../models/ManagerCertificates')
const generateId = require('../utils/generateId')
const verifyAdmin = require('../middleware/verifytoken')

const mCertificate = express.Router()

mCertificate.post('/', verifyAdmin, async (req, res) => {
    const totalCertificates = await ManagerCertificate.countDocuments()
    const existCertificate = await ManagerCertificate.findOne({
        name: req.body.name,
        surname: req.body.surname,
        middlename: req.body.middlename,
    })
    if (existCertificate) {
        res.status(409).json('Sertifikat mavjud')
        return
    }
    try {
        const newCertificate = await ManagerCertificate.create({
            id: generateId(totalCertificates + 1, 5, 'M'),
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
            birthDate: req.body.birthDate,
            from: req.body.from,
            to: req.body.to,
            courseName: req.body.courseName,
        })
        res.status(201).json(newCertificate)
    } catch (err) {
        res.status(400).json('Sertifikat yaratishda xatolik!')
    }
})

mCertificate.get('/', verifyAdmin, async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page || 1
    try {
        const totalCertificates = await ManagerCertificate.countDocuments({})
        const totalPage = Math.ceil(totalCertificates / limit)
        const allCertificates = await ManagerCertificate.find()
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

mCertificate.get('/document-count', verifyAdmin, async (req, res) => {
    try {
        const totalCertificates = await ManagerCertificate.countDocuments({})
        res.status(200).json({
            data: generateId(totalCertificates + 1, 5, 'M'),
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

mCertificate.patch('/delete/:id', verifyAdmin, async (req, res) => {
    try {
        const removedCert = await ManagerCertificate.updateOne(
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

mCertificate.get('/:id', async (req, res) => {
    try {
        const certificate = await ManagerCertificate.findById(req.params.id)
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

mCertificate.put('/:id', verifyAdmin, async (req, res) => {
    try {
        const updatedCertificate = await ManagerCertificate.updateOne(
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

module.exports = mCertificate
