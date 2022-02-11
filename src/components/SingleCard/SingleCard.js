import { Button, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const SingleCard = ({ blog: { body, title, id } }) => {
  const navigate = useNavigate();
  const { blogger } = useApi();
  console.log(id);
  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <div className='blog__card'>
        <h3>{title}</h3>
        <p>{body}</p>
        {blogger ? <h3>{blogger.name}</h3> : ''}
        <Button variant='outlined' type='submit' onClick={() => navigate(`/blog/${id}`)}>
          See Details
        </Button>
      </div>
    </Grid>
  );
};

export default SingleCard;
