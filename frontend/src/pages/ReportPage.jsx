import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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

function ReportPage() {
  const [selectedChart, setSelectedChart] = useState("rejected");

  const handleButtonClick = (chartType) => {
    setSelectedChart(chartType);
  };
  const claimData = [
    {
      date: "2023-09-17",
      total: 6,
      approved: 1,
      pending: 3,
      rejected: 1,
      crpending: 1,
    },
    {
      date: "2023-09-18",
      total: 10,
      approved: 3,
      pending: 3,
      rejected: 2,
      crpending: 2,
    },
    {
      date: "2023-09-19",
      total: 5,
      approved: 3,
      pending: 0,
      rejected: 2,
      crpending: 0,
    },
    {
      date: "2023-09-20",
      total: 7,
      approved: 3,
      pending: 1,
      rejected: 2,
      crpending: 1,
    },
  ];

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
        <Card>
          <Card.Header>
            <Card.Title>Approved</Card.Title>
          </Card.Header>
          <Card.Body>
            <BarChart
              width={500}
              height={300}
              data={claimData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="approved" fill="#56bb56" />
            </BarChart>
          </Card.Body>
        </Card>
      </Row>
      <div className="d-flex" class="p-4">
        <button
          className="btn btn-danger mr-4" // Add the classes for color and spacing
          onClick={() => handleButtonClick("rejected")}
        >
          Show Rejected Chart
        </button>
        <button
          className="btn btn-primary mr-4" // Add the classes for color and spacing
          onClick={() => handleButtonClick("pending")}
        >
          Show Pending Chart
        </button>
        <button
          className="btn btn-dark" // Add the classes for color
          onClick={() => handleButtonClick("crpending")}
        >
          Show Clarification Pending Chart
        </button>
      </div>

      <Row>
        <Card>
          <Card.Header>
            <Card.Title>
              {selectedChart === "rejected"
                ? "Rejected"
                : selectedChart === "pending"
                ? "Pending"
                : "Clarification Pending"}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {selectedChart === "rejected" && (
              <BarChart
                width={500}
                height={300}
                data={claimData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rejected" fill="#ec6161" />
              </BarChart>
            )}
            {selectedChart === "pending" && (
              <BarChart
                width={500}
                height={300}
                data={claimData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pending" fill="#f9c360" />
              </BarChart>
            )}
            {selectedChart === "crpending" && (
              <BarChart
                width={500}
                height={300}
                data={claimData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="crpending" fill="gray" />
              </BarChart>
            )}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ReportPage;
