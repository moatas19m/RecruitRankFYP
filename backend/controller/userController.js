import { compare } from "bcrypt";
import { comparePassword, hashPassword } from "../helper/authHelper.js"
import User from "../models/User.js"
import  Jwt  from "jsonwebtoken";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import multer from "multer";
import axios from 'axios';


import { firebaseConfig } from "../firebase.config.js";

//Initialize a firebase application
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();
// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

// Replace with the actual URL of your FastAPI server
const apiUrl = 'http://127.0.0.1:8000'; 

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

//Used by user to upload CV.
let globalDownloadURL = '';
export const UploadFileController = async (req, res) => {
    try {
        const dateTime = giveCurrentDateTime();
        const storageRef = ref(storage, `files/${req.file.originalname + "ua" + dateTime}`);
        const metadata = { contentType: req.file.mimetype, };
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);
        globalDownloadURL = downloadURL;

        console.log('File successfully uploaded.');
        console.log(globalDownloadURL)
        return res.send({
            message: 'file uploaded to firebase storage',
            name: req.file.originalname,
            type: req.file.mimetype,
            downloadURL: downloadURL
        })

    } catch (error) {
        return res.status(400).send(error.message)
    }
};

//Update User Profile for CV
export const updateUserCVController = async(req,res)=>
    {

    try{
        let resData;
        console.log("globalDownloadURL: " + globalDownloadURL);

        await axios.get(`${apiUrl}/parseResume?downloadURL=${encodeURIComponent(globalDownloadURL)}`)
        .then(response => {
            console.log('Response from FastAPI server:', response.data);
            resData = response.data;
        })
        .catch(error => {
            console.error('Error calling FastAPI server:', error);
        });


        const updateduser= await User.findByIdAndUpdate(req.params.id,{
            cv:globalDownloadURL,
            parsedData:resData
        },
        {
            new:true
        });

        
        return res.status(200).json({
            success:true,
            updateduser
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};



//Update User
export const updateUserController = async(req,res)=>
    {

    try{
        const updateduser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {
            new:true
        });
        return res.status(200).json({
            success:true,
            updateduser
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Get All Users
export const getUserController = async(req,res)=>
{
    try{
       const users= await User.find()
       res.status(200).json({
        success:true,
        AllUserCount:users.length,
        users});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get Active Users
export const getActiveUserController = async(req,res)=>
{
    
    try{
       const users= await User.find({status:"Active"})
       res.status(200).json({
        success:true,
        ActiveUserCount:users.length,
        users});
      
    }catch(err)
    {
       return res.status(500).json({
            success:false,
            err});
    }
};

//Get Active Applicants
export const getActiveApplicantsController = async(req,res)=>
    {
        
        try{
           const users= await User.find({status:"Active", role:"Applicant"})
           res.status(200).json({
            success:true,
            ActiveUserCount:users.length,
            users});
          
        }catch(err)
        {
           return res.status(500).json({
                success:false,
                err});
        }
    };

//Get Active Recruiter
export const getActiveRecruiterController = async(req,res)=>
    {
        
        try{
           const users= await User.find({status:"Active", role:"Recruiter"})
           res.status(200).json({
            success:true,
            ActiveUserCount:users.length,
            users});
          
        }catch(err)
        {
           return res.status(500).json({
                success:false,
                err});
        }
    };


//Get Signle Users
export const getSingleUserController = async(req,res)=>
    {
        
        try{
           const users= await User.findById(req.params.id)
           res.status(200).json({
            success:true,
            users});
          
        }catch(err)
        {
           return res.status(500).json({
                success:false,
                err});
        }
    };

//Soft Delete
export const userDeleteController = async(req,res)=>
    {
    try{
        const deleteduser= await User.findByIdAndUpdate(req.params.id,{
            status:"Inactive"
        },
        {
            new:true
        });
        return res.status(200).json({
            success:true,
            message:"User has been deleted",
            deleteduser
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};

//Filter User
export const FilterUserQueryController = async (req, res) => {
    try {
        const query = {};

        if (req.query.id) {
            query._id = req.query.id;
        }

        if (req.query.role) {
            query['role'] = req.query.role;
        }
        if (req.query.status) {
            query['status'] = req.query.status;
        }

        if(req.query.id){
            const user = await User.findById(req.query.id);
            res.status(200).json({
                success:true,
                UserCount:user.length,
                user
            });
        }
        else{
            const user = await User.find(query);
            res.status(200).json({
                success:true,
                UserCount:user.length,
                user
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


//Search Users
export const SearchUserQueryController = async (req, res) => {
    try {
        const searchQuery = req.query.search;

        if (!searchQuery) {
            return res.status(400).json({ message: 'Please provide a search query' });
        }

        const query = {
            $or: [
                    { name: { $regex: searchQuery, $options: 'i' } },
                    { email: { $regex: searchQuery, $options: 'i' } },
                    { phone: { $regex: searchQuery, $options: 'i' } }
            ]
        };

        const user = await User.find(query);
        res.status(200).json({
            success:true,
            UserCount:user.length,
            user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};





