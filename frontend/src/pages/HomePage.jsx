import axios from "axios";
import React, { useEffect, useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import ClaimStatusCard from "../components/ClaimStatusCard";
import ClaimGraph from "../components/ClaimGraph";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // const [tableData, setTableData] = useState([]);
  const [claimCount, setClaimCount] = useState({});
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (document.cookie.includes("userId=")) {
      const userId = document.cookie.split("=")[1];
      setUserId(parseInt(userId));
    } else navigate("/login");
    // axios
    //   .get("/api/claim")
    //   .then((response) => {
    //     setTableData(response.data);
    //   })
    //   .catch((error) => console.error("Error fetching data: ", error));

    // Count claims
    axios
      .get(`/api/claim/count`)
      .then((res) => {
        setClaimCount(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="d-flex flex-column gap-3">
      <Row>
        <Col>
          <ClaimStatusCard
            approved={claimCount.approved}
            pending={claimCount.pending}
            rejected={claimCount.rejected}
            crpending={claimCount.crpending}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ClaimGraph />
        </Col>
      </Row>
      {/* <Row>
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
      </Row> */}
    </Container>
  );
};

export default HomePage;
