const mongoose = require("mongoose");

export const uri =
  "mongodb+srv://salmankhan:salmankhan1998@cluster0.95nnhdx.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async() => {
    await mongoose.connect(uri);
    mongoose.Promise = global.Promise;
    mongoose.connection.once("open", () => {
    console.log(" 🍃 connected to mongoDB mLab");
  });
};
