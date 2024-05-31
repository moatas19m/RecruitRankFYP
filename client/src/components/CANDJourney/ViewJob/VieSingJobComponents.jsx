import "./ViewJobComponents.css";
import { AssignmentRounded, PinDrop, Work } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios";

function CandViewSingJob(props) {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [application, setApplication] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const userd = JSON.parse(userData);
    const userId = userd.id;
    const usercv = userd.cv;
    const [appID, setAppID] = useState({});
    const [ApplyDisabled, setApplyDisabled] = useState(false);
    const [progressStatus, setProgressStatus] = useState(null);
    const [showProgressTab, setShowProgressTab] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            try {
                const response = await axios.get(`/api/job/getSingleJob/${jobId}`, { headers });
                console.log("Fetched job view data:", response.data.job);
                setJob(response.data.job);
            } catch (error) {
                console.error("Error fetching job data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);

    // useEffect(() => {
    //     const fetchApplication = async () => {
    //         const headers = { Authorization: `${localStorage.getItem("token")}` };
    //         try {
    //             const response = await axios.get(`/api/application/getApplications/${job._id}`, { headers });
    //             console.log("Fetched application data:", response.data.application);
    //         } catch (error) {
    //             console.error("Error fetching application data:", error);
    //         }
    //     };

    //     if (job._id) {
    //         fetchApplication();
    //     }
    // }, [job]);

    const handleApply = async (event) => {
        event.preventDefault();

        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            const response = await axios.get(`/api/application/getApplication/${userId}/${job._id}`, { headers });
            const applications = response.data.application;
            if (applications && applications.length > 0) {
                setApplication(applications[0]);
                setProgressStatus(applications[0].progress);
                setShowProgressTab(true); // Set progress status
            }
            console.log("Fetched application data usman:", applications[0].progress);
            // setApplication(response.data.application);
            // console.log("HElloooo", response.data.application);
            // setApplication(application[0]);
            // setProgressStatus(applications[0].progress);
            // setProgressStatus(response.data.application.data.progress);
            // setAppID(response.data.savedApplication._id);
            // setApplyDisabled(true);
            // console.log("Usman", appID);
            // toast.success("You have successfully applied to the job");
            // navigate(`/CANDView/AppliedJobsScreen`);
        } catch (error) {
            console.error(error);
        }
    };
    const getProgressColor = (status) => {
        switch (status) {
            case "Accepted":
                return "green";
            case "Rejected":
                return "red";
            case "In-progress":
                return "#76c7c0"; // Keeping the existing color for in-progress
            default:
                return "#76c7c0"; // Default color
        }
    };

    return (
        <div className="ViewJob">
            <div className="wrapper">
                {loading ? (
                    <div className="loadingWrapper">
                        <div className="Heading">Loading...</div>
                    </div>
                ) : job.title ? (
                    <div className="viewJobComponent">
                        <div className="topBar">
                            <div className="headingAndAtts">
                                <div className="Heading">{job.title}</div>
                                <div className="attsColumns">
                                    <div className="attItem"><PinDrop /> {job.location} ({job.type})</div>
                                    <div className="attItem"><Work /> {job.shift} shift</div>
                                </div>

                          
                                <div className="applyButtonContainer">
                                {job.jobStatus === 'Active' ? (
                                    <button className="applyButtonTop" disabled>
                                        Results
                                    </button>
                                ): (
                                    <button className="applyButtonTop" onClick={handleApply}>
                                        Results
                                    </button>
                                )}
                                 
                            </div>
                            </div>
                        </div>
                        {showProgressTab && (
                            <div className="progressTab">
                                <h3>Application Progress</h3>
                                <div className="progressStatus">
                                    <div className="progressBar">
                                        <div className="progress" style={{ width: '100%', backgroundColor: getProgressColor(progressStatus) }}>
                                            <div className="progressText">{progressStatus}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="bottomStuff">
                            <div className="bottomWrapper">
                                <div className="leftPane">
                                    <div className="paneWrapper">
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
                                            <div><b>Status:</b> {job.status}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="rightPane">
                                    
                                </div> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="errorWrapper">
                        <div className="Heading">Error loading job details</div>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
}

export default CandViewSingJob;
