const mongoose = require('mongoose');

const movieSchema = {
    title: {
        type: String,
        trim: true,
        required: true,
        maxLength: 255
    },
    image_url: {
        type: String,
        trim: true,
        required: true,
        maxLength: 255
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    likes: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}


exports.Movie = mongoose.model('Movie', new mongoose.Schema(movieSchema));