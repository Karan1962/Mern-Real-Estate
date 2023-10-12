import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import signUpRoute from "./routes/auth.route.js";
// import cors from "cors";

// const corsOptions = {
//   origin: "http://localhost:5173", // Replace with your frontend's actual URL
//   credentials: true, // Enable sending cookies with CORS requests if needed
// };
const app = express();
// app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", signUpRoute);
app.use((err, req, res, next) => {
  const code = err.status || "500";
  const message = err.message || "invalid user information";
  const error = {
    status: code,
    message: message
  };
  console.log(error);
  return res.status(error.status).json(error);
});

main()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err.message));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

app.listen(3000, () => console.log("server is up and running on port 3000"));
