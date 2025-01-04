const express = require('express')
const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const admin = express.Router()

admin.post('/login', async (req, res) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username })

        const isAdmin = bcrypt.compareSync(req.body.password, admin.password)

        if (!isAdmin) {
            return res
                .status(401)
                .json('Foydalanuvchi ismingiz yoki parolingiz xato!')
        }

        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 90,
                user: admin._id,
            },
            process.env.TOKEN_SECRET_KEY
        )

        const { __v, password, ...adminData } = admin._doc
        return res.status(200).json({
            message: 'Successfully logged in!',
            token,
            user: adminData,
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = admin
