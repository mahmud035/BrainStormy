import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';
import './Category.css';

const Category = () => {
  const categoryCourses = useLoaderData();

  return (
    <div className="category-page">
      <Container className="py-5">
        <Row className="g-4">
          <Col sm={4} md={4}>
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col sm={8} md={8}>
            <h2 className="pb-2 text-white">
              {categoryCourses.length} results found
            </h2>

            {categoryCourses.map((course, index) => (
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

export default Category;
