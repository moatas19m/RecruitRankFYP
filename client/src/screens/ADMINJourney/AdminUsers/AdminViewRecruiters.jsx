//import AdminSidebar from "../../../components/ADMINJourney/AdminSidebar/AdminSidebar";
import ViewUsers from "../../../components/ADMINJourney/ViewAllUsers/ViewAllUsers";
import ViewRecruiters from "../../../components/ADMINJourney/ViewRecruiters/ViewRecruiters";
import "./AdminUsers.css"

function AdminRecruiters() {
    return (
        <div className="adminPageWrapper">
            {/* <AdminSidebar /> */}
            <div className="adminContent">
                <ViewRecruiters />
            </div>
        </div>
    );
}

export default AdminRecruiters;