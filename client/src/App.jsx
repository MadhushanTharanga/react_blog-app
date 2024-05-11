// App.jsx
import React from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Footer from './components/Footer'; // Import Footer
import "./style.scss"
const Layout = ()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: '/write',
        element: <Write/>,
      },
    ]
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
    <div className='app'>
      <div className="container">
      <RouterProvider router={router}/>
      </div> 
     
    </div>
  ); 
}

export default App;