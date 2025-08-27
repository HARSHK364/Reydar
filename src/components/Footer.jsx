import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  WhatsApp,
  YouTube
} from '@mui/icons-material';
import reydarLogo from '../assets/Reydar.png';

const Footer = () => {
  return (
    <Box
      id="contact-footer"
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img 
                src={reydarLogo} 
                alt="Reydar Logo" 
                style={{ 
                  height: '80px', 
                  width: '100px', 
                  marginRight: '12px' 
                }} 
              />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
              Your trusted partner for chemical industry growth. Specialized sales and marketing 
              consulting services to accelerate your business success in the chemical sector.
            </Typography>
            <Typography variant="body2" color="grey.400">
              Chemical Industry Consulting | Sales & Marketing Expertise
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h4" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body2">contact@reydar.in</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body2">+91-9171690029</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WhatsApp sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body2">+91-9171690029</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body2">Indore, India</Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid #333',
            mt: 4,
            pt: 3,
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography variant="body2" color="grey.400">
            © 2025 Reydar. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, sm: 3 },
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center'
          }}>
            <Typography variant="body2" color="grey.400" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>
              Terms of Service
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
