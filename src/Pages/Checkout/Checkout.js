import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const course = useLoaderData();
  const { title } = course || {};
  console.log(course);

  return (
    <div className="d-flex flex-column justify-content-center text-center align-items-center min-vh-100">
      <h3>Course Name: {course && <h2>{title}</h2>}</h3>
    </div>
  );
};

export default Checkout;
