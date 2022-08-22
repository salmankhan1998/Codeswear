
import { MongoClient } from 'mongodb'
const mongoose = require('mongoose');

const uri = 'mongodb+srv://salmankhan:salmankhan1998@cluster0.95nnhdx.mongodb.net/?retryWrites=true&w=majority';
// let client
// let clientPromise


// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri)
//   clientPromise = client.connect()
// }

// export default clientPromise




const db = mongoose.connect(uri);
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
    console.log(' 🍃 connected to mongoDB mLab');
})

export default db;