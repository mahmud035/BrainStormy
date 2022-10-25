import React, { useContext, useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { logIn, passwordReset } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success('Login Successfully');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  console.log(userEmail);
  const handlePasswordReset = () => {
    console.log(userEmail);
    passwordReset(userEmail)
      .then(() => {
        toast.info('Password reset email sent!');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="container form-page">
      <div className="pt-5 form-container ">
        <div className="text-center">
          <h2>Sign In</h2>
          <p className="text-muted">Sign in to access your account</p>
        </div>
        <Form onSubmit={handleSubmit} className=" d-flex flex-column p-4 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button className="d-block w-100" variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-muted">
            <Link onClick={handlePasswordReset} className="text-muted">
              Forgot Password?
            </Link>
          </Form.Text>
        </Form>

        <p className="text-center py-2">
          <small className="text-muted">
            Don't have an account? <Link to="/register">Create an account</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
