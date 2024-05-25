import "./AdminHomeFeed.css"
import { Error, Search } from "@mui/icons-material"
import JobCard from "../../CANDJourney/Widgets/JobCard/jobCard.jsx";
import { useEffect, useState } from "react"
import axios from "axios"
import { CircularProgress, LinearProgress } from "@mui/material"
function AdminFeed() {
    const userData = localStorage.getItem("user");
    const users = JSON.parse(userData);
    const userId = users.id;

    const [user, setUser] = useState({ _id: "n/a" });
    const [jobs, setJobs] = useState([])
    const [compjobs, setCompJobs] = useState([])
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        // Fetch the list of posted jobs from the API
        const fetchJobs = async () => {
            try {
                const headers = { Authorization: `${localStorage.getItem("token")}` };
                const response = await axios.get(`/api/job/getActiveJobs`, { headers });
                console.log("Response data:", response.data);
        
                // Check if response.data.job is an array before setting the jobs state
                if (response.data.jobs && Array.isArray(response.data.jobs)) {
                    setJobs(response.data.jobs);
                } else {
                    console.error("Response data.job is not an array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs(); // Call the fetchJobs function when the component mounts
    }, []);

    
    const userD = localStorage.getItem("user");
    const UserD = JSON.parse(userD);
    const userName = UserD.name;
    return (
        <div className="feed">
            <div className="feedWrapper">
                <div className="topSection">
                    <div className="feedTitle">Hello, {userName}</div>
                    <div className="searchbar">
                        <Search className="SearchIcon" />
                        <input placeholder="Search across the system..." type="text" className="searchInput" />
                    </div>
                </div>
                <div className="jobPostingsSectionContainer">
                    <div className="jobPostingsSection">
                        <div className="jobPostingHeading">All Jobs</div>
                        <div className="jobPostingsContainer">
                            {isLoading ? <div className="jobPostings"> <LinearProgress /> </div> :
                                jobs.length === 0 ? <div className="jobPostingsError"><div className="error"><Error />No jobs found...</div></div> :
                                    < div className="jobPostings">
                                        {
                                            jobs.map((job) => (<JobCard key={job._id} job={job} />))
                                        }
                                    </div>
                            }
                        </div>
                        {/* <div className="jobPostingHeading">Company Jobs</div>
                        <div className="jobPostingsContainer">
                            {isLoading ? <div className="jobPostings"> <LinearProgress /> </div> :
                                compjobs.length === 0 ? <div className="jobPostingsError"><div className="error"><Error />No jobs found...</div></div> :
                                    < div className="jobPostings">
                                        {
                                            compjobs.map((j) => (<JobCard key={j._id} job={j} />))
                                        }
                                    </div>
                            }
                        </div> */}
                    </div></div>
            </div>
        </div >
    )
}
export default AdminFeed


/* you can implement the "show more" functionality using React state and event handlers.

Create a state variable to keep track of whether the additional items are visible:
const [showMore, setShowMore] = useState(false);

Define a function to toggle the "showMore" state when the "Show more" button is clicked:
function handleShowMore() {
setShowMore(!showMore);
}

Render the grid items based on the "showMore" state:
<div className="jobPostings">
  {jobCards.slice(0, 6)}
  {showMore && jobCards.slice(6)}
</div>
Here, the first six items are always shown, but the rest are only rendered if the "showMore" state is true.

Render the "Show more" button:
{jobCards.length > 6 && (
<button onClick={handleShowMore}>
{showMore ? "Show less" : "Show more"}
</button>
)}

This code checks if there are more than 6 job cards and, if so, renders the "Show more" button with the appropriate text ("Show more" or "Show less", depending on the "showMore" state). When the button is clicked, the "handleShowMore" function is called, toggling the "showMore" state and causing the grid to re-render with the additional items either shown or hidden.

Putting it all together, your React component might look something like this:

import { useState } from "react";

function JobPostings({ jobCards }) {
const [showMore, setShowMore] = useState(false);

function handleShowMore() {
setShowMore(!showMore);
}

return (
<div className="jobPostings">
{jobCards.slice(0, 6)}
{showMore && jobCards.slice(6)}
{jobCards.length > 6 && (
<button onClick={handleShowMore}>
{showMore ? "Show less" : "Show more"}
</button>
)}
</div>
);
} */