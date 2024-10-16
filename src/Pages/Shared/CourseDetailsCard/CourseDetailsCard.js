import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { BsFillFileEarmarkPdfFill, BsStarFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import './CourseDetailsCard.css';

const ref = React.createRef();

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
      <div className="pb-4 d-flex justify-content-between ">
        <h2 className="text-white">{title}</h2>

        <Pdf targetRef={ref} filename="course-details.pdf">
          {({ toPdf }) => (
            <BsFillFileEarmarkPdfFill
              onClick={toPdf}
              size={40}
              style={{ cursor: 'pointer', color: '#F40F02' }}
              title="Create PDF"
            />
          )}
        </Pdf>
      </div>
      <Card
        className="mb-4 course-summary-card"
        ref={ref}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
            {learn?.map((topic) => (
              <p key={topic} className="mb-2">
                <FiCheck className="me-2" /> {topic}
              </p>
            ))}
          </div>

          <div className="pb-4">
            <h5>Requirements</h5>
            {requirements?.map((topic) => (
              <p key={topic} className="mb-2">
                <GoPrimitiveDot className="me-2" /> {topic}
              </p>
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

          <div className="my-5 d-flex justify-content-center">
            <Link to={`/checkout/${_id}`}>
              <Button variant="info">Get Premium Access</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetailsCard;
