import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './AddBlogger.css';

const AddBlogger = () => {
  const [data, setData] = useState({});

  const handelBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(data));
    axios
      .post('https://gorest.co.in/public/v1/users', data, {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => {
        if (res.data.data) {
          toast.success('New User Added');
          setData({});
          e.target.reset();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Container id='add__blogger'>
      <h1>Add Bloggers</h1>
      <form onSubmit={handelSubmit}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id='BloggerName' label='Blogger Name' name='name' variant='outlined' onBlur={handelBlur} required />
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id='BloggerEmail' label='Blogger Email' name='email' variant='outlined' onBlur={handelBlur} required />
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id='blogger_gender'>Gender</InputLabel>
              <Select labelId='blogger_gender' id='gender' value={data.gender} label='Gender' name='gender' onBlur={handelBlur} required>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Others'>Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id='blogger__Status'>Status</InputLabel>
              <Select labelId='blogger__Status' id='Status' value={data.status} label='Status' name='status' onBlur={handelBlur} required>
                <MenuItem value='Active'>Active</MenuItem>
                <MenuItem value='InActive'>InActive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={12} className='text__center'>
            <Button variant='outlined' type='submit'>
              Add Blogger
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddBlogger;
