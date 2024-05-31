import { Link } from "react-router-dom";
import "./Card.css";
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';

function Card({ application }) {
    if (!application || !application.job) {
        return null; // Return null if either application or application.job is undefined
    }

    // Destructure the job object from the application
    const { job } = application;

    return (
        <div className="jobCard">
            <Link to={`ViewJob/${job._id}`} style={{textDecoration: "none"}}>
                <div className="jobCardContainer">
                    <div className="positionSpots">
                        <div className="company">Company: {job.company}</div>
                        <div className="title">Title: {job.title}</div>
                        <div className="location">Location: {job.location}</div>\
                        <div className="status">Job Status: {job.jobStatus}</div>
                    </div>
                    {/* <div className="applicationsCount">
                        <div className="count">{job.applications.length}</div>
                        <button className="up"><KeyboardDoubleArrowUpRoundedIcon className="upIcon" /></button>
                    </div> */}
                </div>
            </Link>
        </div>
    );
}

export default Card;
