import React from 'react';
import './CourseDetailsCard.css';
import Card from 'react-bootstrap/Card';
import { FiCheck } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button, Image } from 'react-bootstrap';
import { MdReviews } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';

const CourseDetailsCard = ({ course }) => {
  const {
    _id,
    image_url,
    title,
    intro_description,
    learn,
    requirements,
    price,
    rating,
    description,
    instructor,
  } = course;

  return (
    <div>
      <div className="pb-4 d-flex justify-content-between">
        <h2>{title}</h2>
        <Button variant="secondary" className="fw-bold">
          PDF
        </Button>
      </div>
      <Card className="mb-4 course-summary-card">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{intro_description}</Card.Text>

          <div className="pb-4 pt-1">
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

          <h5 className="pb-4">
            Price: <span className="fw-bold">{price}</span>
          </h5>

          <div className="pb-4">
            <h5>What you'll learn</h5>
            {learn?.map((topic, index) => (
              <>
                <p key={index} className="mb-2">
                  <FiCheck className="me-2" /> {topic}
                </p>
              </>
            ))}
          </div>

          <div className="pb-4">
            <h5>Requirements</h5>
            {requirements?.map((topic, index) => (
              <>
                <p key={index} className="mb-2">
                  <GoPrimitiveDot className="me-2" /> {topic}
                </p>
              </>
            ))}
          </div>

          <div className="pb-4">
            <h5>Description</h5>
            <p>{description}</p>
          </div>

          <div className="pb-4">
            <h5>Instructor</h5>
            <h6>{instructor?.name}</h6>
            <div className="mt-3 d-flex align-items-center gap-4">
              <Image
                roundedCircle
                src={instructor?.img}
                style={{ width: '110px', height: '110px' }}
              ></Image>
              <div>
                <p className="mb-2">
                  <BsStarFill size={14} className="me-3" />
                  <small>
                    {instructor?.instructor_rating}
                    Instructor Rating
                  </small>
                </p>
                <p className="mb-2">
                  <MdReviews size={14} className="me-3" />
                  <small>{instructor?.reviews} Reviews</small>
                </p>
                <p className="mb-2">
                  <FaUserFriends size={14} className="me-3" />
                  <small>{instructor?.students} Students</small>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetailsCard;
