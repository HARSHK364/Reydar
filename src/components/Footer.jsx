import React from 'react';
import { Box, Container, Grid, Typography, Divider, useTheme } from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Cable
} from '@mui/icons-material';
import reydarLogo from '../assets/Reydar.png';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact-footer"
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
        color: 'white',
        py: { xs: 6, md: 8 },
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Company Info - Left Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  component="img"
                  src={reydarLogo}
                  alt="ReydarIndia Logo"
                  sx={{
                    height: { xs: '60px', md: '70px' },
                    width: 'auto',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    p: 1,
                    mr: 2,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Reydar
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  opacity: 0.95
                }}
              >
                Your trusted partner for premium multistrand electrical cables. 
                Manufacturing high-quality Single Core, Twin Core, Three Core, and 
                Four Core cables for residential, commercial, and industrial applications.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Cable sx={{ mr: 2, color: 'secondary.light' }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  Premium Multistrand Electrical Cables | Quality & Reliability
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Information - Right Side - Section 1 */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              component="h4" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.2rem', md: '1.3rem' },
                mb: 3,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Email sx={{ mr: 2, color: 'secondary.light', fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                  contact@reydar.in
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Phone sx={{ mr: 2, color: 'secondary.light', fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                  +91-9171690029
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Information - Right Side - Section 2 */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              component="h4" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.2rem', md: '1.3rem' },
                mb: 3,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Location & Hours
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <LocationOn sx={{ mr: 2, color: 'secondary.light', fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                  Indore, Madhya Pradesh<br />India - 452001
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <AccessTime sx={{ mr: 2, color: 'secondary.light', fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                  Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider 
          sx={{ 
            my: 4, 
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&::before, &::after': {
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }
          }} 
        />
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: '0.9rem',
              opacity: 0.9,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            © 2025 Reydar. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: '0.85rem',
              opacity: 0.8,
              fontStyle: 'italic'
            }}
          >
            Powering connections with quality cables since 2023
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
