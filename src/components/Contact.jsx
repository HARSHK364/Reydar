import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
  Chip,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  ContactMail,
  Business,
  Support
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    productInterest: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      productInterest: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Phone",
      details: ["+91-9171690029", "+91-7309123456"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Email",
      details: ["contact@reydar.in"],
      description: "Send us your queries anytime"
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Address",
      details: ["Reydar Electronics", "Indore, Madhya Pradesh", "India - 452001"],
      description: "Visit our office for direct consultation"
    },
    {
      icon: <AccessTime sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      description: "We're here to help during business hours"
    }
  ];

  const productOptions = [
    "Single Core Multistrand Cable",
    "Twin Core Multistrand Cable", 
    "Three Core Multistrand Cable",
    "Four Core Multistrand Cable",
    "Bulk Orders",
    "Custom Requirements",
    "General Inquiry"
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}15 0%, 
            ${theme.palette.secondary.main}10 50%, 
            ${theme.palette.primary.light}15 100%)`,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1.5rem', md: '2rem' },
                maxWidth: '800px',
                mx: 'auto',
                mb: 4
              }}
            >
              Get in Touch with Reydar
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ 
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              We're here to help with all your electrical cable needs. Contact us for quotes, 
              technical support, or any questions about our products.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Contact Information Cards */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              mb: 6
            }}
          >
            Get in Touch
          </Typography>
          <Grid 
            container 
            spacing={4}
            className="contact-cards"
            sx={{
              justifyContent: 'center',
              mx: 'auto'
            }}
          >
            {contactInfo.map((info, index) => (
              <Grid 
                item 
                xs={12} 
                sm={12} 
                md={6}
                lg={6}
                xl={6}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    minHeight: '350px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, 
                        ${theme.palette.primary.main}10 0%, 
                        ${theme.palette.secondary.main}08 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `
                        0 20px 60px ${theme.palette.primary.main}20, 
                        0 10px 30px rgba(0, 0, 0, 0.1),
                        0 0 0 1px ${theme.palette.primary.main}30
                      `,
                      borderColor: 'primary.main',
                      '&::before': {
                        opacity: 1
                      },
                      '& .contact-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: theme.palette.secondary.main
                      }
                    }
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: 0, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          mb: 3,
                          display: 'flex',
                          justifyContent: 'center',
                          position: 'relative'
                        }}
                      >
                        <Box
                          sx={{
                            p: 3,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, 
                              ${theme.palette.primary.main}15 0%, 
                              ${theme.palette.secondary.main}10 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: -2,
                              left: -2,
                              right: -2,
                              bottom: -2,
                              background: `linear-gradient(45deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.secondary.main} 100%)`,
                              borderRadius: '50%',
                              zIndex: -1,
                              opacity: 0.2
                            }
                          }}
                        >
                          {React.cloneElement(info.icon, {
                            className: 'contact-icon',
                            sx: {
                              fontSize: 36,
                              color: 'primary.main',
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                            }
                          })}
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ 
                          fontWeight: 700, 
                          color: 'primary.main',
                          fontSize: '1.3rem',
                          mb: 2
                        }}
                      >
                        {info.title}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, mb: 2 }}>
                      {info.details.map((detail, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{ 
                            fontWeight: idx === 0 ? 600 : 400,
                            color: 'text.primary',
                            mb: 0.8,
                            fontSize: '0.95rem',
                            lineHeight: 1.4
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                        fontStyle: 'italic'
                      }}
                    >
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Quick Contact and Why Choose ReydarIndia Sections */}
        <Grid container spacing={6} sx={{ mt: 4,justifyContent: 'center' }}>
          {/* Quick Contact */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                height: '730px',
                minHeight: '400px',
                maxWidth: '450px',
                display: 'flex',
                flexDirection: 'column',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                color: 'white',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  zIndex: 0
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  zIndex: 0
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3
                    }}
                  >
                    <Support sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '1.8rem' }
                    }}
                  >
                    Quick Contact
                  </Typography>
                </Box>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.95,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Need immediate assistance? Reach out to us directly for quick support and solutions.
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      mb: 3
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 2,
                        fontSize: '1.2rem'
                      }}
                    >
                      💼 Sales Inquiry
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.95,
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        mb: 1
                      }}
                    >
                      📞 +91-9171690029
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.95,
                        fontSize: '1rem',
                        lineHeight: 1.5
                      }}
                    >
                      ✉️ contact@reydar.in
                    </Typography>
                  </Box>
                  
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 2,
                        fontSize: '1.2rem'
                      }}
                    >
                      🔧 Technical Support
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.95,
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        mb: 1
                      }}
                    >
                      📞 +91-7309123456
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.95,
                        fontSize: '1rem',
                        lineHeight: 1.5
                      }}
                    >
                      ✉️ contact@reydar.in
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Why Choose ReydarIndia */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                height: '730px',
                minHeight: '400px',
                maxWidth: '450px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, 
                    ${theme.palette.primary.main}05 0%, 
                    ${theme.palette.secondary.main}03 100%)`,
                  zIndex: 0
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3
                    }}
                  >
                    <Business sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main',
                      fontSize: { xs: '1.5rem', md: '1.8rem' }
                    }}
                  >
                    Why Choose REYDAR?
                  </Typography>
                </Box>
                
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                  sx={{ 
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Discover what makes us the preferred choice for electrical solutions:
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {[
                    { icon: '🏆', text: 'ISO Certified Quality' },
                    { icon: '⭐', text: '2+ Years Trusted Experience' },
                    { icon: '💰', text: 'Competitive Pricing' },
                    { icon: '🚚', text: 'Fast Delivery' },
                    { icon: '🔧', text: 'Technical Support' },
                    { icon: '⚙️', text: 'Custom Solutions' }
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          transform: 'translateX(8px)',
                          boxShadow: `0 4px 15px ${theme.palette.primary.main}20`
                        }
                      }}
                    >
                      <Typography 
                        sx={{ 
                          fontSize: '1.5rem', 
                          mr: 2,
                          minWidth: '32px'
                        }}
                      >
                        {item.icon}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '1rem'
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            mt: 8,
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}15 0%, ${theme.palette.primary.main}15 100%)`,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              lineHeight: 1.8, 
              color: 'text.primary',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '700px',
              mx: 'auto',
              mb: 4
            }}
          >
            Whether you need a single cable or bulk orders for large projects, we're here to provide 
            the perfect electrical solutions for your needs. Contact us today for personalized quotes 
            and expert guidance.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              href="tel:+919171690029"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Call Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              href="mailto:contact@reydar.in"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              Email Us
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;