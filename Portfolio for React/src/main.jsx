import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ContactMe from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
      {
        path: 'Contact',
        element: <ContactMe />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);