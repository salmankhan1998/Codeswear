import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
const User = mongoose.model('users', UserSchema)
export default User;
