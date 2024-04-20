// App.jsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Footer from './components/Footer'; // Import Footer

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar /> {/* Render Navbar */}
        <Home />
        <Footer /> {/* Render Footer */}
      </div>
    ),
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/Login', // Capitalize "L" in "Login"
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  ); 
}

export default App;