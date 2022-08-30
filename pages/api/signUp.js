import User from '../../models/User';
import db from "../../lib/connectDB";

export default async function handler(req, res) {
  try {
    let user = await User.create(req.body);
    res.status(200).send({ data: user.data });
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: e.message });
  }
}