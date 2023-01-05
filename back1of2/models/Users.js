import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  imgUrl: String,
  login: {
    type: String,
    required: true,
  },
  winners: {
    type: Array,
    required: true,
  }
},
{
  timestamps: true
}
);

export default mongoose.model('Users', UsersSchema);