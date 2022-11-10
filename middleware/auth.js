import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication not valid!");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("PAYLOAD: " + JSON.stringify(payload));
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication not valid!");
  }
};

export default auth;
