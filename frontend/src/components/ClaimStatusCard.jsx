import axios from "axios";

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function ClaimStatusCard({ approved, pending, rejected, crpending }) {
  const total = approved + pending + rejected + crpending;
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Footer>Approved</Card.Footer>
            <Card.Body>
              <CircularProgressbar
                value={approved}
                maxValue={total}
                text={approved}
                styles={buildStyles({
                  textColor: "green",
                  pathColor: "green",
                })}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Footer>Rejected</Card.Footer>
            <Card.Body>
              <CircularProgressbar
                value={rejected}
                maxValue={total}
                text={rejected}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "red",
                })}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Footer>Pending</Card.Footer>
            <Card.Body>
              <CircularProgressbar
                value={pending}
                maxValue={total}
                text={pending}
                styles={buildStyles({
                  textColor: "gold",
                  pathColor: "gold",
                })}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Footer>Clarification Pending</Card.Footer>
            <Card.Body>
              <CircularProgressbar
                value={crpending}
                maxValue={total}
                text={crpending}
                styles={buildStyles({
                  textColor: "gold",
                  pathColor: "gold",
                })}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Footer>Total</Card.Footer>
            <Card.Body>
              <CircularProgressbar
                value={total}
                maxValue={total}
                text={total}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ClaimStatusCard;
