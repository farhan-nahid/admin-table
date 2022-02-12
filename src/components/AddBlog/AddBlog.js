import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import useApi from '../../hooks/useApi';

const AddBlog = () => {
  const [data, setData] = useState({});
  const { handelAddBlog, bloggers } = useApi();

  const handelBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handelAddBlog(e, data);
  };

  return (
    <Container id='add__blog' sx={{ mt: 8 }}>
      <h1>Add Blogs</h1>
      <form onSubmit={handelSubmit}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id='BlogName' label='Blog Name' name='title' variant='outlined' onBlur={handelBlur} required />
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id='blogger_idr'>Blogger Id</InputLabel>
              <Select labelId='blogger_idr' id='id' label='Blogger Id' name='user_id' onBlur={handelBlur} required>
                {bloggers.map((blogger) => (
                  <MenuItem key={blogger.id} value={blogger.id}>
                    {blogger.id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={12}>
            <FormControl fullWidth>
              <TextField placeholder='Enter a blog description' name='body' multiline rows={4} cols={12} maxRows={6} required onBlur={handelBlur} />
            </FormControl>
          </Grid>

          <Grid item sx={{ mt: 4 }} xs={12} md={12} className='text__center'>
            <Button variant='outlined' type='submit'>
              Add Blog
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddBlog;
