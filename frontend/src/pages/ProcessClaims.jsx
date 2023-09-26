import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import ClaimTable from "../components/ClaimTable";
import ClaimTableFilters from "../components/ClaimTableFilters";

const ProcessClaims = () => {
  const [claims, setClaims] = useState([]);
  const [claimStatus, setclaimStatus] = useState([]);
  const [userId, setuserId] = useState("");

  const refreshHandler = (e) => {
    e.preventDefault();
    axios
      .get(`/api/claim?user_id=${userId}`)
      .then((res) => {
        setClaims(res.data);
        axios
          .get("/api/claim-status")
          .then((res) => {
            setclaimStatus(res.data);
          })
          .catch((err) => toast.error(err.response.data.message));
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const filterHandler = (e) => {
    e.preventDefault();
    axios
      .get(`/api/claim?user_id=${userId}&status_id=${e.target.value}`)
      .then((res) => setClaims(res.data))
      .catch((err) => {
        setClaims([]);
        toast.error(err.response.data);
      });
  };

  useEffect(() => {
    if (document.cookie.includes("userId=")) {
      const userId = document.cookie.split("=")[1];
      setuserId(userId);
      axios
        .get(`/api/claim?user_id=${userId}`)
        .then((res) => {
          setClaims(res.data);
          axios
            .get("/api/claim-status")
            .then((res) => {
              setclaimStatus(res.data);
            })
            .catch((err) => toast.error(err.response.data.message));
        })
        .catch((err) => toast.error(err.response.data.message));
    } else navigate("/login");
  }, []);

  return (
    <Container className="my-2">
      <div className="text-center">
        <ClaimTableFilters
          claimStatus={claimStatus}
          filterHandler={filterHandler}
          refreshHandler={refreshHandler}
        />
        <ClaimTable claims={claims} claimStatus={claimStatus} userId={userId} />
      </div>
    </Container>
  );
};
export default ProcessClaims;
