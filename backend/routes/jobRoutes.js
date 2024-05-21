import express from "express";
import {postJobController, updateJobController, getJobController, getActiveJobController, jobDeleteController, getUserJobController, getUserActiveJobController, FilterQueryController, SearchQueryController, getHomepageJobsController, updateJobStatusController} from '../controller/jobController.js'
import { requireSignIn, isAdmin, isRecruiter, isRecruiterorAdmin, isApplicantorAdmin } from "../middleware/Auth.js";

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

//Get Active Jobs for All
router.get("/getHomepageJobs", getHomepageJobsController);

//Update jobStatus attribute
router.put("/changeJobStatus/:id", requireSignIn, isRecruiterorAdmin, updateJobStatusController);

//Delete Job
router.put("/deletejob/:id", requireSignIn, isRecruiterorAdmin, jobDeleteController);

//Get jobs by a specific user
router.get("/userJob/:id", requireSignIn, isRecruiterorAdmin, getUserJobController);

//Get active jobs by a specific user
router.get("/userActiveJob/:id", requireSignIn, isRecruiterorAdmin, getUserActiveJobController);

//Filter Jobs
router.get("/filter", requireSignIn, isApplicantorAdmin, FilterQueryController);

//Search
router.get("/search", requireSignIn, isApplicantorAdmin, SearchQueryController);

export default router;

