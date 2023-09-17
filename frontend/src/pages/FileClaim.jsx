import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

function FileClaim() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState();
  const [isUserId, setIsUserId] = useState(false);
  // const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({});
  const [cities, setCities] = useState([]);

  const inputsHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const userIdFormHandler = (e) => {
    e.preventDefault();
    axios
      .get(`/api/user/${userId}`)
      .then((res) => {
        setUser(res.data);
        setIsUserId(true);
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    const claim = {
      ename: user.name,
      // enumber: inputs.enumber,
      claimFor: inputs.claimFor,
      billDate: inputs.billDate,
      amt: inputs.amt,
      place: inputs.place,
      claimerId: user.employee_id,
      comment: inputs.comment,
    };
    axios
      .post("/api/claim", claim)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "created") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("/api/city").then((res) => setCities(res.data));
  }, []);

  return (
    <FormContainer>
      {!isUserId && (
        <Form onSubmit={userIdFormHandler}>
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              name="user_id"
              placeholder="Enter your user id"
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Control
              className="btn btn-primary"
              type="submit"
              value="Find User"
            />
          </Form.Group>
        </Form>
      )}
      {isUserId && (
        <>
          <h1>File Claim Form</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="my-2">
              <Form.Control
                type="text"
                name="ename"
                placeholder="Enter Employee Name"
                value={user.name}
                disabled
              />
            </Form.Group>
            {/* <Form.Group className="my-2">
              <Form.Control
                type="text"
                name="enumber"
                placeholder="Enter Employee Number"
                onChange={inputsHandler}
              />
            </Form.Group> */}
            <Form.Group className="my-2">
              <Form.Control
                type="text"
                name="claimFor"
                placeholder="Claim For?"
                onChange={inputsHandler}
              />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Control
                type="date"
                name="billDate"
                // placeholder="Claim For?"
                onChange={inputsHandler}
              />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Control
                type="number"
                step="0.01"
                name="amt"
                placeholder="Enter amount"
                onChange={inputsHandler}
              />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Select name="place" onChange={inputsHandler}>
                <option>Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Control
                as="textarea"
                name="comment"
                placeholder="Enter comment"
                onChange={inputsHandler}
              />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Control
                className="btn btn-danger"
                type="submit"
                value="Sumbit Claim For Approval"
              />
            </Form.Group>
          </Form>
        </>
      )}
    </FormContainer>
  );
}

export default FileClaim;
