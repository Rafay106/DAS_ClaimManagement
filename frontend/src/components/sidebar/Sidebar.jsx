import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import DetailsIcon from "@mui/icons-material/Details";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div id="logo">
        <Link to="/">
          <img src="./DAS_Logo.png" width="100%" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/FileClaim" style={{ textDecoration: "none" }}>
            <li>
              <FileOpenIcon className="icon" />
              <span>File a Claim</span>
            </li>
          </Link>

          <Link to="/ProcessClaim" style={{ textDecoration: "none" }}>
            <li>
              <DetailsIcon className="icon" />
              <span>Claim Details</span>
            </li>
          </Link>
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
