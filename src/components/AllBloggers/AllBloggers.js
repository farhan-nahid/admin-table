import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './AllBloggers.css';

const AllBloggers = () => {
  const [bloggers, setBloggers] = useState([]);

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

  console.log(bloggers);
  return (
    <Container id='all__bloggers'>
      <h1>All Bloggers</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>NAME</TableCell>
              <TableCell align='center'>EMAIL</TableCell>
              <TableCell align='center'>GENDER</TableCell>
              <TableCell align='center'>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bloggers.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
                <TableCell align='center'>{row.gender}</TableCell>
                <TableCell align='center'>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllBloggers;
