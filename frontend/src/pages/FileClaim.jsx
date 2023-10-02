import "../scss/fileclaim.scss";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const FileClaim = () => {
  const { auth } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputs, setInputs] = useState({
    claimFor: "",
    billDate: new Date(),
    amount: "",
    place: "",
    file: "",
    comment: "",
  });
  const [cities, setCities] = useState([]);

  const inputsHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    const claim = {
      claimerId: auth.id,
      claimFor: inputs.claimFor,
      billDate: selectedDate,
      amount: inputs.amount,
      place: inputs.place,
      file: inputs.file,
      comment: inputs.comment,
    };

    axios
      .post("/api/claim", claim)
      .then((res) => {
        toast.success(res.data.message);
        setInputs({
          claimFor: "",
          billDate: new Date(),
          amount: "",
          place: "",
          file: "",
          comment: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    axios
      .get("/api/city")
      .then((res) => setCities(res.data))
      .catch((err) => toast.error(err.response.data));
  }, []);

  return (
    <div className="new">
      <div className="newContainer">
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
            <form onSubmit={submitHandler}>
              <div className="formInput">
                <label>Claim Name </label>
                <input
                  type="text"
                  name="claimFor"
                  placeholder="Enter claim name"
                  value={inputs.claimFor}
                  onChange={inputsHandler}
                />
              </div>

              <div className="formInput">
                <label>Bill Date</label>
                <DatePicker
                  name="billDate"
                  selected={selectedDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select a date"
                  onChange={setSelectedDate}
                />
              </div>

              <div className="formInput">
                <label>Amount </label>
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter Amount"
                  value={inputs.amount}
                  onChange={inputsHandler}
                />
              </div>

              <div className="formInput">
                <label>Select City </label>
                <select
                  name="place"
                  value={inputs.place}
                  onChange={inputsHandler}
                >
                  <option value="">Select bill place</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="formInput">
                <label htmlFor="file">
                  Select file: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  style={{ display: "none" }}
                  value={inputs.file}
                  onChange={inputsHandler}
                />
              </div>

              <div className="formInput">
                <label>Comment </label>
                <textarea
                  name="comment"
                  placeholder="Enter your comment here"
                  value={inputs.comment}
                  onChange={inputsHandler}
                />
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
