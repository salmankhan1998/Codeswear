import User from '../../models/User';
import { connectDB }  from "../../lib/connectDB";

var CryptoJS = require("crypto-js");

export default async function handler(req, res) {
  try {
    connectDB();
    const { name, email} = req.body;
    let password = CryptoJS.AES.encrypt(req.body.password, 'secret123').toString();
    let user = await User.create({name, email, password});
    res.status(200).send({ data: user });
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: e.message });
  }
}
// export default async function handler(req, res) {
//   try {
//     connectDB();
//     console.log("req body",req.body)
//     let user = await User.create(req.body);
//     res.status(200).send({ data: user });
//   } catch (e) {
//     console.error(e);
//     return res.status(400).send({ error: e.message });
//   }
// }