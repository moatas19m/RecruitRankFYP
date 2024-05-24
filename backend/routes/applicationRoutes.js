import express from "express";
import {/*UploadFileController,*/postApplicationController, applicationWithdrawController, getApplicationsOnJobController, getAllApplicationsController, getActiveApplicationsController, getInprogressApplicationsController, getActiveInprogressApplicationsController, getActiveInprogressApplicationsOnJobController, getActiveAcceptedApplicationsOnJobController, getActiveRejectedApplicationsOnJobController, getActiveAcceptedApplicationsController, getActiveRejectedApplicationsController, acceptApplicationController, rejectApplicationController, FilterAppQueryController, getAppliedJobsController} from "../controller/applicationController.js"
import { requireSignIn, isAdmin, isRecruiter, isApplicantorAdmin, isRecruiterorAdmin } from "../middleware/Auth.js";


//router object
const router=express.Router()

//Post Application
router.post("/postapplication/:id", requireSignIn, isApplicantorAdmin, postApplicationController);

//Withdraw Application (Delete)
router.put("/withdrawApplication/:id", requireSignIn, isApplicantorAdmin, applicationWithdrawController);

//Get jobs applied by user
router.get("/getApplicationsByUser/:id", requireSignIn, isApplicantorAdmin, getAppliedJobsController);

//Get all applications on a specific job
router.get("/getApplications/:id", requireSignIn, getApplicationsOnJobController);

//Get all applications on all the jobs
router.get("/getAllApplications", requireSignIn, isAdmin, getAllApplicationsController);

//Get all active applications on all the jobs
router.get("/getActiveApplications", requireSignIn, isAdmin, getActiveApplicationsController);

//Get all in-progress applications
router.get("/InprogressApplications", requireSignIn, isAdmin, getInprogressApplicationsController);

//Get active and in-progress applications
router.get("/ActiveInprogressApplications", requireSignIn, isAdmin, getActiveInprogressApplicationsController);

//Get active and accepted applications
router.get("/ActiveAcceptedApplications", requireSignIn, isAdmin, getActiveAcceptedApplicationsController);

//Get active and rejected applications
router.get("/ActiveRejectedApplications", requireSignIn, isAdmin, getActiveRejectedApplicationsController);

//Get active and in-progress apps on a specific job
router.get("/ActiveInprogressApp/:id", requireSignIn, isRecruiterorAdmin, getActiveInprogressApplicationsOnJobController);

//Get active and accepted apps on a specific job
router.get("/ActiveAcceptedApp/:id", requireSignIn, isRecruiterorAdmin, getActiveAcceptedApplicationsOnJobController);

//Get active and rejected apps on a specific job
router.get("/ActiveRejectedApp/:id", requireSignIn, isRecruiterorAdmin, getActiveRejectedApplicationsOnJobController);

//Accept application
router.put("/acceptApplication/:id", requireSignIn, isRecruiterorAdmin, acceptApplicationController);

//Reject application
router.put("/rejectApplication/:id", requireSignIn, isRecruiterorAdmin, rejectApplicationController);

//Filter Application
router.get("/filterapp", requireSignIn, isAdmin, FilterAppQueryController);

export default router;