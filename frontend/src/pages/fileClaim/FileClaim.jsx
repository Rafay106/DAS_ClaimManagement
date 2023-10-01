import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./fileclaim.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const FileClaim = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>File A Claim</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Claim For ? </label>
                <input type="text" placeholder="Claim For" />
              </div>

              <div className="formInput">
                <label>Date </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select a date"
                />
              </div>

              <div className="formInput">
                <label>Amount </label>
                <input type="text" placeholder="Enter Amount" />
              </div>

              <div className="formInput">
                <label>Select City </label>
                <select>
                  <option selected value="Jaipur">
                    Jaipur
                  </option>
                  <option value="Ajmer">Ajmer</option>
                  <option value="Kota">Kota</option>
                  <option value="Bikaner">Bikaner</option>
                </select>
              </div>

              <div className="formInput">
                <label htmlFor="file">
                  Select file: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <div className="formInput">
                <label>Comment </label>
                <textarea placeholder="Enter your comment here" />
              </div>

              <button className="button1" type="submit">
                Submit Claim For Approval
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileClaim;
