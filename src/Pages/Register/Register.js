import React, { useContext } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Account Created Successfully');

        navigate('/');
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Account Created Successfully');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        toast.success('Profile updated');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container form-page pt-5">
      <div className="pt-5 px-4 form-container ">
        <div className="text-center">
          <h2>Please Register</h2>
          <p className="text-muted">Create a new account</p>
        </div>
        <Form onSubmit={handleSubmit} className=" d-flex flex-column  py-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name </Form.Label>
            <Form.Control type="text" name="name" placeholder="User Name " />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL </Form.Label>
            <Form.Control type="text" name="photo" placeholder="Photo URL " />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="d-block w-100" variant="primary" type="submit">
            Register
          </Button>
        </Form>

        <div className="social-accounts-sign-up">
          <p></p>
          <p className="text-center">
            <small>Or</small>
          </p>
          <p></p>
        </div>

        <div className="text-center py-3">
          <ButtonGroup vertical>
            <Button
              onClick={handleGoogleSignIn}
              className="mb-3 rounded "
              variant="outline-primary"
            >
              <FcGoogle size={20} className="me-3 mb-1 " />
              <span>Continue with Google</span>
            </Button>

            <Button className=" rounded " variant="outline-dark">
              <BsGithub size={20} className="me-3 mb-1" />
              <span>Continue with Github</span>
            </Button>
          </ButtonGroup>
        </div>

        <p className="text-center">
          <small className="text-muted">
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Register;
