import { compare } from "bcrypt";
import { comparePassword, hashPassword } from "../helper/authHelper.js"
import User from "../models/User.js"
import  Jwt  from "jsonwebtoken";

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
    const query=req.query.new
    try{
       const users= query?await User.find().sort({_id:-1}).limit(1) : await User.find(req.params.id)
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

//Get Active Users
export const getActiveUserController = async(req,res)=>
{
    const query=req.query.new
    try{
       const users= query?await User.find({status:"Active"}).sort({_id:-1}).limit(1) : await User.find(req.params.id)
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
        const deletedduser= await User.findByIdAndUpdate(req.params.id,{
            status:"Inactive"
        },
        {
            new:true
        });
        return res.status(200).json({
            success:true,
            message:"User has been deleted",
            deletedduser
        });
 
    } 
      catch(err){
        return res.status(500).json({
            success:false,
            err});
    }
};


