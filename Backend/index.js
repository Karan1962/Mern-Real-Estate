import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import signUpRoute from './routes/auth.route.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", signUpRoute);


main()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err.message));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

app.listen(3000, () => console.log("server is up and running on port 3000"));
