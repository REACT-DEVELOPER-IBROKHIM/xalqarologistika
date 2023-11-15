const express = require("express");
const Comment = require("../models/Comment");

const comments = express.Router();

comments.post("/create", async (req, res) => {
    const comment = req.body
    
    const newComment = await Comment.create(comment)

    res.status(201).json({
        success: true,
        newComment
    })

})

comments.get("/all", async (req, res) => {
    const comments = await Comment.find({})

    res.status(200).json({
        success: true,
        comments
    })
})

module.exports = comments