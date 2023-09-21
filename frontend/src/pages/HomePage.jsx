import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import FileClaimCard from "../components/FileClaimCard";
import ApproveClaimCard from "../components/ApproveClaimCard";
import AddEmployeeCard from "../components/AddEmployeeCard";
import AddUserCard from "../components/AddUserCard";
import axios from "axios";

const HomePage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Replace this with your actual API call to fetch data from the database
    // Example API call using fetch:
    axios.get("/api/claim").then(res => {
      console.log(res.data)
      setTableData(res.data)
    })
    // fetch("/api/claim")
    //   .then((response) => {
    //     console.log(response.json())
    //     response.json()}
    //     )
    //   .then((data) => setTableData(data))
    //   .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="mw-50 mx-auto">
     <div className="mw-50 mx-auto">
  <div className="d-flex  mt-5">
    <div className="m-2">
      <FileClaimCard />
    </div>
    <div className="m-2">
      <ApproveClaimCard />
    </div>
    <div className="m-2">
      <AddUserCard />
    </div>
    <div className="m-2">
      <AddEmployeeCard />
    </div>
  </div>
</div>

      <h1>Form Claim Data </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Claim For</th>
            <th>Bill_date</th>
            <th>Bill_no.</th>
            <th>Amount</th>
            <th>Submint Date</th>
            <th>Place</th>
            <th>Approved Date</th>
            <th>Claimer Id</th>
            <th>Approver Id</th>
            <th>Status Id</th>
            <th>Comment</th>
            <th>Active Flag</th>
            <th>Created</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              {/* Map more data fields to table columns as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomePage;
