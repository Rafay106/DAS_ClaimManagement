import { useState } from "react";
import "./login.scss";
import { Card, Container, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return (
    <Container className="mt-5 w-25">
      <Card>
        <Card.Body>
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group className="my-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control
                type="password"
                name="email"
                placeholder="Enter your password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
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
