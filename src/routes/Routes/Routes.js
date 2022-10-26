import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Profile from '../../Others/Profile/Profile';
import Blog from '../../Pages/Blog/Blog';
import Category from '../../Pages/Category/Category';
import Checkout from '../../Pages/Checkout/Checkout';
import CourseDetailsPage from '../../Pages/CourseDetailsPage/CourseDetailsPage';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },

      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('http://localhost:5000/courses'),
      },
      {
        path: '/course/:id',
        element: <CourseDetailsPage></CourseDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
