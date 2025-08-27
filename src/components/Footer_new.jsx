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
  Science,
  WhatsApp,
  YouTube
} from '@mui/icons-material';

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Science sx={{ mr: 1, fontSize: 30, color: 'primary.light' }} />
              <Typography variant="h5" component="h3" fontWeight="bold">
                Reydar
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
              Expert sales and marketing consulting for chemical companies worldwide. 
              Accelerating growth with industry-specific strategies and proven expertise.
            </Typography>
            <Typography variant="body2" color="grey.400">
              Chemical Industry Consulting | Proven Growth Strategies
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
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
              <Typography variant="body2">
                Indore, India
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid #333',
            mt: 4,
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="grey.400">
            © 2025 Reydar. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
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
