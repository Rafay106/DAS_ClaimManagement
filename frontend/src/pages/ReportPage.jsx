import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
        <Col>
          <Row>
            <h1>File Claimed and Approved</h1>
          </Row>

          <ResponsiveContainer width="50%" height={300}>
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
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default ReportPage;
