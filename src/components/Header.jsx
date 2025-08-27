import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import reydarLogo from '../assets/Reydar.png';

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('contact-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries Served', path: '/industries' },
    { label: 'Why Choose Us', path: '/why-choose-us' },
    { label: 'Contact', action: scrollToFooter }
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={item.path ? Link : 'button'}
              to={item.path}
              onClick={item.action || (() => setMobileOpen(false))}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToFooter}
            sx={{ 
              textAlign: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              m: 2,
              borderRadius: 1,
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            <ListItemText primary="Get Consultation" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'primary.main' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img 
              src={reydarLogo} 
              alt="Reydar Logo" 
              style={{ 
                height: isMobile ? '40px' : '80px', 
                width: isMobile ? '50px' : '100px',
                marginRight: '12px'
              }} 
            />
          </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                component={Link} 
                to="/" 
                color="inherit" 
                sx={{ mx: 1, fontSize: { md: '0.875rem', lg: '1rem' } }}
              >
                Home
              </Button>
              <Button 
                component={Link} 
                to="/services" 
                color="inherit" 
                sx={{ mx: 1, fontSize: { md: '0.875rem', lg: '1rem' } }}
              >
                Services
              </Button>
              <Button 
                component={Link} 
                to="/about" 
                color="inherit" 
                sx={{ mx: 1, fontSize: { md: '0.875rem', lg: '1rem' } }}
              >
                About
              </Button>
              <Button 
                component={Link} 
                to="/industries" 
                color="inherit" 
                sx={{ mx: 1, fontSize: { md: '0.875rem', lg: '1rem' } }}
              >
                Industries
              </Button>
              <Button 
                component={Link} 
                to="/why-choose-us" 
                color="inherit" 
                sx={{ mx: 1, fontSize: { md: '0.875rem', lg: '1rem' } }}
              >
                Why Choose Us
              </Button>
              <Button 
                color="inherit" 
                sx={{ mx: 1, fontSize: { md: '0.875rem', lg: '1rem' } }}
                onClick={scrollToFooter}
              >
                Contact
              </Button>
              <Button 
                variant="contained" 
                sx={{ ml: 2 }}
                onClick={scrollToFooter}
              >
                Get Consultation
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
