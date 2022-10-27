import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import './Category.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import LeftSideBar from '../Shared/SideBar/LeftSideBar';

const Category = () => {
  const categoryCourses = useLoaderData();
  console.log(categoryCourses);

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
                key={index}
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
