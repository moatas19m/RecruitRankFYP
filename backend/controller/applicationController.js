import Application from "../models/Applications.js"

//Creating an application - Applicant applying to the job
export const postApplicationController= async(req,res)=>{
    {

        const {id:jobID } =req.params;
        const {user,progress,status}=req.body;
        
        const newApplication = new Application({job:jobID, user, progress, status})
        try{
            const savedApplication=await newApplication.save();
            res.status(200).json(
                {
                    success:true,
                    savedApplication});
        }catch(err)
        {
           return res.status(500).json({success:false,err});
        }
}}

//Withdrawing application
export const applicationWithdrawController = async(req,res)=>
    {
    try{
        const deletedapplication= await Application.findByIdAndUpdate(req.params.id,{
            status:"Inactive"
        },
        {
            new:true
        }).populate("job").populate("user");
        return res.status(200).json({
            success:true,
            message:"Application has been withdrawn",
            deletedapplication
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Get all applications on a specific job
export const getApplicationsOnJobController = async(req,res)=>
{
    const {id:jobID } =req.params;
    try{
       const application= await Application.find({job:jobID}).populate("user")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get all applications on a all the job
export const getAllApplicationsController = async(req,res)=>
{
    try{
       const application= await Application.find().populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get all active applications on all the jobs
export const getActiveApplicationsController = async(req,res)=>
{
    try{
       const application= await Application.find({status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get all the applications that are in-progress
export const getInprogressApplicationsController = async(req,res)=>
{
    try{
       const application= await Application.find({progress:"In-progress"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get applications that are active and in-progress
export const getActiveInprogressApplicationsController = async(req,res)=>
{
    try{
       const application= await Application.find({progress:"In-progress",status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

export const getActiveAcceptedApplicationsController = async(req,res)=>
{
    try{
       const application= await Application.find({progress:"Accepted",status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

export const getActiveRejectedApplicationsController = async(req,res)=>
{
    try{
       const application= await Application.find({progress:"Rejected",status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get applications that are active and in-progress on a specific job
export const getActiveInprogressApplicationsOnJobController = async(req,res)=>
{
    const {id:jobID} = req.params.id
    try{
       const application= await Application.find({job:req.params.id, progress:"In-progress",status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get active and accepted applications on a specific job
export const getActiveAcceptedApplicationsOnJobController = async(req,res)=>
{
    const {id:jobID} = req.params.id
    try{
       const application= await Application.find({job:req.params.id, progress:"Accepted",status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get active and rejected applications on a specific job
export const getActiveRejectedApplicationsOnJobController = async(req,res)=>
{
    const {id:jobID} = req.params.id
    try{
       const application= await Application.find({job:req.params.id, progress:"Rejected",status:"Active"}).populate("user").populate("job")
       res.status(200).json({
        success:true,
        ApplicationCount:application.length,
        application});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Accept Application
export const acceptApplicationController = async(req,res)=>
    {
    try{
        const acceptedapplication= await Application.findByIdAndUpdate(req.params.id,{
            progress:"Accepted"
        },
        {
            new:true
        }).populate("job").populate("user");
        return res.status(200).json({
            success:true,
            message:"Application has been accepted",
            acceptedapplication
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Reject Application
export const rejectApplicationController = async(req,res)=>
    {
    try{
        const rejectedapplication= await Application.findByIdAndUpdate(req.params.id,{
            progress:"Rejected"
        },
        {
            new:true
        }).populate("job").populate("user");
        return res.status(200).json({
            success:true,
            message:"Application has been rejected",
            rejectedapplication
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Filter Application
export const FilterAppQueryController = async (req, res) => {
    try {
        const query = { status: "Active" };

        if (req.query.id) {
            query._id = req.query.id;
        }

        if (req.query.progress) {
            query['progress'] = req.query.progress;
        }

        if(req.query.id){
            const application = await Application.findById(req.query.id);
            res.status(200).json({
                success:true,
                ApplicationCount:application.length,
                application
            });
        }
        else{
            const application = await Application.find(query).populate('job');
            res.status(200).json({
                success:true,
                ApplicationCount:application.length,
                application
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//Applied Jobs per User
export const getAppliedJobsController = async(req,res)=>
    {
        const {id:userID} = req.params.id

        try{
            const application= await Application.find({user:req.params.id, status:"Active"}).populate("user").populate("job")
            res.status(200).json({
            success:true,
            ApplicationCount:application.length,
            application});
          
        }catch(err)
        {
           return res.status(500).json({
                success:false,
                err});
        }
    };
// appied user and job

export const getApplicationUserJobController = async(req,res)=>
    {
        // const {userid:userID} = req.params.userid
        // const {jobid:jobID} = req.params.jobid
        //console.log(req.params.userid)
        try{
            const application= await Application.find({user:req.params.UserID, job:req.params.JobID})
            res.status(200).json({
            success:true,
            ApplicationCount:application.length,
            application});
          
        }catch(err)
        {
           return res.status(500).json({
                success:false,
                err});
        }
    };



