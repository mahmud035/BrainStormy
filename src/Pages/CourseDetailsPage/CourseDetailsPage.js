import React from 'react';
import './CourseDetailsPage.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';
import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

const CourseDetailsPage = () => {
  const course = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(course);

  return (
    <div className="course-details-page">
      <Container className="py-5">
        <Row className="g-4">
          <Col sm={4} md={4}>
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col sm={8} md={8}>
            <CourseDetailsCard course={course}></CourseDetailsCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetailsPage;
