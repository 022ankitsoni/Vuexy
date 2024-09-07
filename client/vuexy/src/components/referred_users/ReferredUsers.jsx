import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios'; 

const ReferredUsers = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedAll, setSelectedAll] = useState(false);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/walletdata'); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleSelectAll = (event) => {
    setSelectedAll(event.target.checked);
  };

  const createData = (select, user, referredId, status, value, earnings) => ({ select, user, referredId, status, value, earnings });

  const rows = users.map(user =>
    createData(
      <Checkbox size="small" checked={selectedAll} />,
      user.username, 
      user.referredID,
      user.status, 
      `$${user.value}`, 
      `$${user.earnings}` 
    )
  );

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 2,
        padding: 3,
        height: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ flex: 1, color: 'black' }}>
          Referred Users
        </Typography>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          size="small"
          sx={{ marginRight: 2 }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{ backgroundColor: '#D3D3D3', color: 'white' }}
        >
          Export
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  size="small"
                  checked={selectedAll}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Users</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Referred ID</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Status</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Value</TableCell>
              <TableCell sx={{ textTransform: 'uppercase' }}>Earnings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.select}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.referredId}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.earnings}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReferredUsers;
