import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'

dotenv.config();

main()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err.message));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

const app = express();

app.use('/api/user',userRouter);

app.listen(3000, () => console.log("server is up and running on port 3000"));
