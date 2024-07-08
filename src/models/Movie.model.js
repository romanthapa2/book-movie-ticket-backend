const { mongoose, Schema } = require("mongoose");

const movieSchema=new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    status:{
        type: String,
        required: true,
        enum: ['Current', 'UpComing'],
    },
    director: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    duration: {
        type: Number,
        required: true,
    },
    posterUrl: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Boolean,
        required: true,
    },
})

module.exports = mongoose.model('movie',movieSchema)
