import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';
import './Courses.css';

const Courses = () => {
  const allCourse = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="course-page">
      <Container className="py-5" data-aos="fade-up" data-aos-duration="1000">
        <Row className="g-4">
          <Col sm={4} md={4}>
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col sm={8} md={8}>
            <h3 className="pb-2 text-white">
              {allCourse.length} results found
            </h3>
            {allCourse.map((course, index) => (
              <CourseSummaryCard
                key={course._id}
                course={course}
              ></CourseSummaryCard>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
