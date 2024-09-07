import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import TwitterIcon from '@mui/icons-material/Twitter'; 

const InviteYourFriends = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 1, 
        boxShadow: 2, 
        padding: 2, 
        margin: 0,
        height: 250, 
        overflow: 'auto' 
      }}
    >
     
      <Typography 
        variant="h6" 
        sx={{ color: 'black', marginBottom: 1 }}
      >
        Invite your friends
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ color: '#9e9e9e', marginBottom: 1 }}
      >
        Enter friend’s email address and invite them
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 2 
        }}
      >
        <TextField 
          variant="outlined" 
          placeholder="Email Address" 
          sx={{ flex: 1, marginRight: 1 }} 
          size="small" 
        />
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#7B68EE', color: 'white' }} 
          size="small" 
        >
          Submit
        </Button>
      </Box>

     
      <Typography 
        variant="h6" 
        sx={{ color: 'black', marginBottom: 1 }}
      >
        Share the referral link
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ color: '#9e9e9e', marginBottom: 1 }}
      >
        Share referral link in social media
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 1 
        }}
      >
        <TextField 
          variant="outlined" 
          placeholder="pixinvent.com/?ref=6479" 
          sx={{ flex: 1, marginRight: 1 }} 
          size="small"
        />
        <IconButton 
          sx={{ backgroundColor: '#3b5998', color: 'white', marginRight: 1 }} 
          size="small" 
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          sx={{ backgroundColor: '#1DA1F2', color: 'white' }} 
          size="small" 
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InviteYourFriends;
