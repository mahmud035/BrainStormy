import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Checkout.css';

const Checkout = () => {
  const course = useLoaderData();
  const { title, price } = course || {};
  console.log(course);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const contactNumber = form.contact.value;
    const address = form.address.value;
    console.log(name, contactNumber, address);

    toast.success('Thank you for staying with us!');

    form.reset();

    navigate('/courses');
  };

  return (
    // <div className="d-flex flex-column justify-content-center text-center align-items-center min-vh-100">
    //   <h3>Course Name: {course && <h2>{title}</h2>}</h3>
    // </div>

    <div className="checkout-page">
      <div className="d-flex flex-column justify-content-center text-center align-items-center pt-5">
        <h1>Course Name: {course && <h2>{title}</h2>}</h1>
      </div>
      <div>
        <div className="container min-vh-100">
          <main className="checkout-form mt-5">
            <div className="row g-5 pt-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  {/* <span className="badge bg-primary rounded-pill">3</span> */}
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{title}</h6>
                    </div>
                    <span>{price}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Shipping address</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Full Name
                      </label>
                      <div className="input-group ">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Steve Smith Jr"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Contact No
                      </label>
                      <div className="input-group ">
                        <input
                          type="number"
                          className="form-control"
                          name="contact"
                          placeholder="01936-205938"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Level-4, 34, Awal Centre, Banani, Dhaka"
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="save-info"
                    />
                    <label className="form-check-label" htmlFor="save-info">
                      Save this information for next time
                    </label>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-primary btn-lg fw-semibold btn-sign-in"
                    type="submit"
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
