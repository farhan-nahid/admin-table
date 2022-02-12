import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import useApi from '../../hooks/useApi';

const AddBlogger = () => {
  const [data, setData] = useState({});
  const { handelAddUser } = useApi();

  const handelBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handelAddUser(e, data);
  };

  return (
    <Container id='add__blogger' sx={{ mt: 8 }}>
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
