import "./ViewStatistics.css"
/* import Sidebar from "../../components/Sidebar/Sidebar" */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Stats from "../../../components/ADMINJourney/Stats/Stats";

function ViewStatistics(props) {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);


    return (
        // <div className="ViewJob">
        <div >
            {/* <Sidebar /> */}
            {loading ? (
                <div className="loadingWrapper">
                    <div className="Heading">Loading...</div>
                </div>
            ) : job.title ? (
                <div className="viewStatsComponent">
                    <Stats job={job} />
                </div>
            ) : (
                <div className="errorWrapper">
                    <div className="Heading">Job not found</div>
                </div>
            )}

        </div>
        // </div>
    );
}

export default ViewStatistics;