import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ClaimPage() {
  const [claim, setClaim] = useState({});
  const { claimId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/claim/id/${claimId}`)
      .then((res) => setClaim(res.data))
      .catch((err) => toast.error(err.response.data.message));
  }, []);

  return (
    <Container className="my-5">
      <Card className="w-50 m-auto">
        <Card.Header className="d-flex justify-content-between">
          <Card.Title className="d-flex flex-column align-items-center">
            <span>{claim.claimer}</span>
            <span>({claim.claimerEmail})</span>
          </Card.Title>
          <Card.Text className="d-flex flex-column align-items-center">
            <span>{claim.status}</span>
            <span>({claim.approvedDate ? claim.approvedDate.slice(0, 10) : "Null"})</span>
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>Stated Reason: {claim.claimFor}</Card.Text>
          <Card.Text>Comment: {claim.comment}</Card.Text>
          <Card.Text>Bill Location: {claim.city}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Card.Text>Submit Date: {claim.submitDate ? claim.submitDate.slice(0, 10) : "Null"}</Card.Text>
          <Card.Text>Amount: {claim.amt}</Card.Text>
        </Card.Footer>
      </Card>
    </Container>
  );
}
export default ClaimPage;
