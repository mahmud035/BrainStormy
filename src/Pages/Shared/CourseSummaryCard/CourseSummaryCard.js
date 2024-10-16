import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsStarFill } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './CourseSummaryCard.css';

const CourseSummaryCard = ({ course }) => {
  const { _id, image_url, title, intro_description, learn, price, rating } =
    course;

  return (
    <Link to={`/course/${_id}`} className="text-decoration-none text-black">
      <Card
        className="mb-4 course-summary-card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{intro_description}</Card.Text>
          <h5>What you'll learn</h5>
          {learn.map((topic) => (
            <p key={topic} className="mb-2">
              <FiCheck className="me-2" /> {topic}
            </p>
          ))}

          <div className="pt-4">
            <small
              className="d-flex align-items-center gap-2 "
              style={{ fontSize: '13px' }}
            >
              <span className="fw-bold">{rating?.rate}</span>
              <span style={{ color: 'goldenrod' }}>
                <BsStarFill size={12} />
                <BsStarFill size={12} />
                <BsStarFill size={12} />
                <BsStarFill size={12} />
                <BsStarFill size={12} />
              </span>
              <span>({rating?.count})</span>
            </small>
          </div>

          <h5 className="pt-4">
            Price: <span className="fw-bold">{price}</span>
          </h5>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CourseSummaryCard;
