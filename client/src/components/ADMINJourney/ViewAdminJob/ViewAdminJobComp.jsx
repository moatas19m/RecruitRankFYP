import "./ViewAdminJobComp.css";
/* import Sidebar from "../../components/Sidebar/Sidebar" */
import { AssignmentRounded, CleanHands, Delete, Edit, EmailOutlined, PinDrop, Work } from "@mui/icons-material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios";

function ViewAdminJob(props) {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const userName = user.name;
    const useremail = user.email;
    const [hrm, setHrm] = useState({ _id: "n/a" });
    const [jobMaker, setjobMaker] = useState()

    const [applicants, setApplicants] = useState([]);
    const [disableLoading, setDisableLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [jobStatus, setJobStatus] = useState("");
    const [showViewApplicantsButton, setShowViewApplicantsButton] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            try {
                const response = await axios.get(`/api/job/getSingleJob/${jobId}`, { headers });
                console.log("Fetched job view data:", response.data.job); // Log the fetched job data
                setJob(response.data.job);
                setjobMaker(response.data.job.user.name)
                setJobStatus(response.data.job.jobStatus);
                if (jobStatus === "Inactive") {
                    fetchApplicants();
                }
                console.log("Job Maker", response.data.job.user.name)
            } catch (error) {
                console.error("Error fetching job data:", error); // Log any errors
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
            }
        };

        fetchJob();
        setShowViewApplicantsButton(jobStatus === "Inactive");
    }, [jobId, jobStatus]);

    const delJob = async () => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {

            await axios.put(`/api/job/deletejob/${job._id}`, job, { headers });
            console.log("Job deleted!");
            notifyDelete();
        } catch (err) {
            console.log(err);
        }
    };

    const notifyDelete = () => {
        toast.success('Job deleted', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        toast.success("Job Deleted Successfully")
        navigate(`/ADMINView`);
    };

    const handleDisable = async () => {
        setDisableLoading(true); // Show spinner
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            const response = await axios.put(`/api/job/changeJobStatus/${job._id}`, job, { headers });
            console.log("Job disabled!", response.data);
            setIsDisabled(true); // Prevent further clicks on disable button
            toast.success('Job disabled', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setJobStatus("Inactive"); // Fetch applicants after disabling the job
        } catch (err) {
            console.error("Error disabling job:", err); // Log any errors
        } finally {
            setDisableLoading(false); // Hide spinner
        }
    };

    const fetchApplicants = async () => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            const applicantsResponse = await axios.get(`/api/application/getApplications/${jobId}`, { headers });
            console.log("Fetched applicants data:", applicantsResponse.data);
            console.log("Fetched Applicant", applicantsResponse.data.application)
            setApplicants(applicantsResponse.data.application);
        } catch (err) {
            console.error("Error fetching applicants data:", err); // Log any errors
        }
    };

    return (
        // <div className="ViewJob">
        <div className="wrapper">
            {/* <Sidebar /> */}
            {loading ? (
                <div className="loadingWrapper">
                    <div className="Heading">Loading...</div>
                </div>
            ) : job.title ? (
                <div className="viewJobComponent">
                    <div className="topBar">
                        {((jobStatus === "Active" && !isDisabled) || jobStatus === "Inactive") && (
                            <>
                                {jobStatus === "Active" && !isDisabled && (
                                    <button className="disableButton" onClick={handleDisable} disabled={disableLoading}>
                                        {disableLoading ? <span className="spinner"></span> : 'Disable'}
                                    </button>
                                )}

                            </>
                        )}
                        
                        <div className="headingAndAtts">
                            <div className="Heading">{job.title}</div>
                            <div className="attsColumns">
                                <div className="attItem"><PinDrop /> {job.location} ({job.type})</div>
                                <div className="attItem"><Work /> {job.shift} shift</div>
                            </div>  
                            {showViewApplicantsButton && (
                            <Link to={`/ADMINView/ViewJob/applicants/${jobId}`} className="link">
                                <button className="viewApplicantsButton">View Applicants</button>
                            </Link>
                        )}
                        </div>
                        <div className="Spots">
                            <div className="delete" onClick={delJob}><Delete />
                            </div>
                            <Link to={`/HRView/editJob/${jobId}`}>
                                <div className="edit"><Edit /></div>
                            </Link>
                        </div>

                    </div>
                    {/* <div className="bottomStuff"> */}
                    <div className="bottomWrapper">
                        <div className="leftPane">
                            <div className="paneWrapper">
                                <div className="countsAndHRM">
                                    <div className="HrmCreator">
                                        Created by <b>{jobMaker}</b>
                                        <Link to={`mailto:${hrm.email}`}><EmailOutlined /></Link>
                                    </div>
                                </div>
                                <div className="linkSection">
                                    <div className="linkPartContainer">
                                        <div className="linkPart">www.recruitranks.com/api/jobs/{job._id}</div>
                                    </div>
                                    <div className="iconPat"><AssignmentRounded /></div>
                                </div>
                                <div className="jobDetails">
                                    <div><b>Company:</b> {job.company}</div>
                                    <div><b>Description:</b> {job.description.replace(/<[^>]*>/g, '')}</div>
                                    <div><b>Requirements:</b> {job.requirements.replace(/<[^>]*>/g, '')}</div>
                                    <div><b>Salary:</b> PKR{job.minSalary} - PKR{job.maxSalary}</div>
                                    <div><b>Job Level:</b> {job.joblevel}</div>
                                    <div><b>Experience:</b> {job.experience}</div>
                                    <div><b>Education:</b> {job.education}</div>
                                    <div><b>Benefits:</b> {job.benefits}</div>
                                    {/* <div><b>Status:</b> {job.status}</div> */}
                                    <div><b>Status:</b> {job.jobStatus}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                // </div>
            ) : (
                <div className="errorWrapper">
                    <div className="Heading">Job not found</div>
                </div>
            )}
            {/* </div> */}
            <ToastContainer />
        </div>
    );
}

export default ViewAdminJob;
