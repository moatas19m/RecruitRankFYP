import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard"; // Assume you have a JobCard component for displaying individual job details
import "./jobList.css"
import { Link } from "react-router-dom";
function JobList() {
    const [jobs, setJobs] = useState([]);

    const userData = localStorage.getItem("user");

    // Parse the JSON string to get the user object
    const user = JSON.parse(userData);
  
    // Access the id from the user object
    const userId = user.id;
    console.log(userId)
    useEffect(() => {
        // Fetch the list of posted jobs from the API
        const fetchJobs = async () => {
            try {
                const headers = { Authorization: `${localStorage.getItem("token")}` };
                const response = await axios.get(`/api/job/userActiveJob/${userId}`, { headers });
                console.log("Response data:", response.data);
        
                // Check if response.data.job is an array before setting the jobs state
                if (response.data.job && Array.isArray(response.data.job)) {
                    setJobs(response.data.job);
                } else {
                    console.error("Response data.job is not an array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs(); // Call the fetchJobs function when the component mounts
    }, []);

    return (
        <div className="jobList">
            <div className="jobListWrapper">
                <div className="topBar">
                    <div className="Heading">Posted Jobs</div>
                </div>
                <div className="jobCardsContainer">
                {jobs.map((job) => (
                        <Link key={job._id} to={`/HRView/ViewJob/${job._id}`} style={{ textDecoration: "none" }}>
                            <div>
                                <JobCard job={job} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default JobList;
