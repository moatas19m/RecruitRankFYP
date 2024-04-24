import express from "express";
import {postJobController, updateJobController, getJobController, getActiveJobController, jobDeleteController, getUserJobController} from '../controller/jobController.js'
import { requireSignIn, isAdmin, isRecruiter, isRecruiterorAdmin } from "../middleware/Auth.js";

//router object
const router=express.Router()

//Post Jobs
router.post("/postjob", requireSignIn, isRecruiterorAdmin, postJobController);

//Update Job
router.put("/updatejob/:id", requireSignIn, isRecruiterorAdmin, updateJobController);

//Get All Jobs
router.get("/getjob", requireSignIn, isRecruiterorAdmin, getJobController);

//Get Active Jobs
router.get("/getActiveJobs", requireSignIn, isRecruiterorAdmin, getActiveJobController);

//Delete Job
router.put("/deletejob/:id", requireSignIn, isRecruiterorAdmin, jobDeleteController);

//Get jobs by a specific user
router.get("/userJob/:id", requireSignIn, isRecruiterorAdmin, getUserJobController);

export default router;

