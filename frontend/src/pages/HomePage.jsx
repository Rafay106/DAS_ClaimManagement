import React, { useEffect, useState, PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Row, Col, Table, Button, Container } from "react-bootstrap";
import FileClaimCard from "../components/FileClaimCard";
import ApproveClaimCard from "../components/ApproveClaimCard";
import AddEmployeeCard from "../components/AddEmployeeCard";
import AddUserCard from "../components/AddUserCard";
import axios from "axios";

const HomePage = () => {
  const [tableData, setTableData] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const toggleChart = () => {
    setShowChart(!showChart); // Toggle chart visibility when the button is clicked
  };

  useEffect(() => {
    axios
      .get("/api/claim")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const data = [
    {
      name: "Emp 1",
      Claim: 600,
      Approved: 240,
      pending: 100,
      Clearification_required: 300,
      amt: 240,
    },
    {
      name: "Emp 2",
      Claim: 300,
      Approved: 139,
      pending: 50,
      Clearification_required: 100,
      amt: 221,
    },
    {
      name: "Emp 3",
      Claim: 120,
      Approved: 98,
      pending: 10,
      Clearification_required: 50,
      amt: 22,
    },
    {
      name: "Emp 4",
      Claim: 478,
      Approved: 390,
      pending: 10,
      Clearification_required: 130,
      amt: 200,
    },
    {
      name: "Emp 5",
      Claim: 589,
      Approved: 480,
      pending: 100,
      Clearification_required: 150,
      amt: 218,
    },
    {
      name: "Emp 6",
      Claim: 539,
      Approved: 380,
      pending: 100,
      Clearification_required: 400,
      amt: 250,
    },
    {
      name: "Emp 7",
      Claim: 649,
      Approved: 430,
      pending: 100,
      Clearification_required: 100,
      amt: 210,
    },
  ];

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
      <Row>
        <Col style={{ backgroundColor: "#F0F0F0" }}>
          <Row>
            <h1>File Claimed and Approved</h1>
          </Row>
          <Button variant="primary" onClick={toggleChart}>
            Toggle Chart
          </Button>
          <ResponsiveContainer width="100%" height={300}>
          <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="Claim" fill="#82ca9d" />
                <Bar dataKey="Approved" fill="#8884d8" />
                <Bar dataKey="pending" fill="#000000" />
                <Bar dataKey="Clearification_required" fill="#0000FF" />
              </BarChart>
            {/* {showChart && (<div><h1>Hello</h1></div>)} */}
            {undefined}
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
