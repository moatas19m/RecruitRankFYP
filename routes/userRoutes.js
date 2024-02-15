import express from "express";
import {updateUserController, getUserController, userDeleteController, getActiveUserController} from '../controller/userController.js'
import { requireSignIn,isAdmin } from "../middleware/Auth.js";

//router object
const router=express.Router()

//Update User
router.put("/update/:id", requireSignIn, updateUserController);

//Get All Users
router.get("/getusers", requireSignIn, isAdmin, getUserController);

//Get Active Users Only
router.get("/getActiveUsers", requireSignIn, isAdmin, getActiveUserController);

//Delete User
router.put("/deleteuser/:id", requireSignIn, isAdmin, userDeleteController);




export default router;