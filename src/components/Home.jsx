import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Grow,
  Zoom
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos,
  ElectricBolt,
  Security,
  Settings,
  Speed,
  CheckCircle,
  Cable
} from '@mui/icons-material';
import reydarLogo from '../assets/Reydar.png';
import HomeImage from '../assets/HomeImage.jpg';
import singleCoreCable from '../assets/single-core-cable.jpg';
import twinCoreCable from '../assets/twin-core-cable.jpg';
import threeCoreCable from '../assets/three-core-cable.jpg';
import fourCoreCable from '../assets/four-core-cable.jpg';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % electricalProducts.length);
    }, 4000);
    
    // Trigger features animation after a delay
    const featuresTimer = setTimeout(() => {
      setFeaturesVisible(true);
    }, 1500);
    
    return () => {
      clearInterval(interval);
      clearTimeout(featuresTimer);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-footer');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const electricalProducts = [
    {
      title: "Single Core Multistrand Cable",
      description: "Flexible copper conductor with PVC insulation, perfect for home wiring and panel connections",
      image: singleCoreCable,
      category: "Single Core",
      applications: ["Panel Wiring", "Control Circuits", "Lighting"],
      sizes: ["1.5 sq mm", "2.5 sq mm", "4 sq mm", "6 sq mm"]
    },
    {
      title: "Twin Core Multistrand Cable", 
      description: "Dual conductor cable with superior insulation for switch wiring and two-way electrical connections",
      image: twinCoreCable,
      category: "Twin Core",
      applications: ["Switch Wiring", "Fan Connections", "Two-way Circuits"],
      sizes: ["1.5 sq mm", "2.5 sq mm", "4 sq mm"]
    },
    {
      title: "Three Core Multistrand Cable",
      description: "Triple conductor design ideal for appliance connections and three-phase home applications",
      image: threeCoreCable,
      category: "Three Core", 
      applications: ["Appliance Wiring", "Motor Connections", "Distribution"],
      sizes: ["2.5 sq mm", "4 sq mm", "6 sq mm", "10 sq mm"]
    },
    {
      title: "Four Core Multistrand Cable",
      description: "Advanced four-conductor cable for complex home automation and smart electrical systems",
      image: fourCoreCable,
      category: "Four Core",
      applications: ["Smart Home", "Automation", "Complex Circuits"],
      sizes: ["1.5 sq mm", "2.5 sq mm", "4 sq mm", "6 sq mm"]
    }
  ];

  const features = [
    {
      icon: <ElectricBolt sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Superior Conductivity",
      description: "Multi-stranded copper design ensures excellent electrical flow with minimal resistance"
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Safety First",
      description: "ISO certified with premium insulation materials for maximum safety and reliability"
    },
    {
      icon: <Settings sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Easy Installation", 
      description: "Flexible design makes installation in tight spaces and complex layouts effortless"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Durable Performance",
      description: "Built to last with superior materials that resist heat, moisture, and corrosion"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % electricalProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + electricalProducts.length) % electricalProducts.length);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '100vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}15 0%, 
            ${theme.palette.secondary.main}10 50%, 
            ${theme.palette.primary.light}15 100%)`,
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 0 }
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${HomeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            display: 'block',
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.5))',
              zIndex: 1
            }
          }}
        />

        {/* Hero Image - Only visible on desktop */}
        <Slide direction="left" in={heroVisible} timeout={1200}>
          <Box
            sx={{
              position: 'absolute',
              top: { md: '80px' },
              right: { md: '60px' },
              width: { md: '400px', lg: '500px' },
              height: { md: '320px', lg: '400px' },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              zIndex: 2,
              display: { xs: 'none', md: 'block' }, // Hidden on mobile, shown on medium and larger screens
              visibility: { xs: 'hidden', md: 'visible' } // Additional visibility control
            }}
          >
            <Box
              component="img"
              src={HomeImage}
              alt="ReydarIndia Electrical Cables"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: { xs: 'none', md: 'block' } // Also hide the image itself on mobile
              }}
            />
          </Box>
        </Slide>
        
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8} lg={7}>
              <Fade in={heroVisible} timeout={1000}>
                <Box sx={{
                  position: 'relative',
                  zIndex: 2,
                  backdropFilter: 'blur(8px)',
                  borderRadius: { xs: 2, md: 0 },
                  p: { xs: 3, md: 0 },
                  bgcolor: { xs: 'rgba(255,255,255,0.7)', md: 'transparent' }
                }}>
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
                      mb: 3,
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      lineHeight: 1.2
                    }}
                  >
                    Reydar
                  </Typography>
                  <Typography
                    variant="h3"
                    color="text.primary"
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
                      mb: 2
                    }}
                  >
                  Multistrain Home Electrical Cables
                  </Typography>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    paragraph
                    sx={{ 
                      mb: 4, 
                      lineHeight: 1.6, 
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      maxWidth: '600px'
                    }}
                  >
                    Efficient, Durable, and Versatile Electrical Solutions. Premium quality multistrand cables 
                    designed for maximum performance, safety, and easy installation in your home.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={scrollToContact}
                      startIcon={<Cable />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      View Products
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={scrollToContact}
                      sx={{ 
                        px: 4, 
                        py: 1.5, 
                        fontSize: '1.1rem',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Get Quote
                    </Button>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    <Chip 
                      icon={<CheckCircle />} 
                      label="ISO Certified" 
                      variant="outlined" 
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    />
                    <Chip 
                      icon={<CheckCircle />} 
                      label="2+ Years Trusted" 
                      variant="outlined" 
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    />
                    <Chip 
                      icon={<CheckCircle />} 
                      label="Premium Quality" 
                      variant="outlined" 
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Product Showcase Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Our Cable Variants
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: '600px', mx: 'auto' }}
          >
            Discover our complete range of multistrand electrical cables designed for every home application
          </Typography>
        </Box>
        
        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto', mb: 6 }}>
          <Card 
            sx={{ 
              position: 'relative', 
              overflow: 'hidden',
              height: { xs: 400, md: 500 },
              borderRadius: 4
            }}
          >
            <CardMedia
              component="img"
              image={electricalProducts[currentSlide].image}
              alt={electricalProducts[currentSlide].title}
              sx={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                backgroundColor: 'grey.100'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                color: 'white',
                p: { xs: 3, md: 4 }
              }}
            >
              <Chip 
                label={electricalProducts[currentSlide].category} 
                sx={{ 
                  mb: 2, 
                  bgcolor: 'secondary.main', 
                  color: 'white',
                  fontWeight: 600
                }} 
              />
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                {electricalProducts[currentSlide].title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  mb: 2,
                  opacity: 0.9
                }}
              >
                {electricalProducts[currentSlide].description}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mr: 1 }}>
                  Applications:
                </Typography>
                {electricalProducts[currentSlide].applications.map((app, index) => (
                  <Chip 
                    key={index}
                    label={app} 
                    size="small" 
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                ))}
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mr: 1 }}>
                  Available Sizes:
                </Typography>
                {electricalProducts[currentSlide].sizes.map((size, index) => (
                  <Chip 
                    key={index}
                    label={size} 
                    size="small" 
                    variant="outlined"
                    sx={{ borderColor: 'white', color: 'white' }}
                  />
                ))}
              </Box>
            </Box>
            
            {/* Navigation Arrows */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                left: { xs: 12, md: 20 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.9)',
                color: 'primary.main',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,1)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                right: { xs: 12, md: 20 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.9)',
                color: 'primary.main',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,1)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Card>
          
          {/* Slide Indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
            {electricalProducts.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: currentSlide === index ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Why Choose ReydarIndia Cables Section */}
        <Box 
          sx={{ 
            mb: 8, 
            py: 8,
            background: `linear-gradient(135deg, 
              ${theme.palette.grey[50]} 0%, 
              ${theme.palette.primary.main}08 50%, 
              ${theme.palette.secondary.main}05 100%)`,
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden'
          }} 
          className="why-choose-cards"
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}10 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}08 0%, transparent 50%)
              `,
              zIndex: 0
            }}
          />
          
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Fade in={featuresVisible} timeout={1000}>
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold', 
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.75rem' }
                  }}
                >
                  Why Choose Multistrain Cables?
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    maxWidth: '600px',
                    mx: 'auto',
                    fontWeight: 400
                  }}
                >
                  Experience the perfect blend of innovation, reliability, and performance
                </Typography>
              </Box>
            </Fade>
            
            <Grid 
              container 
              spacing={4} 
              justifyContent="center"
              sx={{
                maxWidth: '1000px',
                mx: 'auto'
              }}
            >
              {features.map((feature, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={6}
                  lg={6}
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Grow
                    in={featuresVisible}
                    timeout={1000 + (index * 300)}
                    style={{ transformOrigin: 'center' }}
                  >
                    <Card
                      sx={{
                        p: 5,
                        textAlign: 'center',
                        height: '100%',
                        maxWidth: '400px',
                        width: '100%',
                        minHeight: '320px',
                        border: 'none',
                        borderRadius: 4,
                        background: `linear-gradient(135deg, 
                          rgba(255, 255, 255, 0.9) 0%, 
                          rgba(255, 255, 255, 0.7) 100%)`,
                        backdropFilter: 'blur(10px)',
                        boxShadow: `
                          0 8px 32px rgba(0, 0, 0, 0.1),
                          0 4px 16px rgba(0, 0, 0, 0.05),
                          inset 0 1px 0 rgba(255, 255, 255, 0.5)
                        `,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, 
                            ${theme.palette.primary.main}15 0%, 
                            ${theme.palette.secondary.main}10 100%)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          zIndex: 0
                        },
                        '&:hover': {
                          transform: 'translateY(-12px) scale(1.02)',
                          boxShadow: `
                            0 20px 60px rgba(0, 0, 0, 0.15),
                            0 10px 30px rgba(0, 0, 0, 0.1),
                            0 0 0 1px ${theme.palette.primary.main}30
                          `,
                          '&::before': {
                            opacity: 1
                          },
                          '& .feature-icon': {
                            transform: 'scale(1.2) rotate(10deg)',
                            color: theme.palette.secondary.main
                          },
                          '& .feature-title': {
                            color: theme.palette.primary.main
                          }
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box 
                          sx={{ 
                            mb: 4, 
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
                                ${theme.palette.primary.main}20 0%, 
                                ${theme.palette.secondary.main}15 100%)`,
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
                                opacity: 0.3
                              }
                            }}
                          >
                            <Box
                              className="feature-icon"
                              sx={{
                                fontSize: 48,
                                color: 'primary.main',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                              }}
                            >
                              {feature.icon}
                            </Box>
                          </Box>
                        </Box>
                        
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography 
                            className="feature-title"
                            variant="h5" 
                            gutterBottom 
                            sx={{ 
                              fontWeight: 700,
                              fontSize: '1.4rem',
                              mb: 3,
                              transition: 'color 0.3s ease',
                              color: 'text.primary'
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            color="text.secondary"
                            sx={{
                              fontSize: '1.05rem',
                              lineHeight: 1.7,
                              fontWeight: 400
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
            
            {/* Decorative Elements */}
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}15)`,
                filter: 'blur(40px)',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 0
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '20%',
                right: '5%',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `linear-gradient(45deg, ${theme.palette.secondary.main}15, ${theme.palette.primary.main}20)`,
                filter: 'blur(30px)',
                animation: 'float 8s ease-in-out infinite reverse',
                zIndex: 0
              }}
            />
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
            color: 'white',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box
            component="img"
            src={reydarLogo}
            alt="ReydarIndia Logo"
            sx={{
              height: { xs: '40px', md: '60px' },
              width: 'auto',
              mb: 3,
              filter: 'brightness(0) invert(1)'
            }}
          />
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}
          >
            Ready to Upgrade Your Home's Electrical System?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Get premium quality multistrand cables that ensure safety, reliability, and easy installation for all your electrical needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            Get Quote Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
