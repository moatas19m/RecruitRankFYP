import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6
import './ViewAllUsers.css'; // Importing the CSS file for styling
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function ViewUsers() {
    const navigate = useNavigate();

    const handleViewApplicants = () => {
        // Navigate to view all applicants page
        navigate('/ADMINView/ViewAllUsers/Applicants');
    };

    const handleViewRecruiters = () => {
        // Navigate to view all recruiters page
        navigate('/ADMINView/ViewAllUsers/Recruiters');
    };

    return (
        <div className="adminContainer">
            <div className="adminContent">
                <h1 className="adminHeading">Your Users</h1>
                <div className="adminDashboard">
                    <div className="adminCard biggerCard" onClick={handleViewApplicants}>
                        <h2>View All Applicants</h2>
                    </div>
                    <div className="adminCard biggerCard" onClick={handleViewRecruiters}>
                        <h2>View All Recruiters</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewUsers;
