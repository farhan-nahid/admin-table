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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const AllBloggers = () => {
  const { handelDelete, bloggers } = useApi();
const navigate = useNavigate()

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
                <TableCell align='center' onClick={()=>navigate(`/edit-blogger/${row.id}`)} style={{ color: 'green', cursor: 'pointer' }}>
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
