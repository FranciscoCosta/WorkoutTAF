import React from 'react';
import './App.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Navbar, Footer } from './components/index';
import {
  Home,
  Login,

} from './pages/index';

function App() {
  // eslint-disable-next-line react/no-unstable-nested-components
  function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
