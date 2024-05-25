import { HomeOutlined, Login, Logout, PersonAdd } from "@mui/icons-material"
import WorkIcon from '@mui/icons-material/Work';
import Person4Icon from '@mui/icons-material/Person4';
import "./AdminSidebar.css"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios"

function AdminSidebar() {

    const navigae = useNavigate();
    const [user, setUser] = useState({ _id: "n/a" })

    const userD = localStorage.getItem("user");
    const userid = JSON.parse(userD);
    const userID = userid._id

    useEffect(() => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        const getUser = async () => {
            await axios.get(`/api/user/getSingleUser/${userID}`, {headers})
                .then((res) => setUser(res.data))
        }
        if (localStorage.getItem("userId")) { getUser(); }
    })

    const logOut = () => {
        localStorage.clear();
        navigae("/")
    }

    const userData = localStorage.getItem("user");
    const users = JSON.parse(userData);
    const userName = users.name;
    const userId = users._id
    const userEmail = users.email
    const userRole = users.role

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <img src="http://localhost:3000/assets/blank_pfp.png" alt="" className="companyImage" />
                <div className="CandName">{userId === "n/a" ? "Welcome to RecruitRanks" : `${userName}`}</div>
                {userId === "n/a" ? null : <div className="CandEmail">{userEmail}</div>}
                <ul className="optionsList">

                    <li className="option">
                        <HomeOutlined className="optionsIcon" />
                        <Link to="/ADMINView" className="optionLink">Home</Link>
                    </li>
                    {userRole === "Admin" ?
                        <li className="option">
                            <WorkIcon className="optionsIcon" />
                            <Link to="/ADMINView/createJob" className="optionLink">Post a Job</Link>
                        </li> : null
                    }
                    {userRole === "Admin" ?
                        <li className="option"><Person4Icon className="optionsIcon" />
                            <Link to="/ADMINView/ViewAllUsers" className="optionLink">View Users</Link>
                        </li> : null
                    }

                    {userRole === "Admin" ?
                        <li className="option" onClick={logOut}>
                            <Logout className="optionsIcon" /><div className="optionLink">Log Out</div>
                        </li> :null
                    }

                </ul>
            </div>
        </div>
    )
}
export default AdminSidebar