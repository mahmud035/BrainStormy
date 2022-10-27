import React from 'react';
import './Home.css';
import bg from '../../assets/images/bg.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    minHeight: `calc(100vh - 75px)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'overlay',
    position: 'relative',
  };
  return (
    <div>
      <div style={myStyle}>
        <div className="header-content">
          <h1>Explore BrainStormy</h1>
          <p>
            BrainStormy is an online learning and teaching marketplace with over
            thousands of courses and millions of students. Learn programming,
            Artificial Intelligence, data science and more!
          </p>
          <Link to="/courses">
            <Button variant="info">See Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
