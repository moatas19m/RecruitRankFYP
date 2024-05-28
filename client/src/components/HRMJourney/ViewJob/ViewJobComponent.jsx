import "./viewJobComponent.css";
/* import Sidebar from "../../components/Sidebar/Sidebar" */
import { AssignmentRounded, Delete, Edit, EmailOutlined, PinDrop, Work } from "@mui/icons-material";
import PreviewJobComp from "../PreviewJob/PreviewJob";
import BasicTabs from "./TabBar.tsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios";

function ViewJob(props) {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const userData = localStorage.getItem("user");
    const [applicants, setApplicants] = useState([]);
    const [disableLoading, setDisableLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const user = JSON.parse(userData);
    const userName = user.name;
    const [hrm, setHrm] = useState({ _id: "n/a" });
    //gettersetter for job status
    const [jobStatus, setJobStatus] = useState("Active");

    useEffect(() => {
        const fetchJob = async () => {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            try {
                const response = await axios.get(`/api/job/getSingleJob/${jobId}`, { headers });
                console.log("Fetched job view data:", response.data.job); // Log the fetched job data
                setJob(response.data.job);
                setJobStatus(response.data.job.jobStatus);
                if (jobStatus === "Inactive") {
                    fetchApplicants();
                }
            } catch (error) {
                console.error("Error fetching job data:", error); // Log any errors
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
            }
        };

        fetchJob();
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
        navigate(`/HRView`);
    };
    // const handleDisable = async () => {
    //     setDisableLoading(true); // Show spinner
    //     const headers = { Authorization: `${localStorage.getItem("token")}` };
    //     try {
    //         const response= await axios.put(`/api/job/changeJobStatus/${job._id}`, job, { headers });
    //         console.log("Job disabled!", response.data);
    //         toast.success('Job disabled', {
    //             position: "bottom-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //         });
    //          // Fetch applicants and their scores
    //          const applicantsResponse = await axios.get(`/api/application/getApplications/${job._id}`, { headers });
    //          console.log("Fetched applicants data:", applicantsResponse.data);
    //          setApplicants(applicantsResponse.data);

    //         //navigate('/HRView');
    //     } catch (err) {
    //         console.error("Error disabling job:", err); // Log any errors
    //     } finally {
    //         setDisableLoading(false); // Hide spinner
    //     }
    // };

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
    // Function to handle rejection
    const handleReject = async (applicantId) => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            // Make API request to change progress status to 'Rejected'
            const response = await axios.put(`/api/application/rejectApplication/${applicantId}`, {}, { headers });
            console.log('Applicant rejected:', response.data);

            // Update the progress status locally
            updateProgressStatus(applicantId, 'Rejected');
        } catch (error) {
            console.error('Error rejecting applicant:', error);
        }
    };

    // Function to handle acceptance
    const handleAccept = async (applicantId) => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            // Make API request to change progress status to 'Accepted'
            const response = await axios.put(`/api/application/acceptApplication/${applicantId}`, {}, { headers });
            console.log('Applicant accepted:', response.data);

            // Update the progress status locally
            updateProgressStatus(applicantId, 'Accepted');
        } catch (error) {
            console.error('Error accepting applicant:', error);
        }
    };

    // Function to update progress status locally
    const updateProgressStatus = (applicantId, newStatus) => {
        setApplicants(prevApplicants =>
            prevApplicants.map(applicant =>
                applicant._id === applicantId ? { ...applicant, progress: newStatus } : applicant
            )
        );
    };


    const sortedApplicants = applicants.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
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
                                            Created by <b>{userName}</b>
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
                                        <div><b>Description:</b> {job.description}</div>
                                        <div><b>Requirements:</b> {job.requirements}</div>
                                        <div><b>Salary:</b> ${job.minSalary} - ${job.maxSalary}</div>
                                        <div><b>Job Level:</b> {job.joblevel}</div>
                                        <div><b>Experience:</b> {job.experience}</div>
                                        <div><b>Education:</b> {job.education}</div>
                                        <div><b>Benefits:</b> {job.benefits}</div>
                                        {/* <div><b>Status:</b> {job.status}</div> */}
                                        <div><b>Status:</b> {job.jobStatus}</div>
                                    </div>
                                    {/* <BasicTabs /> */}
                                    

                                </div>
                            </div>
                            <div className="rightPane">
                                
                                <div className="applicantsSection">
                                    <h2>Applicants</h2>
                                    <ul>
                                        {sortedApplicants.map((applicant) => (
                                            <li key={applicant._id}>
                                                <div className="applicantInfo">
                                                    {applicant.user && (
                                                        <>
                                                            <p><b>Name:</b> {applicant.user.name}</p>
                                                            <p><b>Email:</b> {applicant.user.email}</p>
                                                            {/* <p><b>Phone:</b> {applicant.user.phone}</p> */}
                                                        </>
                                                    )}
                                                    {/* <p><b>Applied On:</b> {new Date(applicant.createdAt).toLocaleDateString()}</p> */}
                                                </div>
                                                <div className="scoreBox">
                                                    <div className="scoreHeading">Score</div>
                                                    <div className="scoreValue">{applicant.score}</div>
                                                </div>
                                                <div className="progressStatus">
                                                    <p><b>Progress:</b> {applicant.progress}</p>
                                                    {/* <p><b>Status:</b> {applicant.status}</p> */}
                                                </div>
                                                <div className="actionButtons">
                                                    <button className="rejectButton" onClick={() => handleReject(applicant._id)}>Reject</button>
                                                    <button className="acceptButton" onClick={() => handleAccept(applicant._id)}>Accept</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
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

export default ViewJob;