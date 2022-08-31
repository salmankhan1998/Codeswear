import User from '../../models/User';
import { connectDB }  from "../../lib/connectDB";

var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  try {
    connectDB();
    let user = await User.findOne({'email': req.body.email});
    const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if(user){
        if(req.body.email == user.email && req.body.password == decryptedPass){
            var token = jwt.sign({ user: {name: user.name, email: user.email} }, 'jwtsecret');
            res.status(200).send({ user, token });
        }
        else{
            res.status(404).send( {error: 'Invalid Cridentials'} );
        }
    }
    else{
        res.status(400).send( {error: 'User not found'} );
    }
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: e.message });
  }
}