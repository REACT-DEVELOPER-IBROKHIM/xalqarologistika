require('dotenv').config()
const express = require('express')
const multer = require('multer')
const AWS = require('aws-sdk')
const DriverCertificate = require('../models/DriverCertificates')
const DriverCardCertificate = require('../models/DriverCardCertificate')
const AdrCertificate = require('../models/AdrCertificates')
const router = express.Router()

const spacesEndpoint = new AWS.Endpoint(process.env.ORIGIN_ENDPOINT)
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
})

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/signature', upload.single('file'), async (req, res) => {
    const file = req.file
    const type = req.query.type
    const id = req.query.id

    if (!file) {
        return res.status(400).send('No file uploaded.')
    }

    const params = {
        Bucket: process.env.SPACE_BUCKET,
        Key: file.originalname + Date.now(),
        Body: file.buffer,
        ACL: 'public-read',
    }

    s3.upload(params, async (err, data) => {
        if (err) {
            console.log(
                'Error occured while trying to upload to S3 bucket',
                err
            )
            return res.status(500).send('Failed to upload')
        }

        if (type === 'drivercard') {
            await DriverCardCertificate.findByIdAndUpdate(id, {
                signature: data.Location,
            })
        } else if (type === 'driver') {
            await DriverCertificate.findByIdAndUpdate(id, {
                signature: data.Location,
            })
        } else if (type === 'adr') {
            await AdrCertificate.findByIdAndUpdate(id, {
                signature: data.Location,
            })
        }

        res.send('File uploaded successfully! File URL: ' + data.Location)
    })
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
