import AutoDeleteOutlinedIcon from '@mui/icons-material/AutoDeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
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

  const handelDelete = (id) => {
    axios
      .delete(`https://gorest.co.in/public/v1/users/${id}`, {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer 04b5143bdd646d3dc1c228f9ca6818abb82e3e902dfd2c0d7d55c1214bee6299`,
        },
      })
      .then((res) => {
        if (res.status === 204) {
          const rest = bloggers.filter((blogger) => blogger.id !== id);
          setBloggers(rest);
        }
      });
  };

  return (
    <Container id='all__bloggers' sx={{ mt: 8 }}>
      <h1>All Bloggers</h1>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>NAME</TableCell>
              <TableCell align='center'>EMAIL</TableCell>
              <TableCell align='center'>GENDER</TableCell>
              <TableCell align='center'>STATUS</TableCell>
              <TableCell align='center'>EDIT</TableCell>
              <TableCell align='center'>DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bloggers.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
                <TableCell align='center'>{row.gender}</TableCell>
                <TableCell align='center'>{row.status}</TableCell>
                <TableCell align='center' style={{ color: 'green', cursor: 'pointer' }}>
                  <ModeEditOutlinedIcon />
                </TableCell>
                <TableCell align='center' onClick={() => handelDelete(row.id)} style={{ color: 'red', cursor: 'pointer' }}>
                  <AutoDeleteOutlinedIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllBloggers;
