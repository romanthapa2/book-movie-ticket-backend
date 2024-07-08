const { mongoose, Schema } = require("mongoose");

const citySchema = new Schema({
  cinema_halls: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'cinemaHall'
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address:{
    type:String,
    required:true
  }
});

model.exports  = mongoose.model('city',citySchema)