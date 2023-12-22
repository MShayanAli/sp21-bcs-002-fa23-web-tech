import express from "express";
import { Login,Signup,Logout } from "../controllers/Users.js";

const router = express.Router()

router.post("/Login",Login)
router.post("/Signup",Signup)
router.get("/Logout",Logout)

export default router;