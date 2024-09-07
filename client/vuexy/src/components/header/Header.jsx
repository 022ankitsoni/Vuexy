import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { Search as SearchIcon, Language as LanguageIcon, Brightness4 as LightModeIcon, Widgets as WidgetsIcon, NotificationsNone as NotificationsNoneIcon, AccountCircle as ProfileIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', mb: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            borderRadius: 1, 
          }}
        >
          <SearchIcon sx={{ color: 'black' }} />
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'black' }}
            placeholder="Search..."
          />
        </Box>

       
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            sx={{
              color: 'black',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              },
            }}
          >
            <LanguageIcon />
          </IconButton>
          <IconButton
            sx={{
              color: 'black',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f0f0f0' 
              },
            }}
          >
            <LightModeIcon />
          </IconButton>
          <IconButton
            sx={{
              color: 'black',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f0f0f0' 
              },
            }}
          >
            <WidgetsIcon />
          </IconButton>
          <IconButton
            sx={{
              color: 'black',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f0f0f0' 
              },
            }}
          >
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton
            sx={{
              color: 'black',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f0f0f0' 
              },
            }}
          >
            <ProfileIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
