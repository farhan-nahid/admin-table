import { Box, Container, Grid, LinearProgress } from '@mui/material';
import React from 'react';
import useApi from '../../hooks/useApi';
import SingleCard from '../SingleCard/SingleCard';

const AllBlogs = () => {
  const { blogs, handelBloggerId } = useApi();

  return (
    <Container id='all__blogs' sx={{ mt: 8 }}>
      {blogs.length ? (
        <>
          <h1>All Blogs</h1>
          <Grid container sx={{ mt: 4 }} spacing={4}>
            {blogs.map((blog) => {
              //   handelBloggerId(blog.user_id);
              return <SingleCard key={blog.id} blog={blog} />;
            })}
          </Grid>
        </>
      ) : (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
};

export default AllBlogs;
