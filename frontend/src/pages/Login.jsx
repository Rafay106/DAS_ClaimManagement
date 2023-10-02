import "../scss/login.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) ?? null;
    if (user) {
      setAuth(user);
      navigate(from, { replace: true });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/login", { email, password }, { withCredentials: true })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setAuth(res.data);
        toast.success("You are now logged in");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.response.data));
  };

  return (
    <Container className="mt-5 w-25">
      <Card>
        <Card.Body>
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control
                type="password"
                name="email"
                placeholder="Enter your password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control type="submit" value="Login" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
