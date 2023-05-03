import './App.scss';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <Navbar />
  );
}

export default App;
