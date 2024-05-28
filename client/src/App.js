import "./App.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import LandingPage from "./screens/Landing/LandingPage";
import AboutPage from "./screens/Landing/About";
import ContactUs from "./screens/Landing/Contact";
import CreateJob from "./screens/HRMJourney/CreateJobHR/CreateJob";
import Home from "./screens/HRMJourney/HomeHR/Home";
import EditHR from "./screens/HRMJourney/EditHR/EditHR";
import PreviewJob from "./screens/HRMJourney/CreateJobHR/PreviewJob";
import ViewJob from "./screens/HRMJourney/ViewJobHR/ViewJob";
import ViewCandidate from "./screens/HRMJourney/ViewCandidate/ViewCandidate";
import Login from "./screens/HRMJourney/Login/Login";
import Sidebar from "./components/HRMJourney/Sidebar/Sidebar";
import CreateHR from "./components/HRMJourney/CreateHR/CreateHR";
//CandidateStuff
import CandHome from "./screens/CANDJourney/CandHome/CandHome";
import CandSidebar from "./components/CANDJourney/CandSidebar/CandSidebar";
import AdminSidebar from "./components/ADMINJourney/AdminSidebar/AdminSidebar";
import CandPreviewJob from "./screens/CANDJourney/CandApplyJob/CandPreviewJob";
import CandAppliedJobs from "./screens/CANDJourney/CandAppliedJobs/CandAppliedJobs";
import CandEdit from "./screens/CANDJourney/CandEdit/CandEdit";
import CandApplyJob from "./screens/CANDJourney/CandApplyJob/CandApplyJob";

import CompanyMGT from "./components/HRMJourney/CompanyMGT/CompanyMGT";
import JobList from "./components/HRMJourney/ShowJob/JobList";
import CandViewJob from "./components/CANDJourney/ViewJob/ViewJobComponents";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./components/ADMINJourney/AdminHome/AdminHome";
import ViewAdminJob from "./screens/ADMINJourney/ViewJobAdmin/ViewAdminJob";
import ViewadminJob from "./screens/ADMINJourney/ViewJobAdmin/ViewAdminJob";
import CreateJobAdmin from "./screens/ADMINJourney/CreateJobAdmin/CreateJobAdmin";
import AdminPage from "./screens/ADMINJourney/AdminUsers/AdminUsers";
import AdminApplicants from "./screens/ADMINJourney/AdminUsers/AdminViewApplicants";
import AdminRecruiters from "./screens/ADMINJourney/AdminUsers/AdminViewRecruiters";
import ViewJobComponent from "./components/HRMJourney/ViewJob/ViewJobComponent";
//import ViewAdminJob from "./components/ADMINJourney/ViewAdminJob/ViewAdminJobComp";

const LayoutForHr = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const LayoutForHrViewJob = ({ children }) => {
  return (
    <div className="mainAppContainer">
      {/* <Sidebar /> */}
      <div className="content">
        <Outlet />
        <ViewJob />
      </div>
    </div>
  );
};

const LayoutForCand = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <CandSidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const LayoutForAdmin = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <AdminSidebar />
      <div className="content">
        <Outlet />
        <AdminHome />
      </div>
    </div>
  );
};

const AdminGet = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <AdminSidebar />
      <div className="content">
        <Outlet />
        <AdminPage />
      </div>
    </div>
  );
};

const AdminJob = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <AdminSidebar />
      <div className="content">
        <Outlet />
        <ViewadminJob />
      </div>
    </div>
  );
};

const AdminGetApps = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <AdminSidebar />
      <div className="content">
        <Outlet />
        <AdminApplicants />
      </div>
    </div>
  );
};

const AdminGetRecruiter = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <AdminSidebar />
      <div className="content">
        <Outlet />
        <AdminRecruiters />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/HRView"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/CANDView"
            element={
              <PrivateRoute>
                <CandHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/ADMINView"
            element={
              <PrivateRoute>
                <CandHome />
              </PrivateRoute>
            }
          />

          {/* Admin Routes */}
          <Route path="/ADMINView" element={<LayoutForAdmin />}>
            <Route index element={<AdminHome />} />
            <Route path="createJob" element={<CreateJobAdmin edit={false} />} />
            <Route path="ViewJob/:jobId" element={<AdminJob />} />
            <Route path="ViewAllUsers" element={<AdminGet />} />
            <Route path="ViewAllUsers/Applicants" element={<AdminGetApps />} />
            <Route
              path="ViewAllUsers/Recruiters"
              element={<AdminGetRecruiter />}
            />
          </Route>

          {/* HR Routes */}
          <Route path="/HRView" element={<LayoutForHr />}>
            <Route index element={<Home />} />
            <Route path="createJob" element={<CreateJob edit={false} />} />
            <Route path="editJob/:jobId" element={<CreateJob edit={true} />} />
            <Route path="createJob/preview" element={<PreviewJob />} />
            <Route
              path="createJob/preview/:jobId"
              element={<PreviewJob onApps />}
            />
            <Route path="EditHr" element={<EditHR />} />
            <Route path="EditCompany" element={<CompanyMGT />} />
            <Route path="EditCompany/AddHR" element={<CreateHR />} />
            <Route path="ViewJob/:jobId" element={<ViewJob />} />
            <Route path="ViewCandidate/:appId" element={<ViewCandidate />} />
            <Route path="ShowMyJobs" element={<JobList />} />
          </Route>

          {/* Candidate Routes */}
          <Route path="/CANDView" element={<LayoutForCand />}>
            <Route index element={<CandHome />} />
            <Route path="JobDesc/:jobId" element={<CandPreviewJob />} />
            <Route path="ApplyJob/:jobId" element={<CandApplyJob />} />
            <Route path="AppliedJobsScreen" element={<CandAppliedJobs />} />
            <Route path="EditCand" element={<CandEdit />} />
            <Route path="ViewJob/:jobId" element={<CandViewJob />} />
          </Route>
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
