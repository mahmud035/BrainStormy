import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';
import './CourseDetailsPage.css';

const CourseDetailsPage = () => {
  const course = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
