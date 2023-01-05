import UserModel from '../models/Users.js'
import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json(errors.array());
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const doc = new UserModel({
      email: req.body.email,
      login: req.body.password,
      imgUrl: req.body.imgUrl,
      passwordHash
    })

    const user = await doc.save();

    res.json(user)
  }
  catch (err){
    console.log(err);
    res.status(500).json({ message: "Unable to register" });
  }
}
