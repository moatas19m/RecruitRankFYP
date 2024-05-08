import express from "express";
import {UploadFileController, updateUserCVController, updateUserController, getUserController, userDeleteController, getActiveUserController, FilterUserQueryController, SearchUserQueryController} from '../controller/userController.js'
import { requireSignIn,isAdmin, isApplicantorAdmin } from "../middleware/Auth.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

//router object
const router=express.Router()

//Upload CV
router.post("/upload",upload.single("filename"), UploadFileController);

//Update User Profile for cv
router.put("/updateProfile/:id", requireSignIn, isApplicantorAdmin,  updateUserCVController);

//Update User
router.put("/update/:id", requireSignIn, updateUserController);

//Get All Users
router.get("/getusers", requireSignIn, isAdmin, getUserController);

//Get Active Users Only
router.get("/getActiveUsers", requireSignIn, isAdmin, getActiveUserController);

//Delete User
router.put("/deleteuser/:id", requireSignIn, isAdmin, userDeleteController);

//Filter User
router.get("/filteruser", requireSignIn, isAdmin, FilterUserQueryController);

//Search User
router.get("/searchuser", requireSignIn, isAdmin, SearchUserQueryController);




export default router;