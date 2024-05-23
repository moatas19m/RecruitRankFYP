import React from "react";
import "./jobCard.css"

function JobCard({ job }) {
    return (
        <div className="jobCard">
            <div className="jobCardContent">
                <h2 className="jobTitle">{job.title}</h2>
                <p className="jobCompany">{job.company}</p>
                <p className="jobLocation">{job.location}</p>
                <p className="jobDescription">{job.description}</p>
                <div className="jobDetails">
                    <p>Salary: {job.minSalary} - {job.maxSalary}</p>
                    <p>Experience: {job.experience}</p>
                    <p>Education: {job.education}</p>
                    <p>Shift: {job.shift}</p>
                    <p>Benefits: {job.benefits}</p>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
