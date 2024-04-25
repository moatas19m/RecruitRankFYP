import Job from "../models/Jobs.js"
import User from "../models/User.js"

//Post Job
export const postJobController= async(req,res)=>{
    {
        const newJob = new Job(req.body)
        try{
            const savedJob=await newJob.save();
            res.status(200).json(
                {
                    success:true,
                    savedJob});
        }catch(err)
        {
           return res.status(500).json({success:false,err});
        }
}}

//Update Job
export const updateJobController = async(req,res)=>
    {

    try{
        const updatedjob= await Job.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {
            new:true
        });
        return res.status(200).json({
            success:true,
            updatedjob
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Get All Jobs
export const getJobController = async(req,res)=>
{
    try{
       const jobs= await Job.find().populate("user")
       res.status(200).json({
        success:true,
        JobCount:jobs.length,
        jobs});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get Active Jobs
export const getActiveJobController = async(req,res)=>
{
    const query=req.query.new
    try{
        const jobs= await Job.find({status:"Active"}).populate("user")
        res.status(200).json({
        success:true,
        ActiveJobsCount:jobs.length,
        jobs});
      
    }catch(err)
    {
        return res.status(500).json({
            success:false,
            err});
    }
};

//Delete Job
export const jobDeleteController = async(req,res)=>
    {
    try{
        const deletedJob= await Job.findByIdAndUpdate(req.params.id,{
            status:"Inactive"
        },
        {
            new:true
        });
        return res.status(200).json({
            success:true,
            message:"Job has been deleted",
            deletedJob
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Get all jobs by a specific user
export const getUserJobController = async(req,res)=>
{
    const {id:userID} =req.params;
    try{
       const job= await Job.find({user:userID}).populate("user")
       res.status(200).json({
        success:true,
        JobCount:job.length,
        job});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get active jobs by a specific user
export const getUserActiveJobController = async(req,res)=>
{
    const {id:userID} =req.params;
    try{
       const job= await Job.find({user:userID, status:"Active"}).populate("user")
       res.status(200).json({
        success:true,
        ActiveJobCount:job.length,
        job});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};