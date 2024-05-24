import { Link, useNavigate } from "react-router-dom";
import "./cJobFields.css";
import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CJobFields(props) {
    const userData = localStorage.getItem("user");

    // Parse the JSON string to get the user object
    const user = JSON.parse(userData);
  
    // Access the id from the user object
    const userId = user.id;
    const [descValue, setDescValue] = useState("");
    const [reqValue, setReqValue] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [workplace, setWorkplace] = useState("Remote"); // Default value
    const [location, setLocation] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [joblevel, setJobLevel] = useState("Entry-level"); // Default value
    const [experience, setExperience] = useState("");
    const [education, setEducation] = useState("Graduate"); // Default value
    const [shift, setShift] = useState("Morning"); // Default value
    const [benefits, setBenefits] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    console.log ("userid ",  userId)
    const editorStyles = {
        borderRadius: "1em",
        border: "none",
        fontSize: "2em",
        color: "#000",
        backgroundColor: "#f1f1f1",
        height: "32vh",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const stripHtmlTags = (html) => {
            const tmp = document.createElement("div");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        };

        const job = {
            user: userId,
            company: company,
            title: title,
            description: stripHtmlTags(descValue),
            requirements: stripHtmlTags(reqValue),
            minSalary: minSalary,
            maxSalary: maxSalary,
            location: location,
            type: workplace,
            
            joblevel: joblevel,
            experience: experience,
            education: education,
            shift: shift,
            benefits: benefits,
        };

        console.log(job);

        try {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            const {response} = await axios.post("/api/job/postjob", job,{headers});
            
            // await axios.put(`/hrms/${userId}/jobsCreated`, {
            //     jobsCreatedId: response.data._id,
            // });
            if (response && response.data) {
                console.log(response.data);
            }
            setIsLoading(false);
           navigate(`/HRView`);
        } catch (error) {
            console.error("Error posting job:", error);
            if (error.response) {
                console.log("Server responded with status:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        }
    };

    return (
        <div className="cJobFields">
            <div className="cJobFieldsWrapper">
                <form onSubmit={handleSubmit}>
                    <div className="topBar">
                        <div className="Heading">Create Job</div>
                        <div className="buttonContainer">
                            {/* <Link to={"/HRView"}> */}
                                {/* <button className="discard">Discard</button> */}
                                <button className="preview" disabled={isLoading} onClick={handleSubmit}>
                                {isLoading ? <div className="spinner"></div> : "Submit"}
                            </button>
                            {/* </Link> */}
                            {/* <Link to={"/createJob/preview"}> */}
                      
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="FormsContainer">
                        <div className="basicInfo">
                            <div className="basicInfoWrapper">
                                <div className="subHeading">Basic Info</div>
                                <input type="text" name="company" className="TextFieldSmall" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} required />
                                <input type="text" name="jobTitle" className="TextFieldSmall" placeholder="Job Title (e.g: Software Engineer)" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            <select name="workplace" className="ComboBox" value={workplace} onChange={(e) => setWorkplace(e.target.value)} required>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Onsite">Onsite</option>
                            </select>
                            <input type="text" name="location" className="TextFieldSmall" placeholder="Location (e.g: Chicago,IL)" value={location} onChange={(e) => setLocation(e.target.value)} required />
                            <input type="number" name="minSalary" className="TextFieldSmall" placeholder="Min Salary" value={minSalary} onChange={(e) => setMinSalary(e.target.value)} required />
                            <input type="number" name="maxSalary" className="TextFieldSmall" placeholder="Max Salary" value={maxSalary} onChange={(e) => setMaxSalary(e.target.value)} required />
                            <select name="joblevel" className="ComboBox" value={joblevel} onChange={(e) => setJobLevel(e.target.value)} required>
                                <option value="Entry-level">Entry-level</option>
                                <option value="Mid-Senior">Mid-Senior</option>
                                <option value="Senior">Senior</option>
                                <option value="Executive">Executive</option>
                            </select>
                            <input type="text" name="experience" className="TextFieldSmall" placeholder="Experience (e.g: 3 years)" value={experience} onChange={(e) => setExperience(e.target.value)} required />
                            <select name="education" className="ComboBox" value={education} onChange={(e) => setEducation(e.target.value)} required>
                                <option value="Graduate">Graduate</option>
                                <option value="Post-Graduate">Post-Graduate</option>
                                <option value="Doctorate">Doctorate</option>
                            </select>
                            <select name="shift" className="ComboBox" value={shift} onChange={(e) => setShift(e.target.value)} required>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Night">Night</option>
                            </select>
                            <input type="text" name="benefits" className="TextFieldSmall" placeholder="Benefits" value={benefits} onChange={(e) => setBenefits(e.target.value)} required />
                                                            
                            </div>
                        </div>
                        <div className="DescriptiveInfo">
                            <div className="subHeading">Descriptive Info</div>
                            <ReactQuill name="description" className="TextField" placeholder="Job Description" style={editorStyles} value={descValue} onChange={setDescValue} required />
                            <ReactQuill name="requirements" className="TextField" placeholder="Requirements" style={editorStyles} value={reqValue} onChange={setReqValue} required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CJobFields;
