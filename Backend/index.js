import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import googleRoute from "./routes/google.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(express.json());

app.use(cookieParser());

app.use("/api/google", googleRoute);

app.use("/api/auth", authRoute);

app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
  const code = err.status || 500;
  const message = err.message || "invalid user information";
  const error = {
    status: code,
    message: message,
  };
  console.log(error);
  return res.json(error);
});

main()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err.message));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

app.listen(3000, () => console.log("server is up and running on port 3000"));
