import mongoose from "mongoose";

const jobSchema= new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    company:{type: String, required:true, trim:true},
    title:{type: String, required:true, trim:true},
    description:{type: String, required:true},
    requirements:{type: String, required:true},
    type:{type: String, enum:["Remote","Hybrid","Onsite"], required:true},
    shift:{type: String, enum:["Morning", "Afternoon", "Night"], required:true},
    status:{type:String, enum:["Active", "Inactive"], default:"Active", required:true}

},
 {timestamps:true}
 );


export default mongoose.model("Job", jobSchema);