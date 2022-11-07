import express from "express";
import { register, login, updateUser } from "../controllers/authController.js";

const router = express.Router();

router.route("/register").post(register);
router.post("/login", login);
router.patch("/updateUser", updateUser);

export default router;
