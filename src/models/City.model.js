const { mongoose, Schema } = require("mongoose");

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address:{
    type:String,
  }
});

model.exports  = mongoose.model('city',citySchema)