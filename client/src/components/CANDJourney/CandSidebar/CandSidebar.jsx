import React, { useEffect, useState } from "react";
import { HomeOutlined, Login, Logout, PersonAdd } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import Person4Icon from "@mui/icons-material/Person4";
import "./candSidebar.css"; // Ensure this import is correct
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CandSidebar() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ _id: "n/a" });

    useEffect(() => {
        const getUser = async () => {
            await axios
                .get(`/candidate?id=${localStorage.getItem("userId")}`)
                .then((res) => setUser(res.data));
        };
        if (localStorage.getItem("userId")) {
            getUser();
        }
    }, []);

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    const userData = localStorage.getItem("user");
    const users = JSON.parse(userData);
    const userName = users.name;
    const userId = users._id;
    const userEmail = users.email;
    const userRole = users.role;

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <img
                    src="http://localhost:3000/assets/blank_pfp.png"
                    alt=""
                    className="companyImage"
                />
                <div className="CandName">
                    {userId === "n/a"
                        ? "Welcome to RecruitRanks"
                        : `${userName}`}
                </div>
                {userId === "n/a" ? null : (
                    <div className="CandEmail">{userEmail}</div>
                )}
                <ul className="optionsList">
                    <li className="option">
                        <HomeOutlined className="optionsIcon" />
                        <Link to="/CANDView" className="optionLink">
                            Home
                        </Link>
                    </li>
                    {userRole === "Applicant" ? (
                        <li className="option">
                            <WorkIcon className="optionsIcon" />
                            <Link
                                to="AppliedJobsScreen"
                                className="optionLink"
                            >
                                Applied Jobs
                            </Link>
                        </li>
                    ) : null}
                    {userRole === "Applicant" ? (
                        <li className="option">
                            <Person4Icon className="optionsIcon" />
                            <Link to="EditCand" className="optionLink">
                                Edit Details
                            </Link>
                        </li>
                    ) : (
                        <li className="option">
                            <PersonAdd className="optionsIcon" />
                            <Link to="ApplyJob/0" className="optionLink">
                                Create Account
                            </Link>
                        </li>
                    )}
                    {userRole === "Applicant" ? (
                        <li className="option" onClick={logOut}>
                            <Logout className="optionsIcon" />
                            <div className="optionLink">Log Out</div>
                        </li>
                    ) : (
                        <li className="option">
                            <Login className="optionsIcon" />
                            <Link to={"/"}>
                                <div className="optionLink">Log In</div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default CandSidebar;
