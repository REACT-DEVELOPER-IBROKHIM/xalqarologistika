const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const cors = require('cors')
const driverCertificate = require('./src/routes/drivercertificates')
const adrCertificate = require('./src/routes/adrcertificates')
const managerCertificate = require('./src/routes/managercertificate')
const adrTankCertificate = require('./src/routes/adrtankcertificate')
const searchCertificate = require('./src/routes/search')
const login = require('./src/routes/login')
const analytics = require('./src/routes/analytics')
const admin = require('./src/routes/admin')
const comments = require('./src/routes/comments')

const port = process.env.PORT || 1000
const app = express()
const whitelist = [
    'https://ntl-client.vercel.app',
    'https://ntl.vercel.app',
    'https://www.xalqarologistika.uz',
    'https://xalqarologistika.uz',
    'http://localhost:5173',
]
app.use(
    cors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
    })
)
app.use(express.json())

mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(process.env.DB_CONNECTION))
    .catch(err => console.log(err))

app.use('/api/driver', driverCertificate)
app.use('/api/adr', adrCertificate)
app.use('/api/manager', managerCertificate)
app.use('/api/adr-tank', adrTankCertificate)
app.use('/api/search', searchCertificate)
app.use('/api/analytics', analytics)
app.use('/api/auth', login)
app.use('/api/admin', admin)
app.use('/api/comments', comments)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
