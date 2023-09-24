import React, { useEffect, useState, PureComponent } from "react";

import { Row, Col, Table, Button, Container } from "react-bootstrap";
import FileClaimCard from "../components/FileClaimCard";
import ApproveClaimCard from "../components/ApproveClaimCard";
import AddEmployeeCard from "../components/AddEmployeeCard";
import AddUserCard from "../components/AddUserCard";
import axios from "axios";

const HomePage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/claim")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <Container>
      <Row>
        <h1>Claim Data</h1>
        <Table bordered striped hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Claim For</th>
              <th>Bill Date</th>
              <th>Amount</th>
              <th>Claimer</th>
              <th>Status</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.claimId}</td>
                <td>{row.claimFor}</td>
                <td>{row.billDate}</td>
                <td>{row.amt}</td>
                <td>{row.claimer}</td>
                <td>{row.claimStatus}</td>
                <td>{row.comment}</td>
                <td>
                  <div className="">
                    <div className="d-flex justify-content-center gap-2">
                      <div className="mr-2">
                        <Button variant="info">Approved</Button>
                      </div>
                      <div>
                        <Button variant="danger">Pending</Button>
                      </div>
                      <div>
                        <Button variant="success">Denied</Button>
                      </div>
                      <div>
                        <Button variant="dark">Clarification Required</Button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default HomePage;
