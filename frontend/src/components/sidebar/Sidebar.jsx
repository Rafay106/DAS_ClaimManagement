import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import DetailsIcon from "@mui/icons-material/Details";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Digital Automation System </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">FILES</p>
          <li>
            <FileOpenIcon className="icon" />
            <Link to="/FileClaim" style={{ textDecoration: "none" }}>
              <span>File a Claim</span>
            </Link>
          </li>

          <li>
            <DetailsIcon className="icon" />
            <Link to="/ProcessClaim" style={{ textDecoration: "none" }}>
              <span>Claim Details</span>
            </Link>
          </li>
          <li>
            <AssessmentIcon className="icon" />
            <span>Reports</span>
          </li>

          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>

          <li onClick={handleLogout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="buttom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
