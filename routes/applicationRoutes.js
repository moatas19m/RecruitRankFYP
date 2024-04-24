import express from "express";
import {postApplicationController, applicationWithdrawController, getApplicationsOnJobController, getAllApplicationsOnJobController, getActiveApplicationsOnJobController, getInprogressApplicationsOnJobController, getActiveInprogressApplicationsOnJobController} from "../controller/applicationController.js"
import { requireSignIn, isAdmin, isRecruiter, isApplicantorAdmin, isRecruiterorAdmin } from "../middleware/Auth.js";

//router object
const router=express.Router()

//Post Application
router.post("/postapplication/:id", requireSignIn, isApplicantorAdmin, postApplicationController);

//Withdraw Application (Delete)
router.put("/withdrawApplication/:id", requireSignIn, isApplicantorAdmin, applicationWithdrawController);

//Get all applications on a specific job
router.get("/getApplications/:id", requireSignIn, isRecruiterorAdmin, getApplicationsOnJobController);

//Get all applications
router.get("/getAllApplications", requireSignIn, isRecruiterorAdmin, getAllApplicationsOnJobController);

//Get all active applications
router.get("/getActiveApplications", requireSignIn, isRecruiterorAdmin, getActiveApplicationsOnJobController);

//Get all in-progress applications
router.get("/InprogressApplications", requireSignIn, isRecruiterorAdmin, getInprogressApplicationsOnJobController);

//Get active and in-progress applications
router.get("/ActiveInprogressApplications", requireSignIn, isRecruiterorAdmin, getActiveInprogressApplicationsOnJobController);
export default router;