const { mongoose, Schema } = require("mongoose");

const seatSchema = new Schema({
  showTime_id : {
    type: mongoose.Schema.Types.ObjectId,
    ref:"showTime"
  },
  is_booked :{
    type : Boolean,
    default :false,
  }
});

module.exports = mongoose.model("seat", seatSchema);
