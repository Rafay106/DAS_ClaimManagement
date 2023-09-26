import axios from "axios";

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function ClaimStatusCard({ approved, pending, rejected, crpending }) {
  const total = approved + pending + rejected + crpending;
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>Stats</Card.Title>
        </Card.Header>
        <div className="d-flex">
          <Card.Body className="d-flex flex-column align-items-center">
            <CircularProgressbar
              value={approved}
              maxValue={total}
              text={`${approved} / ${total}`}
              strokeWidth={5}
              styles={buildStyles({
                textColor: "green",
                textSize: "10px",
                pathColor: "green",
                strokeLinecap: "butt",
              })}
            />
            <Card.Title style={{ color: "green" }}>
              <u>Claimed</u>
            </Card.Title>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <CircularProgressbar
              value={rejected}
              maxValue={total}
              text={`${rejected} / ${total}`}
              strokeWidth={5}
              styles={buildStyles({
                textColor: "red",
                textSize: "10px",
                pathColor: "red",
              })}
            />
            <Card.Title style={{ color: "green" }}>
              <u>Approved</u>
            </Card.Title>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <CircularProgressbar
              value={rejected}
              maxValue={total}
              text={`${rejected} / ${total}`}
              strokeWidth={5}
              styles={buildStyles({
                textColor: "red",
                textSize: "10px",
                pathColor: "red",
              })}
            />
            <Card.Title style={{ color: "red" }}>
              <u>Rejected</u>
            </Card.Title>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <CircularProgressbar
              value={pending}
              maxValue={total}
              text={`${pending} / ${total}`}
              strokeWidth={5}
              styles={buildStyles({
                textColor: "orange",
                textSize: "10px",
                pathColor: "orange",
              })}
            />
            <Card.Title style={{ color: "orange" }}>
              <u>Pending</u>
            </Card.Title>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <CircularProgressbar
              value={crpending}
              maxValue={total}
              text={`${crpending} / ${total}`}
              strokeWidth={5}
              styles={buildStyles({
                textColor: "gray",
                textSize: "10px",
                pathColor: "gray",
              })}
            />
            <Card.Title style={{ color: "gray" }}>
              <u>Clarification Pending</u>
            </Card.Title>
          </Card.Body>
          <Card.Body className="d-flex flex-column align-items-center">
            <CircularProgressbar
              value={total}
              maxValue={total}
              text={`Total: ${total}`}
              strokeWidth={5}
              styles={buildStyles({
                textSize: "10px",
              })}
            />
            <Card.Title style={{ color: "#3e98c7" }}>
              <u>Total</u>
            </Card.Title>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
export default ClaimStatusCard;
