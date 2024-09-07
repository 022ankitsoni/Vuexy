import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket'; 
import CardMembershipIcon from '@mui/icons-material/CardMembership'; 
import ShareIcon from '@mui/icons-material/Share'; 

const HowToUse = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 1, 
        boxShadow: 2, 
        padding: 3, 
        margin: 0 
      }}
    >
     
      <Typography 
        variant="h6" 
        sx={{ color: 'black', marginBottom: 1 }}
      >
        How to use
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ color: '#9e9e9e', marginBottom: 3 }}
      >
        Integrate your referral code in 3 easy steps.
      </Typography>

      
      <Grid container spacing={2}>
       
        <Grid item xs={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: 60, 
                height: 60,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 1,
                border: '4px dotted #D3B4FF', 
                position: 'relative'
              }}
            >
              <RocketIcon sx={{ color: '#D3B4FF' }} /> 
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                maxWidth: 160,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                margin: '0 auto' 
              }}
            >
              Create & validate your referral link and get $50
            </Typography>
          </Box>
        </Grid>

        
        <Grid item xs={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: 60, 
                height: 60,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 1,
                border: '4px dotted #D3B4FF', 
                position: 'relative'
              }}
            >
              <CardMembershipIcon sx={{ color: '#D3B4FF' }} /> 
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                maxWidth: 160,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                margin: '0 auto' 
              }}
            >
              For every new signup you get 10%
            </Typography>
          </Box>
        </Grid>

       
        <Grid item xs={4}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: 60, 
                height: 60,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 1,
                border: '4px dotted #D3B4FF', 
                position: 'relative'
              }}
            >
              <ShareIcon sx={{ color: '#D3B4FF' }} /> 
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                maxWidth: 160, 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                margin: '0 auto',
                height: 70
              }}
            >
              Get other friends to generate link and get $100
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowToUse;
