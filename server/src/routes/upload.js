require('dotenv').config()
const express = require('express')
const multer = require('multer')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const DriverCertificate = require('../models/DriverCertificates')
const DriverCardCertificate = require('../models/DriverCardCertificate')
const AdrCertificate = require('../models/AdrCertificates')
const router = express.Router()

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
})

console.log("cred", process.env.AWS_REGION, process.env.ACCESS_KEY_ID, process.env.SECRET_ACCESS_KEY)

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/signature', upload.single('file'), async (req, res) => {
    const file = req.file
    const type = req.query.type
    const id = req.query.id

    if (!file) {
        return res.status(400).send('No file uploaded.')
    }

    const key = file.originalname + Date.now()

    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
    }

    try {
        await s3.send(new PutObjectCommand(params))

        const location = `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`

        if (type === 'drivercard') {
            await DriverCardCertificate.findByIdAndUpdate(id, {
                signature: location,
            })
        } else if (type === 'driver') {
            await DriverCertificate.findByIdAndUpdate(id, {
                signature: location,
            })
        } else if (type === 'adr') {
            await AdrCertificate.findByIdAndUpdate(id, {
                signature: location,
            })
        }

        res.send('File uploaded successfully! File URL: ' + location)
    } catch (err) {
        console.log('Error occured while trying to upload to S3 bucket', err)
        return res.status(500).send('Failed to upload')
    }
})

router.delete('/signature', async (req, res) => {
    const type = req.query.type
    const id = req.query.id

    if (type === 'drivercard') {
        await DriverCardCertificate.findByIdAndUpdate(id, {
            signature: '',
        })
    } else if (type === 'driver') {
        await DriverCertificate.findByIdAndUpdate(id, {
            signature: '',
        })
    } else if (type === 'adr') {
        await AdrCertificate.findByIdAndUpdate(id, {
            signature: '',
        })
    }

    res.send('File deleted successfully!')
})

module.exports = router
