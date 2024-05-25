//import AdminSidebar from "../../../components/ADMINJourney/AdminSidebar/AdminSidebar";
import ViewUsers from "../../../components/ADMINJourney/ViewAllUsers/ViewAllUsers";
import ViewApplicants from "../../../components/ADMINJourney/ViewApp/ViewApps";
import "./AdminUsers.css"

function AdminApplicants() {
    return (
        <div className="adminPageWrapper">
            {/* <AdminSidebar /> */}
            <div className="adminContent">
                <ViewApplicants />
            </div>
        </div>
    );
}

export default AdminApplicants;