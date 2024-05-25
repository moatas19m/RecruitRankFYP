import "./AdminHome.css"
/* import Sidebar from '../../components/Sidebar/Sidebar' */
import Feed from "../../../components/HRMJourney/HomeFeed/Feed"
import Rightbar from "../../../components/HRMJourney/Rightbar/Rightbar"
import AdminFeed from "../AdminHomeFeed/AdminFeed.jsx"

function AdminHome(props) {
    return (
        <div className="mainContainer">
            <div class="feed1"><AdminFeed /></div>
        </div>
    )
}
export default AdminHome