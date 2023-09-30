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

  // useEffect(() => {
  //   if (document.cookie.includes("userId=")) {
  //     const userId = document.cookie.split("=")[1];
  //     setUserId(parseInt(userId));
  //   } else navigate("/login");
    // axios
    //   .get("/api/claim")
    //   .then((response) => {
    //     setTableData(response.data);
    //   })
    //   .catch((error) => console.error("Error fetching data: ", error));

    // Count claims
  //   axios
  //     .get(`/api/claim/count`)
  //     .then((res) => {
  //       setClaimCount(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
    </Container>
  );
};

export default HomePage;
