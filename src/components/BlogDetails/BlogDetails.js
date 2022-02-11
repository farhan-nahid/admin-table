import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { Container, TextField, FormControl, Button } from '@mui/material';

const BlogDetails = () => {
  const { id } = useParams();
  const { handelBlogId, handelBloggerId, blog, comments, handelComment, blogger } = useApi();
  handelBlogId(id);
  handelBloggerId(blog.user_id);
  console.log(blogger);
  const { email, name } = blogger;
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {};

    data.user_id = blogger.id;
    data.email = email;
    data.name = name;
    data.body = e.target.body.value;
    console.log(JSON.stringify(data));
    handelComment(e, id, e.target.body.value);
  };

  return (
    <Container sx={{ mt: 8 }}>
      <div className='blog__card'>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </div>

      <form className='blog__comment' onSubmit={handelSubmit}>
        <FormControl fullWidth>
          <TextField placeholder='Enter Your Comments' name='body' multiline rows={4} cols={12} maxRows={6} />
        </FormControl>
        <Button variant='outlined' type='submit' style={{ marginTop: '20px' }}>
          Add Comments
        </Button>
      </form>

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
