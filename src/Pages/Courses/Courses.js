import React from 'react';
import './Courses.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Courses = () => {
  const allCourse = useLoaderData();

  // console.log(allCourse);

  return (
    <Container className="py-5" data-aos="fade-up" data-aos-duration="1000">
      <Row className="g-4">
        <Col sm={4} md={4}>
          <LeftSideBar></LeftSideBar>
        </Col>
        <Col sm={8} md={8}>
          {allCourse.map((course, index) => (
            <CourseSummaryCard key={index} course={course}></CourseSummaryCard>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
