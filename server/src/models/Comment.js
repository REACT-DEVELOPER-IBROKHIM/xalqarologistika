const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment = new Schema({
    comment_uz: {
        type: String,
        required: true,
        max: 1024
    },
    comment_ru: {
        type: String,
        required: true,
        max: 1024
    },
    comment_en: {
        type: String,
        required: true,
        max: 1024
    },
    user: {
        type: String,
        required: true
    },
    user_role_uz: {
        type: String,
        required: true
    },
    user_role_en: {
        type: String,
        required: true
    },
    user_role_ru: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    user_avatar: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Comment', Comment)