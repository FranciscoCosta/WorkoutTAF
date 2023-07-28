import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Por favor preencha todos os campos"],
  },
  lastName: {
    type: String,
    required: [true, "Por favor preencha todos os campos"],
  },
  email: {
    type: String,
    required: [true, "Por favor preencha todos os campos"],
    unique: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Por favor preencha todos os campos"],
  },
  image: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  role: { type: String, default: "user" },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

//this condition is to prevent the model to be compiled again if it was already compiled
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
