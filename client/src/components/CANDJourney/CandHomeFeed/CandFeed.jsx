import "./Candfeed.css"
import { Error, Search } from "@mui/icons-material"
import CandJobCard from "../Widgets/CandJobCard/CandJobCard"
import TuneIcon from '@mui/icons-material/Tune';
import axios from "axios";
import { useState, useEffect } from "react";
import { CircularProgress, LinearProgress } from "@mui/material"
import JobCard from "../../CANDJourney/Widgets/JobCard/jobCard.jsx";

function CandFeed() {
    const [isLoading, setIsloading] = useState(false)
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const headers = { Authorization: `${localStorage.getItem("token")}` };
                const response = await axios.get(`/api/job/getActiveJobs/`, { headers });
                console.log("Response data:", response.data.jobs);
        
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
        fetchJobs();
    }, [])

    const userD = localStorage.getItem("user");
    const UserD = JSON.parse(userD);
    const userName = UserD.name;

    const handleSearchChange = (event) => {
        const keyword = event.target.value;
        fetchSearchJobs(keyword);
    };


    const fetchSearchJobs = async (keyword) => {
        try {
            console.log("coming")
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            const response = await axios.post(`/api/job/searchJobs`,{keyword:keyword}, { headers });
            console.log("Response data:", response.data.jobs);
    
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


    return (
        <div className="CandfeedHome">
            <div className="CandfeedWrapper1">
                <div className="CandfeedTitle1">Hello, {userName}</div>
                <div className="Candsearchbar1">
                    <Search className="CandSearchIcon1" />
                    <input placeholder="Search across the system..." type="text" className="searchInput" onChange={handleSearchChange}/>
                </div>
                <div className="Candjobss">
                    <div className="CandjobPostingHeading1">Available Jobs</div>
                    <button className="filter"><TuneIcon /> </button>
                </div>

                <div className="line"> </div>
                <div className="CandjobPostings1">
                {isLoading ? <div className="jobPostings"> <LinearProgress /> </div> :
                                jobs.length === 0 ? <div className="jobPostingsError"><div className="error"><Error />No jobs found...</div></div> :
                                    < div className="jobPostings">
                                        {
                                            jobs.map((job) => (<JobCard key={job._id} job={job} />))
                                        }
                                    </div>
                            }
                </div>
            </div>
        </div>
    )
}
export default CandFeed


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