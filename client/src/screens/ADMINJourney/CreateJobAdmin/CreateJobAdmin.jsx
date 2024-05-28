import "./CreateJobAdmin.css"
/* import Sidebar from "../../components/Sidebar/Sidebar" */
import CJobFields from "../../../components/HRMJourney/CJobFields/CJobFields"
import CJobFieldsEdit from "../../../components/HRMJourney/CJobFieldsEdit/CJobFieldsEdit"
import CAdminFields from "../../../components/ADMINJourney/CJobsAdminFields/CAdminFields"
import AdminSidebar from "../../../components/ADMINJourney/AdminSidebar/AdminSidebar"
function CreateJobAdmin({ edit }) {
    return (
        <div className="CreateJob">
            <div>
                {/* <AdminSidebar/> */}
            </div>
            {!edit ? <CAdminFields /> : <CJobFieldsEdit />}
        </div>
    )
}
export default CreateJobAdmin