import { errorHandler } from "./errorHandler.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return next(errorHandler(404, "unauthorized"));

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
