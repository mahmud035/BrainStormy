import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const course = useLoaderData();
  const { title } = course;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Checkout;
