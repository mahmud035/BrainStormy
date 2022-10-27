import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Container className="footer pt-5 pb-4">
      <Row>
        <Col xs={6} lg={2}>
          <div className="pb-3">
            <h4>Support</h4>
            <div>
              <p>Support</p>
              <p>Help Center</p>
              <p>Skills Plan</p>
              <p>Flow Plans</p>
              <p>Site Map</p>
            </div>
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="pb-3">
            <h4>Community</h4>
            <div>
              <p>Guides</p>
              <p>Tech</p>
              <p>Partner with BrainStormy</p>
              <p>Affiliate Partner</p>
              <p>Authors</p>
            </div>
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="pb-3">
            <h4>Company</h4>
            <div>
              <p>About Us</p>
              <p>Careers</p>
              <p>Refund Policy</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="pb-3">
            <h4>Industries</h4>
            <div>
              <p>Public Sector</p>
              <p>Non-Profit</p>
            </div>
          </div>
        </Col>
        <Col xs={10} sm={8} md={6} lg={4}>
          <div className="pb-3">
            <h4>Newsletter</h4>
            <div>
              <p>Sign up with your email to join our mailing list.</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I would like to receive emails from BrainStormy."
                  />
                </Form.Group>

                <Button
                  variant="info"
                  type="submit"
                  className="rounded-pill fw-bold"
                >
                  Subscribe
                </Button>
              </Form>
              <div className="d-flex gap-3 pt-4" style={{ cursor: 'pointer' }}>
                <FaFacebookSquare size={32} />
                <FaInstagram size={32} />
                <FaLinkedin size={32} />
                <FaYoutube size={32} />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <p className="text-center pt-4">Copyright © 2022 BrainStormy</p>
    </Container>
  );
};

export default Footer;
