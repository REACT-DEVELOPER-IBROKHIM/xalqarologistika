const express = require('express')
const ManagerCertificate = require('../models/ManagerCertificates')
const generateId = require('../utils/generateId')
const verifyAdmin = require('../middleware/verifytoken')

const mCertificate = express.Router()

mCertificate.post('/', verifyAdmin, async (req, res) => {
    const allCertificates = await ManagerCertificate.find()
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
            id: generateId(allCertificates.length + 1, 5, 'M'),
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
            from: req.body.from,
            to: req.body.to,
            courseName: req.body.courseName,
        })
        const certificate = await newCertificate.save()
        res.status(201).json(certificate)
    } catch (err) {
        res.status(400).json('Sertifikat yaratishda xatolik!')
    }
})

mCertificate.get('/all', verifyAdmin, async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page || 1
    try {
        const totalCertificates = await ManagerCertificate.countDocuments({})
        const totalPage = Math.ceil(totalCertificates / limit)
        const allCertificates = await ManagerCertificate.find()
            .limit(limit)
            .skip(limit * (page - 1))
        res.status(200).json({ allCertificates, totalPage })
    } catch (err) {
        res.send(404).json('Sertifikat topilmadi')
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

module.exports = mCertificate
