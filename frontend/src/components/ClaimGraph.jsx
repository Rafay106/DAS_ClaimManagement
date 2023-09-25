import { PureComponent } from "react";
import { Card, Container } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ClaimGraph() {
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

  return (
    <Card>
      <Card.Header>
        <Card.Title>History</Card.Title>
      </Card.Header>
      <Card.Body>
        <LineChart
          width={1200}
          height={600}
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
          <Line
            type="monotone"
            dataKey="total"
            stroke="#3e98c7"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="approved" stroke="green" />
          <Line type="monotone" dataKey="rejected" stroke="red" />
          <Line type="monotone" dataKey="pending" stroke="orange" />
          <Line type="monotone" dataKey="crpending" stroke="gray" />
        </LineChart>
      </Card.Body>
    </Card>
  );
}
export default ClaimGraph;
