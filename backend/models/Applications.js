import mongoose from "mongoose";

const applicationSchema= new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    job:{
        type:mongoose.ObjectId,
        ref:"Job",
        required:true
    },
    progress:{type: String, enum:["Accepted", "Rejected", "In-progress"], default:"In-progress", required:false},
    status:{type:String, enum:["Active", "Inactive"], default:"Active", required:false},
    score:{type:String, required: false}
},
 {timestamps:true}
 );


export default mongoose.model("Application", applicationSchema);