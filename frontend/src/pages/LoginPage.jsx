import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { login, reset } from "../features/auth/authSlice";
import { FaSignInAlt } from "react-icons/fa";
import FormContainer from "../components/FormContainer";
import { Form } from "react-bootstrap";
import axios from "axios";
// import Spinner from "../components/Spinner";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const { user, isLoading, isSuccess, isError, message } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(() => {
  //   if (isError) toast.error(message);
  //   if (isSuccess || user) navigate("/");
  //   dispatch(reset());
  // }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log(userData);
    axios
      .post("/api/user/login", userData)
      .then((res) => {
        toast.success(res.data.body)
        navigate("/");
      })
      .catch((err) => toast.error(err.response.data));
    // dispatch(login(userData));
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <section className="heading">
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login and start setting goals</p>
        </section>
        <Form.Group className="form-group">
          <Form.Control
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={email}
            placeholder="example@email.com"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            type="submit"
            className="btn btn-primary"
            value="Login"
          />
        </Form.Group>
      </Form>
    </FormContainer>
  );
}
