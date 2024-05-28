import { Link, useNavigate, useParams } from "react-router-dom";
import "./cJobFieldsEdit.css"
import { useEffect, useState } from "react"
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
function CJobFieldsEdit(props) {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const userId = user.id;
    const [descValue, setDescValue] = useState("");
    const [reqValue, setReqValue] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [workplace, setWorkplace] = useState(""); // Default value
    const [location, setLocation] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [joblevel, setJobLevel] = useState(""); // Default value
    const [experience, setExperience] = useState("");
    const [education, setEducation] = useState(""); // Default value
    const [shift, setShift] = useState(""); // Default value
    const [benefits, setBenefits] = useState("");
    const { jobId } = useParams()
    const [tags, setTags] = useState([]);
    const [pos, setPos] = useState(1);
    const [job, setJob] = useState({ _id: "n/a" })

    const [sliderValues, setSliderValues] = useState({
        skillweight: 25,
        cgpaweight: 25,
        educationweight: 25,
        disciplineweight: 25,
    });

    const editorStyles = {
        borderRadius: '0.5em',
        border: 'none',
        fontSize: '2em',
        color: '#000',
        backgroundColor: "#f1f1f1",
        height: "32vh"
    };

    const navigate = useNavigate()

    const IncPos = () => {
        setPos(pos + 1);
    }

    const decPos = () => {
        setPos(pos - 1);
    }

    function handleKeyDown(e) {
        if (e.key === 'Backspace' && e.target.value === "") rmeoveTag(tags.length - 1)
        if (e.key === 'Enter') {
            const value = e.target.value;
            if (value.trim() === "") return;
            setTags([...tags, value])
            e.target.value = ''
        }
    }
    function rmeoveTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const job = {
            user: userId,
            company: company,
            title: title,
            description: descValue,
            requirements: reqValue,
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

        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            
            const response = await axios.put(
                `/api/job/updatejob/${jobId}`,
                job, {headers}
            )
            console.log(response.data)
            navigate(`/HRView/ShowMyJobs`);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        const getJob = async () => {
            await axios

                .get(`/api/job/getSingleJob/${jobId}`, {headers})
                .then((res) => {
                    setJob(res.data.job)
                    // setTags(res.data.skills)
                    setCompany(res.data.job.company);
                    setTitle(res.data.job.title);
                    setWorkplace(res.data.job.type);
                    setLocation(res.data.job.location);
                    setMinSalary(res.data.job.minSalary);
                    setMaxSalary(res.data.job.maxSalary);
                    setJobLevel(res.data.job.joblevel);
                    setExperience(res.data.job.experience);
                    setEducation(res.data.job.education);
                    setShift(res.data.job.shift);
                    setDescValue(res.data.job.description);
                    setReqValue(res.data.job.requirements);
                    setBenefits(res.data.job.benefits);
                })
                .catch((err) => console.log(err))
        }
        if (job._id == "n/a") {
            getJob();
        }
    })
    const handleSliderChange = (slider, value) => {
        const newSliderValues = { ...sliderValues, [slider]: value };
        const total = Object.values(newSliderValues).reduce((a, b) => a + b, 0);

        if (total <= 100) {
            setSliderValues(newSliderValues);
        } else {
            const excess = total - 100;
            const remainingSliders = Object.keys(newSliderValues).filter(s => s !== slider);
            const maxValue = remainingSliders.reduce((max, s) => (newSliderValues[s] > max ? newSliderValues[s] : max), 0);

            const adjustedSliders = remainingSliders.reduce((acc, s) => {
                const newValue = newSliderValues[s] - Math.round(excess * (newSliderValues[s] / maxValue));
                return { ...acc, [s]: newValue < 0 ? 0 : newValue };
            }, {});

            setSliderValues({ ...newSliderValues, ...adjustedSliders });
        }
    };

    return (
        <div className="cJobFields">
            <div className="cJobFieldsWrapper">
                {
                    job._id === "n/a" ? <div className="Heading">Loading...</div>
                        :
                        <form onSubmit={handleSubmit}>
                            <div className="topBar">
                                <div className="Heading">Edit Job</div>
                                <div className="buttonContainer">
                                    <Link to={"/HRView/ShowMyJobs"}>
                                        <button className="discard" type="">Discard</button>
                                    </Link>
                                    {/* <Link to={"/createJob/preview"}> */}
                                    <button className="preview" onClick={handleSubmit}>Update</button>
                                    {/* </Link> */}
                                </div> 
                            </div>
                            <div className="FormsContainer">
                        <div className="basicInfo">
                            <div className="basicInfoWrapper">
                                <div className="subHeading">Basic Info</div>
                                <div className="slidersContainer">
                                    <div className="sliderRow">
                                        <label>Skills Weightage: {sliderValues.skillweight}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={sliderValues.skillweight}
                                            onChange={(e) => handleSliderChange("skillweight", parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="sliderRow">
                                        <label>CGPA Weightage: {sliderValues.cgpaweight}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={sliderValues.cgpaweight}
                                            onChange={(e) => handleSliderChange("cgpaweight", parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="sliderRow">
                                        <label>Education Weightage: {sliderValues.educationweight}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={sliderValues.educationweight}
                                            onChange={(e) => handleSliderChange("educationweight", parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="sliderRow">
                                        <label>Discipline Weightage: {sliderValues.disciplineweight}%</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={sliderValues.disciplineweight}
                                            onChange={(e) => handleSliderChange("disciplineweight", parseInt(e.target.value))}
                                        />
                                    </div>
                                </div>
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
                }
            </div>
        </div>
    )
}
export default CJobFieldsEdit