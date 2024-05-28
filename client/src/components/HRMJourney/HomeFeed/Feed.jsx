import { Error, Search } from "@mui/icons-material"
import JobCard from "../../Widgets/JobCard/JobCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { LinearProgress } from "@mui/material"
import "./feed.css"

function Feed() {
    const userData = localStorage.getItem("user");
    const users = JSON.parse(userData);
    const userId = users.id;

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const headers = { Authorization: `${localStorage.getItem("token")}` };
                const response = await axios.get(`/api/job/userActiveJob/${userId}`, { headers });
                console.log("Response data:", response.data);
        
                if (response.data.job && Array.isArray(response.data.job)) {
                    setJobs(response.data.job);
                } else {
                    console.error("Response data.job is not an array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobs();
    }, [userId]);

    const userName = users.name;

    return (
        <div className="feed">
            <div className="feedWrapper">
                <div className="topSection">
                    <div className="feedHeadingBox">
                        <div className="feedTitle">Hello, {userName}</div>
                        <div className="feedSubheading">Welcome to the HR dashboard</div>
                    </div>
                    <div className="searchbar">
                        <Search className="SearchIcon" />
                        <input placeholder="Search jobs..." type="text" className="searchInput" onChange={handleSearchChange}/>
                    </div>
                </div>
                <div className="jobPostingsSectionContainer">
                    <div className="jobPostingsSection">
                        <div className="jobPostingHeading">Created Jobs</div>
                        <div className="jobPostingsContainer">
                            {isLoading ? (
                                <div className="loadingContainer">
                                    <LinearProgress />
                                </div>
                            ) : jobs.length === 0 ? (
                                <div className="emptyJobsContainer">
                                    <Error className="errorIcon" />
                                    <div className="errorMessage">No jobs found...</div>
                                </div>
                            ) : (
                                <div className="jobPostings">
                                    {jobs.map((job) => (<JobCard key={job._id} job={job} />))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;
