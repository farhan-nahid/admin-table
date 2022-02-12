import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog/AddBlog';
import AddBlogger from './components/AddBlogger/AddBlogger';
import AllBloggers from './components/AllBloggers/AllBloggers';
import AllBlogs from './components/AllBlogs/AllBlogs';
import BlogDetails from './components/BlogDetails/BlogDetails';
import EditBlogger from './components/EditBlogger/EditBlogger';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navigation />
      <Routes>
        <Route path='/add-blogs' element={<AddBlog />} />
        <Route path='/all-blogs' element={<AllBlogs />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/add-bloggers' element={<AddBlogger />} />
        <Route path='/all-bloggers' element={<AllBloggers />} />
        <Route path='/edit-blogger/:id' element={<EditBlogger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
