const { mongoose, Schema } = require("mongoose");

const showTimeSchema = new Schema(
  {
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
    cinemaHall_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cinemaHall",
    },
    shifts:[{
      startTime:{
        type: Date,
        required: true
      },
      endTime:{
        type: Date,
        required: true
      }
    }
    ]
  },
  { timestamps: true }
);



const createFourShifts = async () => {
  const shifts = [];
  const startTime = new Date();
  for (let i = 0; i < 4; i++) {
    const start = new Date(startTime);
    start.setHours(10 + i * 3); 
    const end = new Date(start);
    end.setHours(start.getHours() + 3);

    shifts.push({ startTime: start, endTime: end });
  }

  try {
    const showTime = await showTimeSchema.create({
      shifts: shifts
    });
    console.log('ShowTime with shifts created:', showTime);
  } catch (error) {
    console.error('Error creating ShowTime:', error);
  }
};



module.exports = mongoose.model("showTime", showTimeSchema);
