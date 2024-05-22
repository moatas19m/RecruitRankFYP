import Job from "../models/Jobs.js"
import User from "../models/User.js"
import axios from 'axios';

// Replace with the actual URL of your FastAPI server
const apiUrl = 'http://localhost:8000';

const convertJobJsonToText = (jobJson) => {
    return  `Job Title: ${jobJson.title}\nCompany: ${jobJson.company}\nLocation: ${jobJson.location}\n`+
            `Job Level: ${jobJson.joblevel}\nJob Type: ${jobJson.type}\nShift: ${jobJson.shift}\n` +
            `Salary Range: $${jobJson.minSalary} - $${jobJson.maxSalary}\nExperience Required: ${jobJson.experience}\n` +
            `Education Required: ${jobJson.education}\nRequirements: ${jobJson.requirements}\n` +
            `Benefits: ${jobJson.benefits}\nDescription:${jobJson.description}`;
};

//Post Job
export const postJobController= async(req,res)=>{
    {
        const jobText = convertJobJsonToText(req.body);
        let resData;
        // console.log(jobText);

        await axios.post(`${apiUrl}/extractJobDescription`, { JD: jobText },{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log('Response from FastAPI server:', response.data);
            resData = response.data;
        })
        .catch(error => {
            console.error('Error calling FastAPI server:', error);
        });

        const newJobData = {
            ...req.body,
            parsedData: resData
        };

        const newJob = new Job(newJobData);

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
    }   
}

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

//Update jobStatus attribute
export const updateJobStatusController = async(req,res)=>
{

    try{
        const updatedjob= await Job.findByIdAndUpdate(req.params.id,{
            jobStatus:"Inactive"
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

//Get Active Jobs
export const getHomepageJobsController = async(req,res)=>
{
    try{
        const jobs= await Job.find({status:"Active", jobStatus:"Active"}).populate("user")
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

//Filter Job
export const FilterQueryController = async (req, res) => {
    try {
        const query = { status: "Active" };

        if (req.query.id) {
            query._id = req.query.id;
        }

        if (req.query.location) {
            query['location'] = req.query.location;
        }

        if (req.query.joblevel) {
            query['joblevel'] = req.query.joblevel;
        }

        if (req.query.education) {
            query['education'] = req.query.education;
        }

        if (req.query.type) {
            query['type'] = req.query.type;
        }

        if (req.query.shift) {
            query['shift'] = req.query.shift;
        }

        if(req.query.id){
            const jobs = await Job.findById(req.query.id).populate('user');
            res.status(200).json({
                success:true,
                JobCount:jobs.length,
                jobs
            });
        }
        else{
            const jobs = await Job.find(query).populate('user');
            res.status(200).json({
                success:true,
                JobCount:jobs.length,
                jobs
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//Search Jobs
export const SearchQueryController = async (req, res) => {
    try {
        const searchQuery = req.query.search;

        if (!searchQuery) {
            return res.status(400).json({ message: 'Please provide a search query' });
        }

        const query = {
            $and: [
                {
                    $or: [
                        { company: { $regex: searchQuery, $options: 'i' } },
                        { title: { $regex: searchQuery, $options: 'i' } }
                    ]
                },
                { status: "Active" } // Adding the condition for status
            ]
        };

        const jobs = await Job.find(query).populate('user');
        res.status(200).json({
            success:true,
            JobCount:jobs.length,
            jobs
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};