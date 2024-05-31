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
    minSalary:{type: Number, required:true},
    maxSalary:{type: Number, required:true},
    location:{type: String, required:true},
    jobposted:{type:Date, default:Date.now},
    joblevel:{type:String, enum:["Entry-level", "Mid-Senior", "Senior", "Executive"], default:"Entry-level", required:true},
    experience:{type:String, require:true},
    education:{type:String, enum:["Graduate", "Post-Graduate", "Doctorate"], default:"Graduate", required:true},
    type:{type: String, enum:["Remote","Hybrid","Onsite"], required:true},
    shift:{type: String, enum:["Morning", "Afternoon", "Night"], required:true},
    benefits:{type: String, required:true},
    status:{type:String, enum:["Active", "Inactive"], default:"Active", required:true},
    parsedData: { type: mongoose.Schema.Types.Mixed, required: false },
    jobStatus:{type:String, enum:["Active", "Inactive"], default:"Active"},
    weights: {
        cosine_similarity_weight: { type: Number, default: "0.5" },
        cgpa_weight: { type: Number, default: "0.1" },
        degree_match_weight: { type: Number, default: "0.2" },
        discipline_match_weight: { type: Number, default: "0.2" }
    }
},
 {timestamps:true}
 );


export default mongoose.model("Job", jobSchema);