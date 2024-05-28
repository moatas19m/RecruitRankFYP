import { Link, useNavigate } from "react-router-dom";
import "./cJobFields.css";
import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CJobFields(props) {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const userId = user.id;

    const [descValue, setDescValue] = useState("");
    const [reqValue, setReqValue] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [workplace, setWorkplace] = useState("Remote");
    const [location, setLocation] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [joblevel, setJobLevel] = useState("Entry-level");
    const [experience, setExperience] = useState("");
    const [education, setEducation] = useState("Graduate");
    const [shift, setShift] = useState("Morning");
    const [benefits, setBenefits] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const [sliderValues, setSliderValues] = useState({
        skillweight: 0.25,
        cgpaweight: 0.25,
        educationweight: 0.25,
        disciplineweight: 0.25,
    });

    const navigate = useNavigate();
    console.log("userid ", userId);
    const editorStyles = {
        borderRadius: "1em",
        border: "none",
        fontSize: "2em",
        color: "#000",
        backgroundColor: "#f1f1f1",
        height: "32vh",
    };

    const handleSliderChange = (slider, value) => {
        const newSliderValues = { ...sliderValues, [slider]: value };
        const total = Object.values(newSliderValues).reduce((a, b) => a + b, 0);

        if (total <= 1) {
            setSliderValues(newSliderValues);
        } else {
            const excess = total - 1;
            const remainingSliders = Object.keys(newSliderValues).filter(s => s !== slider);
            const maxValue = remainingSliders.reduce((max, s) => (newSliderValues[s] > max ? newSliderValues[s] : max), 0);

            const adjustedSliders = remainingSliders.reduce((acc, s) => {
                const newValue = newSliderValues[s] - (excess * (newSliderValues[s] / maxValue));
                return { ...acc, [s]: newValue < 0 ? 0 : newValue };
            }, {});

            setSliderValues({ ...newSliderValues, ...adjustedSliders });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {};
        if (!company) errors.company = true;
        if (!title) errors.title = true;
        if (!location) errors.location = true;
        if (!minSalary) errors.minSalary = true;
        if (!maxSalary) errors.maxSalary = true;
        if (!experience) errors.experience = true;
        if (!benefits) errors.benefits = true;
        if (descValue === "") errors.description = true;
        if (reqValue === "") errors.requirements = true;

        setValidationErrors(errors);

        if (Object.keys(errors).length > 0) {
            // If there are errors, prevent form submission
            return;
        }

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
            weights: {
                cosine_similarity_weight: sliderValues.skillweight,
                cgpa_weight: sliderValues.cgpaweight,
                degree_match_weight: sliderValues.educationweight,
                discipline_match_weight: sliderValues.disciplineweight,
            },
        };

        console.log(job);

        try {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            const { response } = await axios.post("/api/job/postjob", job, { headers });

            if (response && response.data) {
                console.log(response.data);
            }
            setIsLoading(true);
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
                            <button className="preview" disabled={isLoading} onClick={handleSubmit}>
                                {isLoading ? <div className="spinner"></div> : "Submit"}
                            </button>
                        </div>
                    </div>
                    <div className="FormsContainer">

                        <div className="basicInfo">
                            <div className="basicInfoWrapper">
                                <div className="subHeading">Basic Info</div>
                                <div className="slidersContainer">
                                    <div className="sliderRow">
                                        <label>Skills Weightage: {(sliderValues.skillweight * 100).toFixed(0)}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={sliderValues.skillweight}
                                            onChange={(e) => handleSliderChange("skillweight", parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div className="sliderRow">
                                        <label>CGPA Weightage: {(sliderValues.cgpaweight * 100).toFixed(0)}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={sliderValues.cgpaweight}
                                            onChange={(e) => handleSliderChange("cgpaweight", parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div className="sliderRow">
                                        <label>Education Weightage: {(sliderValues.educationweight * 100).toFixed(0)}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={sliderValues.educationweight}
                                            onChange={(e) => handleSliderChange("educationweight", parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div className="sliderRow">
                                        <label>Discipline Weightage: {(sliderValues.disciplineweight * 100).toFixed(0)}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={sliderValues.disciplineweight}
                                            onChange={(e) => handleSliderChange("disciplineweight", parseFloat(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <input type="text" name="company" className="TextFieldSmall"  placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} required />
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
