import React, { useState, useEffect } from 'react';
import './ViewApps.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Card from '@mui/material/Card'; // Import the UserCard component
import axios from 'axios';
import { CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ViewApplicants() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        // Function to fetch active applicants data from API
        const fetchActiveApplicants = async () => {
            try {
                // Make API call to fetch active applicants data
                const response = await axios.get('/api/user/getActiveApplicants', {headers});
                console.log("Applicants:",response.data.users)
                // Update state with fetched active applicants data
                setApplicants(response.data.users);
            } catch (error) {
                console.error('Error fetching active applicants:', error);
            }
        };

        // Call fetchActiveApplicants function when component mounts
        fetchActiveApplicants();
    }, []); // Empty dependency array to run the effect only once when component mounts

    const handleDelete = async (id) => {
        try {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            // Make DELETE request to delete the user
            const response=await axios.put(`/api/user/deleteuser/${id}`,{},{ headers });
            // Remove the deleted user from the state
            console.log(response.data)
            setApplicants(applicants.filter(applicant => applicant._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    return (
        <div className="adminContainer">
            <div className="adminContent">
                <h1 className="adminHeading">Your Applicants</h1>
                <div className="userDataContainer" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {/* Map through applicants data and render UserCard for each applicant */}
                    {applicants.map((applicant) => (
                        <div key={applicant._id} style={{ flex: '1 0 45%', maxWidth: '45%' }}>
                            <Card className="applicantCard" style={{ position: 'relative' }}>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => handleDelete(applicant._id)}
                                    style={{ position: 'absolute', top: '5px', right: '5px', zIndex: '1' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Name: {applicant.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        Email: {applicant.email}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Phone: {applicant.phone}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewApplicants;
