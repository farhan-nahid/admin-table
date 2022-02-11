import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { Container } from '@mui/material';

const BlogDetails = () => {
  const { id } = useParams();
  const { handelBlogId, blog, comments } = useApi();
  handelBlogId(id);

  return (
    <Container sx={{ mt: 8 }}>
      <div className='blog__card'>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </div>

      <div className='all__comments'>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className='comment'>
            <h4>Name: {comment.name}</h4>
            <h6>Email: {comment.email}</h6>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BlogDetails;
