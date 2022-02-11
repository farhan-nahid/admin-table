import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlogger from './components/AddBlogger/AddBlogger';
import AllBloggers from './components/AllBloggers/AllBloggers';
import AllBlogs from './components/AllBlogs/AllBlogs';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navigation />
      <Routes>
        <Route path='/add-bloggers' element={<AddBlogger />} />
        <Route path='/all-bloggers' element={<AllBloggers />} />
        <Route path='/all-blogs' element={<AllBlogs />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
