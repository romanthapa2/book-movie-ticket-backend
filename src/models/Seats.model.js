const { mongoose, Schema } = require("mongoose");

const seatSchema = new Schema({
  showTime_id : {
    type: mongoose.Schema.Types.ObjectId,
    ref:"showTime"
  },
  seats : []
});

module.exports = mongoose.model("seat", seatSchema);
