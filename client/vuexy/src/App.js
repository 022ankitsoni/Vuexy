import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import ReferredUsers from './components/referred_users/ReferredUsers'; 
import HowToUse from './components/how_to_use/HowToUse'; 
import InviteYourFriends from './components/invite_your_friends/InviteYourFriends'; 
import LeftSidebar from './components/leftsidebar/LeftSidebar'; 
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
//import { connectWallet } from './wallet/walletConnect';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import AutoGraphIcon from '@mui/icons-material/AutoGraph'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:1000px)');

  const [totalEarnings, setTotalEarnings] = useState(0);
  const [unpaidEarnings, setUnpaidEarnings] = useState(0);
  const [signups, setSignups] = useState(0);

  //const [account, setAccount] = useState(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

 
  const fetchDataFromBackend = async () => {
    try {
      
      const response = await axios.get('http://localhost:8080/walletdata');
      const data = response.data;

      const totalEarnings = data.reduce((acc, user) => acc + user.earnings, 0);

     
      const totalValue = data.reduce((acc, user) => acc + user.value, 0);
  
      
      const unpaidEarnings = totalValue - totalEarnings;
  
      
      const signups = data.length;

      setTotalEarnings(totalEarnings);
      setUnpaidEarnings(unpaidEarnings);
      setSignups(signups);
    } catch (error) {
      console.error("Error fetching data from backend", error);
    }
  };

  // const handleConnect = async () => {
  //   try {
  //     const { signer } = await connectWallet();
  //     const address = await signer.getAddress();
  //     setAccount(address);
  //   } catch (error) {
  //     console.error("Connection failed", error);
  //   }
  // };

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  return (
    <BrowserRouter>
      <Box 
        sx={{ 
          display: 'flex', 
          height: '100vh',
          backgroundColor: '#f5f5f5',
          padding: 2,
          paddingLeft: 0,
          overflow: 'hidden' 
        }}
      >
       
        {isSmallScreen && !sidebarOpen && (
          <IconButton 
            onClick={handleSidebarToggle} 
            sx={{ 
              position: 'absolute', 
              top: 16, 
              left: 16, 
              zIndex: 1200
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

       
        <Box 
          sx={{ 
            width: '230px', 
            backgroundColor: '#fff', 
            borderRadius: 1, 
            boxShadow: 2, 
            position: isSmallScreen ? 'fixed' : 'static',
            top: 0,
            left: 0,
            height: '100%',
            overflowY: 'auto', 
            overflowX: 'hidden', 
            transform: isSmallScreen ? (sidebarOpen ? 'translateX(0)' : 'translateX(-230px)') : 'none',
            transition: 'transform 0.3s ease',
            zIndex: 1000,
            display: isSmallScreen && !sidebarOpen ? 'none' : 'block'
          }}
        >
          {isSmallScreen && sidebarOpen && (
            <IconButton 
              onClick={handleSidebarClose} 
              sx={{ 
                position: 'absolute', 
                top: 16, 
                right: 16, 
                zIndex: 1201 
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
          <Box 
            sx={{ 
              padding: 2,
              paddingLeft: 0
            }}
          >
            <LeftSidebar />
          </Box>
        </Box>

         {/* <Box>
           <button onClick={handleConnect}>Connect Wallet</button>
           {account && <p>Connected Account: {account}</p>}
         </Box> */}

        
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            padding: 2,
            marginLeft: isSmallScreen && sidebarOpen ? '230px' : 0,
            transition: 'margin-left 0.3s ease',
            height: '100vh', 
            overflowY: 'auto' 
          }}
        >
          <Box 
            sx={{ 
              height: 60,
              backgroundColor: '#fff', 
              borderRadius: 2, 
              boxShadow: 2, 
              marginBottom: 3 
            }}
          >
            <Header />
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              gap: 2, 
              flexWrap: 'wrap', 
              backgroundColor: '#f5f5f5', 
              marginBottom: 3 
            }}
          >
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1,
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>${totalEarnings.toLocaleString()}</Typography>
                <Typography variant="body2" color="textSecondary">Total Earnings</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'purple', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <AccountBalanceWalletIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1, 
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>${unpaidEarnings.toLocaleString()}</Typography>
                <Typography variant="body2" color="textSecondary">Unpaid Earnings</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'green',
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <LocalOfferIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1, 
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>{signups}</Typography>
                <Typography variant="body2" color="textSecondary">Signups</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'red', 
                  borderRadius: '50%',
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <PersonAddIcon />
              </Box>
            </Card>
            <Card 
              sx={{ 
                flex: 1, 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 2, 
                backgroundColor: '#fff', 
                borderRadius: 1, 
                boxShadow: 3, 
                minWidth: 200, 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>4.5%</Typography>
                <Typography variant="body2" color="textSecondary">Conversion Rate</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: 'skyblue', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff' 
                }}
              >
                <AutoGraphIcon />
              </Box>
            </Card>
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              marginBottom: 3 
            }}
          >
            <Box 
              sx={{ 
                flex: 1, 
                backgroundColor: '#f5f5f5', 
                padding: 0, 
                borderRadius: 1, 
                boxShadow: 2 
              }}
            >
              <HowToUse />
            </Box>
            <Box 
              sx={{ 
                flex: 1, 
                backgroundColor: '#f5f5f5', 
                padding: 0, 
                borderRadius: 1, 
                boxShadow: 2 
              }}
            >
              <InviteYourFriends />
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              flexGrow: 1, 
              marginBottom: 0, 
              flex: 1, 
              backgroundColor: '#f5f5f5', 
              padding: 0, 
              borderRadius: 1, 
              boxShadow: 2 
            }}
          >
            <ReferredUsers  />
          </Box>
          <Box style={{padding:'10px'}}>
          ©2024, made with ❤️ by Ankit Soni
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
