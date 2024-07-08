const { mongoose, Schema } = require("mongoose");

const cinemaHallSchema = new Schema({
    seats:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "seat"
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("cinemaHall", cinemaHallSchema);