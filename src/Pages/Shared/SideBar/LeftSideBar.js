import React, { useEffect } from 'react';
import { useState } from 'react';
import './LeftSideBar.css';

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/course-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // console.log(categories);

  return (
    <div>
      <h4>Top Categories</h4>
      <div>
        {categories.map((category, index) => (
          <p key={index}>{category.name}</p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
