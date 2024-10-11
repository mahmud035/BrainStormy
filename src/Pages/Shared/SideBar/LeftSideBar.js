import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://brain-stormy-server-side.vercel.app/course-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="left-sidebar">
      <h3 className="pb-3">Course Categories</h3>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="category-name">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
