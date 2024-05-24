import { Delete, Upload } from '@mui/icons-material'
import './candEditFields.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CandEditFields(props) {
    const userData = localStorage.getItem("user");
    const userd = JSON.parse(userData);
    const userId = userd.id;
    const [users, setUser] = useState({ userId: "n/a" })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [cv,setCV]=useState("");
    const [cvExists, setCVExists] = useState(false);
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const users = {
            name: name,
            email: email,
            phone: phone,
            address: address,
        };

        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            const response = await axios.put(
                `/api/user/update/${userId}`,
                users, {headers}
            )
            console.log(response.data)
            navigate(`/CANDView`);
        } catch (error) {
            console.error(error);
        }
    };
    // /getSingleUser/:id
    useEffect(() => {
        const headers = { Authorization: `${localStorage.getItem("token")}` };
        const getUser = async () => {
            await axios

                .get(`/api/user/getSingleUser/${userId}`, {headers})
                .then((res) => {
                    setUser(res.data.users)
                    setName(res.data.users.name)
                    // setTags(res.data.skills)
                    setEmail(res.data.users.email);
                    setPhone(res.data.users.phone);
                    setAddress(res.data.users.address);
                    setCV(res.data.users.cv);
                })
                .catch((err) => console.log(err))
        }
        // if (userId == "n/a") {
        //     getUser();
        if (userId) {
            getUser();
        }
    }, [userId])

    const userD = localStorage.getItem("user");
    const usercv = JSON.parse(userD);
    //const cv = usercv.cv

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            try {
                const formData = new FormData();
                formData.append('filename', file);
    
                const headers = { Authorization: `${localStorage.getItem("token")}` };
                const response = await axios.post(`/api/user/upload`, formData, { headers });
                
                console.log(response.data.downloadURL);
                const cvURL = response.data.downloadURL;
                setCV(cvURL);
                setCVExists(true);
                setUploading(false);

                // Store CV URL in local storage
                const updatedUser = { ...userd, cv: cvURL };
                localStorage.setItem("user", JSON.stringify(updatedUser));
            } catch (error) {
                console.error("Error uploading file:", error);
                setUploading(false);
            }
        }
    };
     
    const handleUpload =async () => {
        // const users = {
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     address: address,
        // };

        const headers = { Authorization: `${localStorage.getItem("token")}` };
        try {
            setUploading(true);
            const response = await axios.put(`/api/user/updateProfile/${userId}`, {},{headers}
            )
            console.log(response.data)
            navigate(`/CANDView`);
        } catch (error) {
            console.error(error);
        } finally {
            setUploading(false);
        }
    };
    const handleSaveChanges = () => {
        // Add your API call for uploading here
    };
    return (
        <div className="CandFieldsWrapper">
            <div className="CandtopBar">
                <div className="CandtopHeadings">
                    <div className="CandHeading">Edit Details</div>
                    <div className="CandText">Edit profile details here</div>
                </div>
                <div className="CandbuttonContainer">
                    <Link to={"/CANDVIEW"}>
                        <button className="Canddiscard">Discard</button>
                    </Link>
                    
                    <button className="Candpreview" onClick={handleSubmit} disabled={cv === ""}>Update</button>
                </div>
            </div>
            <div className="Candpanes">
                <div className="CandrightSide">
                    <div className="CandpfpSelectionHeading">
                        <div className="subHeading">Details</div>
                        <div className="Candforms">
                            <input type="text" id='Candname' className="CandTextFieldSmall" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
                            <input type="text" className="CandTextFieldSmall" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="text" className="CandTextFieldSmall" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                            <input type="text" className="CandTextFieldSmall" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} required/>
                            {/* <div className="subHeading">Change Password</div>
                        <input type="Password" className="CandTextFieldSmall" placeholder='Password' />
                        */}

                        </div>

                           
                       
                    </div>
                </div>
                {/* <div className="CandleftSide">
                    <div className="CandpfpSelectionHeading">
                        <div className="subHeading">Profile Picture</div>
                         <div className="HTextSmaller">Select a dashing confident profile picture.</div> 
                    </div>
                    <div className="CandprofileImageSelection">
                        <div className="profilePic">
                            <img src="https://th.bing.com/th/id/OIP.KdBSw8TPL34eU6T7bjhpAAHaLH?pid=ImgDet&rs=1" alt="" className="pfp" />
                        </div>
                        <div className="pfpButtons">
                            <button className="pfpUpload"><Upload /> UPLOAD</button>
                            <button className="pfpDelete"><Delete /> DELETE</button>
                        </div>
                    </div>
                   
                </div> */}
                <div className="CandleftSide">
                    <div className="CandpfpSelectionHeading">
                        <div className="subHeading">Upload CV</div>
                    </div>
                    <div className="CandprofileImageSelection">
                        <div className="profilePic">
                            {cvExists ? (
                                <p>CV Uploaded</p>
                            ) : (
                                <p>No CV Uploaded</p>
                            )}
                        </div>
                        <div className="pfpButtons">

                            <input type="file" onChange={handleFileChange} />
                            <button className="pfpUpload" onClick={handleUpload} disabled={uploading}><Upload /> Upload</button>
                            {/* <button className="pfpUpload" onClick={handleSaveChanges} disabled={uploading}>Save Changes</button> */}
                            {cvExists && <button className="pfpDelete" onClick={() => { setCV(""); setCVExists(false); }}><Delete /> DELETE</button>}
                        </div>
                    </div>
                </div>

            </div>
            {uploading && <div className="loader">Uploading...</div>}
        </div>
    )
}
export default CandEditFields