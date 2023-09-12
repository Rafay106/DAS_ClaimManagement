import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormSelect } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

function ClaimCreate() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({});
  const [cities, setCities] = useState([]);

  const inputsHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (true) {
      const claim = {
        emp_name: inputs.ename,
        emp_number: inputs.enumber,
        claim_for: inputs.claimFor,
        bill_date: inputs.billDate,
        amt: inputs.amt,
        place: inputs.place,
      };
      axios.post("/api/claim", claim).then((res) => {
        if (res.data.message === "Post Created") {
          navigate("/");
        } else setErr(res.data.message);
        console.log(err);
      });
    } else setErr("Category is required!");
  };

  useEffect(() => {
    axios.get("/api/city").then((res) => setCities(res.data));
  }, []);

  return (
    <FormContainer>
      <h1>File Claim Form</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="emp-name">
          <Form.Control
            type="text"
            name="ename"
            placeholder="Enter Employee Name"
            onChange={inputsHandler}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="emp-num">
          <Form.Control
            type="text"
            name="enumber"
            placeholder="Enter Employee Number"
            onChange={inputsHandler}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="claim-for">
          <Form.Control
            type="text"
            name="claimFor"
            placeholder="Claim For?"
            onChange={inputsHandler}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="bill-date">
          <Form.Control
            type="date"
            name="billDate"
            // placeholder="Claim For?"
            onChange={inputsHandler}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="amt">
          <Form.Control
            type="number"
            name="amt"
            placeholder="Enter amount"
            onChange={inputsHandler}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="place">
          <Form.Select name="place" onChange={inputsHandler}>
            <option>Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="my-2" controlId="emp-name">
          <Form.Control type="submit" />
        </Form.Group>
      </Form>
    </FormContainer>
  );
}
export default ClaimCreate;
