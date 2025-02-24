const express = require('express')
const router = express.Router()
const { rembg } = require('@remove-background-ai/rembg.js')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const AWS = require('aws-sdk')
const fs = require('fs')

const spacesEndpoint = new AWS.Endpoint(process.env.ORIGIN_ENDPOINT)
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
    signatureVersion: 'v4',
})

console.log('Spaces endpoint:', process.env.ORIGIN_ENDPOINT)

router.post('/selfie', upload.single('data'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded')
    }

    rembg({
        apiKey: process.env.REMOVE_BG_API_KEY,
        inputImage: req.file.buffer,
        onDownloadProgress: progress =>
            console.log('Download Progress:', progress),
        onUploadProgress: progress => console.log('Upload Progress:', progress),
    })
        .then(({ outputImagePath, cleanup }) => {
            console.log('Output image path:', outputImagePath)

            const fileContent = fs.readFileSync(outputImagePath)

            const params = {
                Bucket: 'your-bucket-name',
                Key: `selfies/${Date.now()}_processed.jpg`,
                Body: fileContent,
            }

            s3.upload(params, function (err, data) {
                cleanup()
                if (err) {
                    console.error('Error uploading file to Space:', err)
                    return res.status(500).send('Failed to upload image')
                }
                console.log('File uploaded successfully:', data.Location)
                res.send({
                    message: 'File uploaded successfully',
                    url: data.Location,
                })
            })
        })
        .catch(error => {
            console.error('Error processing image:', error)
            res.status(500).send(`Error processing image: ${error.message}`)
        })
})

module.exports = router
