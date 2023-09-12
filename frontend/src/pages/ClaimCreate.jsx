import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ClaimCreate() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({});
  const [cities, setCities] = useState([]);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (true) {
      const claim = {
        emp_name: inputs.emp_name,
        emp_number: inputs.emp_number,
        claim_for: inputs.claim_for,
        bill_date: inputs.bill_date,
        amt: inputs.amt,
        place: inputs.place,
      };
      axios.post("/api/claim", claim).then((res) => {
        if (res.data.message === "Post Created") {
          navigate("/");
        } else setErr(res.data.message);
      });
    } else setErr("Category is required!");
  };

  useEffect(() => {
    axios.get("/api/city").then((res) => setCities(res.data));
  }, []);

  return (
    <div className="container">
      <p id="err">{err}</p>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="emp_name"
            placeholder="Employee Name"
            onChange={handleInputs}
          />
        </div>
        <div>
          <input
            type="text"
            name="emp_number"
            placeholder="Employee Number"
            onChange={handleInputs}
          />
        </div>
        <div>
          <input
            type="text"
            name="claim_for"
            placeholder="Claim For?"
            onChange={handleInputs}
          />
        </div>
        <div>
          Bill Date:{" "}
          <input
            type="date"
            name="bill_date"
            placeholder="Claim For?"
            onChange={handleInputs}
          />
        </div>
        <div>
          <input
            type="number"
            name="amt"
            placeholder="Amount"
            onChange={handleInputs}
          />
        </div>
        <div>
          <select name="place">
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default ClaimCreate;
