import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatarUrl: String,
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  socialOnly: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("Users password: ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password: ", this.password);
});

const User = mongoose.model("User", userSchema);
export default User;
