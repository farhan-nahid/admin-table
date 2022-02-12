import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const EditBlogger = () => {
  const { id } = useParams();
  const { handelUpdateUser, handelBloggerId, blogger } = useApi();

  useEffect(() => {
    handelBloggerId(id);
  }, [handelBloggerId, id]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.gender = e.target.gender.value;
    data.status = e.target.status.value;
    console.log(data);
    handelUpdateUser(data, id);
  };

  return (
    <Container id='edit__blogger' sx={{ mt: 8 }}>
      <h1>Edit Bloggers</h1>
      <form onSubmit={handelSubmit}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id='EditBloggerName' label='Blogger Name' name='name' variant='outlined' defaultValue={blogger.name} required />
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id='EditBloggerEmail' label='Blogger Email' name='email' variant='outlined' defaultValue={blogger.email} required />
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id='EditBlogger_gender'>Gender</InputLabel>
              <Select labelId='EditBlogger_gender' id='edit_gender' label='Gender' name='gender' defaultValue={blogger.gender} required>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Others'>Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id='Edit_blogger__Status'>Status</InputLabel>
              <Select labelId='Edit_blogger__Status' id='Edit_Status' label='Status' name='status' defaultValue={blogger.status} required>
                <MenuItem value='Active'>Active</MenuItem>
                <MenuItem value='InActive'>InActive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={12} className='text__center'>
            <Button variant='outlined' type='submit'>
              Update Blogger
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditBlogger;
