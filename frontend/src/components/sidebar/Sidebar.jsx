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
import logo from "./DAS_Logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  
  return (
    <div className="sidebar">
      <Link to="/">
        <div
          className="top"
          style={{
            backgroundImage: `url(${logo})`,
            color: "#3c8dbc",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            marginTop: " 10px",
            marginBottom: " 5px",
          }}
        ></div>
      </Link>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>

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
