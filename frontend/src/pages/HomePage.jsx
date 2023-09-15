import { Row, Col } from "react-bootstrap";
import FileClaimCard from "../components/FileClaimCard";
import ApproveClaimCard from "../components/ApproveClaimCard";
import AddEmployeeCard from "../components/AddEmployeeCard";
import AddUserCard from "../components/AddUserCard";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col className="m-2">
          <FileClaimCard />
        </Col>
        <Col className="m-2">
          <ApproveClaimCard />
        </Col>
      </Row>
      <Row>
        <Col className="m-2">
          <AddUserCard />
        </Col>
        <Col className="m-2">
          <AddEmployeeCard />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
