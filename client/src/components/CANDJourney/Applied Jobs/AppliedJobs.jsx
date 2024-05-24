import "./Candfeed.css";
import { Error, Search } from "@mui/icons-material";
import TuneIcon from '@mui/icons-material/Tune';
import axios from "axios";
import { useState, useEffect } from "react";
import CandAppCard from "../Widgets/CandAppCard/CandAppCard";
import { CircularProgress, LinearProgress } from "@mui/material";
import Card from "./Card.jsx";

function AppliedJobs() {
    const userData = localStorage.getItem("user");
    const userd = JSON.parse(userData);
    const userId = userd.id;
    const [isLoading, setIsloading] = useState(false);
    const [applications, setApplications] = useState([]); // Renamed from jobs to applications

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const headers = { Authorization: `${localStorage.getItem("token")}` };
                const response = await axios.get(`/api/application/getApplicationsByUser/${userId}`, {headers});
                console.log("Response data:", response.data.application);

                // Check if response.data.application is an array before setting the applications state
                if (response.data.application && Array.isArray(response.data.application)) {
                    setApplications(response.data.application);
                } else {
                    console.error("Response data.application is not an array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        fetchApplications();
    }, []);

    const userD = localStorage.getItem("user");
    const userName = JSON.parse(userD).name;

    return (
        <div className="CandfeedHome">
            <div className="CandfeedWrapper1">
                <div className="CandfeedTitle1">Hello, {userName}</div>
                <div className="Candsearchbar1">
                    <Search className="CandSearchIcon1" />
                    <input placeholder="Search across the system..." type="text" className="searchInput" />
                </div>
                <div className="Candjobss">
                    <div className="CandjobPostingHeading1">Applied Jobs</div>
                    <button className="filter"><TuneIcon /> </button>
                </div>
                <div className="line"> </div>
                <div className="CandjobPostings1">
                    {isLoading ? (
                        <div className="jobPostings"> <LinearProgress /> </div>
                    ) : (
                        applications.length === 0 ? (
                            <div className="jobPostingsError">
                                <div className="error"><Error />No jobs found...</div>
                            </div>
                        ) : (
                            <div className="jobPostings">
                                {applications.map((application) => (
                                    <Card key={application._id} application={application} />
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default AppliedJobs;
