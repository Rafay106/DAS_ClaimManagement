import React, { useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Dropdown from "react-bootstrap/Dropdown";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            En(UK)
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <img
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  className="avatar"
                  alt=""
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  <AccountCircleIcon className="icon" />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <SettingsIcon className="icon" />
                  Settings
                </Dropdown.Item>
                <Dropdown.Item href="/Login">
                  {" "}
                  <LogoutIcon className="icon" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
