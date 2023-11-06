const express = require("express");
const Admin = require("../models/Admin");
const verifyAdmin = require("../middleware/verifytoken");


const admin = express.Router();

admin.get("/profile", verifyAdmin, async (req, res) => {
    const {username} = await Admin.findById(req.admin.user);
    res.status(200).json({username});
})

module.exports = admin;