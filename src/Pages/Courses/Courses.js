import React from 'react';
import './Courses.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCard from '../Shared/CourseCard/CourseCard';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';

const Courses = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col sm={4} md={4}>
          <LeftSideBar></LeftSideBar>
        </Col>
        <Col sm={8} md={8}>
          <CourseCard></CourseCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
