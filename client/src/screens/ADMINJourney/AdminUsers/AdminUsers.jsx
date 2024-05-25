import AdminSidebar from "../../../components/ADMINJourney/AdminSidebar/AdminSidebar";
import ViewUsers from "../../../components/ADMINJourney/ViewAllUsers/ViewAllUsers";
import "./AdminUsers.css"

function AdminPage() {
    return (
        <div className="adminPageWrapper">
            {/* <AdminSidebar /> */}
            <div className="adminContent">
                <ViewUsers />
            </div>
        </div>
    );
}

export default AdminPage;