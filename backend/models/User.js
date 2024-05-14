import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type: String, required:true, trim:true},
    email:{type: String, required:true, unique:true},
    password:{type:String, required: true},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    answer:{type:String,required:true},
    cv:{type:String, required:false},
    role:{type:String, enum:["Recruiter","Applicant","Admin"],required:true},
    isAdmin: {type:Boolean, default:false},
    status:{type:String, enum:["Active","Inactive"],default:"Active",required:true},
    parsedData: { type: mongoose.Schema.Types.Mixed, required: false }
},
 {timestamps:true}
 );


export default mongoose.model("User", userSchema);