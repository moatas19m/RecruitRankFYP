import { Delete, Upload } from '@mui/icons-material'
import './editHRFields.css'
import { useEffect, useState } from 'react'
import axios from "axios"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format, register } from "timeago.js"
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function EditHRFields(props) {
    const userData = localStorage.getItem("user");
    const users = JSON.parse(userData);
    const userId = users.id;

    const [user, setUser] = useState({ _id: "n/a" });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [HRM, setHRM] = useState({ _id: "n/a" })
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    // const [isUploading, setIsUploading] = useState(false)
    // const [isPicOn, setIsPicOn] = useState(false)
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     address:""
    // });
    const navigate = useNavigate()

    const handleSubmitUser = async (event) => {
        event.preventDefault();

        const user = {
            name: name,
            email: email,
            phone: phone,
            address: address,
        };

        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            const response = await axios.put(
                `/api/user/update/${userId}`,
                user, {headers}
            )
            console.log(response.data);

            navigate('/HRView');
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
        notify();
        setLoading(false);
    };

    // const handleImage = (e) => {
    //     setIsPicOn(true)
    //     console.log(e.target.files[0])
    //     setImg(e.target.files[0])
    // }

    // const handleUpload = () => {
    //     setIsUploading(true)

    //     const formdata = new FormData();

    //     formdata.append('filename', img)

    //     axios.put('/upload/', {
    //         fileUrl: HRM.pfpURL
    //     }).then(() => console.log("Deleted!")).catch((err) => console.log(err))

    //     axios.post('/upload/', formdata).then((res) => {
    //         axios.put(`/hrms/${userId}`, {
    //             "pfpURL": res.data.downloadURL
    //         })
    //         HRM.pfpURL = res.data.downloadURL
    //         console.log("uploaded")
    //         setIsUploading(false)
    //         notify();
    //     })

    //     setIsPicOn(false)
    // }

    useEffect(() => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        const getUser = async () => {
            setLoading(true); // Set loading state to true before making the API call
            try {
                const response = await axios.get(`/api/user/getSingleUser/${userId}`, {headers});
                setUser(response.data.users);
                setName(response.data.users.name);
                setEmail(response.data.users.email);
                setPhone(response.data.users.phone);
                setAddress(response.data.users.address);
            } catch (error) {
                console.log(error);
            }
            setLoading(false); // Set loading state to false after fetching user data
        };
    
        if (userId) {
            getUser();
        }
    }, [userId]);

    // const handleChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // const handleSubmit = async (event) => {
    //     setLoading(true);
    //     event.preventDefault();
    //     try {
    //         const response = await axios.put(`/hrms/${userId}`, formData)
    //         console.log(response.data);
    //     } catch (error) {
    //         setLoading(false);
    //         console.error(error);
    //     }
    //     notify();
    //     setLoading(false);
    // };

    const notify = () => toast.success('Info Updated', {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return (
        <>
            <div className="hrFieldsWrapper">
                <div className="topBar">
                    <div className="topHeadings">
                        <div className="Heading">Edit Details</div>
                        <div className="HText">Edit profile details here</div>
                    </div>
                    <div className="buttonContainer">

                    </div>
                </div>
                <div className="panesWrapper">
                    <div className="panes">
                    {
                        userId === "n/a" ? (
                            <div className="Heading">Loading...</div>
                        ) : (
                            <form onSubmit={handleSubmitUser}>
                                {loading ? (
                                    <div className="rightSideLoading">
                                        <CircularProgress />
                                    </div>
                                ) : (
                                    <div className="rightSide">
                                        <div className="pfpSelectionHeading">
                                            <div className="detailsHeaderBar">
                                                <div className="subHeading">Details</div>
                                                <button className="preview" onClick={handleSubmitUser}>{loading ? "Saving..." : "Save"}</button>
                                            </div>
                                            <div className="forms">
                                                <div className="nameFields">
                                                    <input type="text" id='namef' className="TextFieldSmall" placeholder='Name' name='name'  defaultValue={name} onChange={(e) => setName(e.target.value)} required />
                                                    {/* <input type="text" id='namef' className="TextFieldSmall" placeholder='Last Name' name='email' onChange={handleChange} defaultValue={formData.lastName} required /> */}
                                                </div>
                                                <input type="text" className="TextFieldSmall" placeholder='Email' name='Email'  defaultValue={email} onChange={(e) => setEmail(e.target.value)} required />
                                                <input type="text" className="TextFieldSmall" placeholder='Phone' name='Phone'  defaultValue={phone} onChange={(e) => setPhone(e.target.value)} required/>
                                                <textarea id="" cols="30" rows="10" className="TextFieldBig" placeholder='Address' name='address'  defaultValue={address} onChange={(e) => setAddress(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* <div className="leftSide">
                                        <div className="pfpSelectionHeading">
                                            <div className="subHeading">Profile Picture</div>
                                            <div className="HTextSmaller">Select a dashing confident profile picture.</div>
                                        </div>
                                        <div className="profileImageSelection">
                                            <div className="profilePic">
                                                {isUploading ?
                                                    <div className="pfpLoading">
                                                        <CircularProgress />
                                                    </div>
                                                    :
                                                    <img src={HRM.pfpURL} alt="" className="pfp" />
                                                }
                                            </div>
                                            <div className="pfpButtons">
                                                <input type='file' onChange={handleImage}></input>
                                                <button className="pfpUpload" onClick={handleUpload} disabled={!isPicOn} ><Upload /> UPLOAD</button>
                                                <button className="pfpDelete"><Delete /> DELETE</button>
                                            </div>
                                        </div>
                                        <div className="stats">
                                            <div className="HTextSmaller"><b>Joined:</b> {format(HRM.createdAt)}</div>
                                            <div className="HTextSmaller"><b>Jobs Posted:</b> {HRM.jobsCreated !== undefined ? `${HRM.jobsCreated.length}` : `loading`}</div>
                                        </div>
                                    </div> */}
                            </form>
                        )
                    }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default EditHRFields