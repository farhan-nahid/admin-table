import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useAsyncCall = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [bloggers, setBloggers] = useState([]);
  const [blogger, setBlogger] = useState([]);
  const [comments, setComments] = useState([]);
  const [bloggerId, setBloggerId] = useState(0);
  const [blogId, setBlogId] = useState(0);

  const handelBloggerId = (id) => {
    setBloggerId(id);
  };

  const handelBlogId = (id) => {
    setBlogId(id);
  };

  useEffect(() => {
    axios
      .get('https://gorest.co.in/public/v1/users', {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => setBloggers(res.data.data))
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/users/${bloggerId}`, {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => setBlogger(res.data.data))
      .catch((err) => toast.error(err.message));
  }, [bloggerId]);

  useEffect(() => {
    axios
      .get('https://gorest.co.in/public/v1/posts', {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => setBlogs(res.data.data))
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/posts/${blogId}`, {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => setBlog(res.data.data))
      .catch((err) => toast.error(err.message));
  }, [blogId]);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/posts/${blogId}/comments`, {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => setComments(res.data.data))
      .catch((err) => toast.error(err.message));
  }, [blogId]);

  return { blogs, blog, bloggers, blogger, handelBloggerId, handelBlogId, comments };
};

export default useAsyncCall;
