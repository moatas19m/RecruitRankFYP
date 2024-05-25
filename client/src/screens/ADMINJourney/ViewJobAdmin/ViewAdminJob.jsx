import "./ViewAdminJob.css"
/* import Sidebar from "../../components/Sidebar/Sidebar" */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewAdminJob from "../../../components/ADMINJourney/ViewAdminJob/ViewAdminJobComp";
import AdminSidebar from "../../../components/ADMINJourney/AdminSidebar/AdminSidebar";
//import ViewJobComponent from "../../../components/HRMJourney/ViewJob/ViewJobComponent"; // Ensure the path is correct

function ViewadminJob(props) {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            try {
                const response = await axios.get(`/api/job/getSingleJob/${jobId}`, { headers });
                console.log("Fetched job data:", response.data.job); // Log the fetched job data
                setJob(response.data.job);
                console.log("Job title:", response.data.job.title);
            } catch (error) {
                console.error("Error fetching job data:", error); // Log any errors
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
            }
        };

        fetchJob();
    }, [jobId]);

    return (
        
        <div className="ViewJob">
            <div className="wrapper">
                <AdminSidebar />
                {loading ? (
                    <div className="loadingWrapper">
                        <div className="Heading">Loading...</div>
                    </div>
                ) : job.title ? (
                    <div className="viewJobComponent">
                        <ViewAdminJob job={job} />
                    </div>
                ) : (
                    <div className="errorWrapper">
                        <div className="Heading">Job not found</div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ViewadminJob;
