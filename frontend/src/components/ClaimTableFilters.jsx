import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

function ClaimTableFilters({ claimStatus, filterHandler, refreshHandler }) {
  return (
    <Form className="mb-3 w-100">
      <Row>
        <Col>
          <Form.Group className="" controlId="filter">
            <Form.Select
              className="w-25"
              name="filter"
              onChange={filterHandler}
            >
              <option value={0}>All</option>
              {claimStatus.map((status) => (
                <option value={status.id} key={status.value}>
                  {status.value}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-end">
          <Form.Group>
            <Button onClick={refreshHandler}>Refresh</Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
export default ClaimTableFilters;
