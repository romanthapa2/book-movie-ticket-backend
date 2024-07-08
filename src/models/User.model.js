const { Schema, mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    isAmin:{
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function(){
  return jwt.sign({
    _id : this._id,
  },process.env.ACCSS_TOKEN_SECRET_KEY,{
    expiresIn : process.env.ACCSS_TOKEN_SECRET_EXPREY
  }
)
}



module.exports=mongoose.model('User',userSchema);
