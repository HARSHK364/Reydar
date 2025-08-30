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
  Avatar,
  Chip,
  IconButton
} from '@mui/material';
import {
  TrendingUp,
  Campaign,
  Business,
  Star,
  Phone,
  Email,
  LocationOn,
  ArrowBackIos,
  ArrowForwardIos
} from '@mui/icons-material';
import reydarLogo from '../assets/Reydar.png';
import waterTreatmentImg from '../assets/WaterTreatement.png';
import cleaningAgentImg from '../assets/CleaningAgent.png';

const Home = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('contact-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const chemicalProducts = [
    {
      title: "Industrial Catalysts",
      description: "Advanced catalysts for chemical processing and refining",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      category: "Specialty Chemicals"
    },
    {
      title: "Agricultural Fertilizers",
      description: "Premium fertilizers for enhanced crop productivity",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      category: "Agrochemicals"
    },
    {
      title: "Protective Coatings",
      description: "Industrial-grade coatings for equipment protection",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
      category: "Paints & Coatings"
    },
    {
      title: "Water Purification Chemicals",
      description: "Advanced chemicals for water treatment processes",
      image: waterTreatmentImg,
      category: "Water Treatment"
    },
    {
      title: "Industrial Cleaners",
      description: "Professional-grade cleaning solutions for industry",
      image: cleaningAgentImg,
      category: "Cleaning Chemicals"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % chemicalProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % chemicalProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + chemicalProducts.length) % chemicalProducts.length);
  };

  const industries = ["Drilling Chemicals", "Specialty Chemicals", "Agrochemicals", "Paints & Coatings", "Water Treatment", "Cleaning Chemicals"];
  return (
    <Container maxWidth="lg" sx={{ py: 0 }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(66,165,245,0.1) 100%)',
          borderRadius: 4,
          my: 4,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
            alt="Chemical Industry Laboratory"
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.8,
              display: { xs: 'none', md: 'block' }
            }}
          />
        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: { xs: 4, md: 6 } }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3
                }}
              >
                Accelerate Growth in the Chemical Industry
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                Expert sales and marketing consulting for chemical companies. 
                Drive revenue growth, expand market reach, and accelerate business success 
                with our proven industry expertise.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToFooter}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
                    }
                  }}
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                >
                  Learn More
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone color="primary" fontSize="small" />
                  +91-9171690029
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email color="primary" fontSize="small" />
                  contact@reydar.in
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Statistics Section */}
      <Paper elevation={3} sx={{ p: 6, mb: 8, bgcolor: 'grey.50'}}>
        <Grid container spacing={15} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              10+
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Years Experience
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              50+
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Companies Served
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              30%
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Average Revenue Growth
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              100+
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Happy Clients
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Chemical Products Slideshow */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}
        >
          Chemical Products We Deal With
        </Typography>
        
        <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
          <Card sx={{ position: 'relative', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="400"
              image={chemicalProducts[currentSlide].image}
              alt={chemicalProducts[currentSlide].title}
              sx={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white',
                p: 3
              }}
            >
              <Chip 
                label={chemicalProducts[currentSlide].category} 
                sx={{ mb: 2, bgcolor: 'primary.main', color: 'white' }} 
              />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                {chemicalProducts[currentSlide].title}
              </Typography>
              <Typography variant="body1">
                {chemicalProducts[currentSlide].description}
              </Typography>
            </Box>
            
            {/* Navigation Arrows */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Card>
          
          {/* Slide Indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
            {chemicalProducts.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: currentSlide === index ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Industries Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}
        >
          Industries We Serve
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', maxWidth: 800 }}>
            {industries.map((industry, index) => (
              <Chip
                key={index}
                label={industry}
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            From drilling chemicals to specialty applications, we understand your market
          </Typography>
        </Box>
      </Box>

      {/* Testimonial Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 6, 
          mb: 8,
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          "Reydar's expertise helped us expand into new chemical markets with confidence. 
          Their strategic approach delivered exceptional results."
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            <Star />
          </Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Chemical Industry Executive
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Leading Specialty Chemicals Company
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* CTA Section */}
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          mb: 4
        }}
      >
        <img 
          src={reydarLogo} 
          alt="Reydar Logo" 
          style={{ 
            height: '60px', 
            width: 'auto', 
            marginBottom: '16px',
            filter: 'brightness(0) invert(1)' // Make logo white on blue background
          }} 
        />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Transform Your Chemical Business?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Connect with Neeraj Sharma and discover how our proven strategies 
          can accelerate your growth in the chemical industry
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={scrollToFooter}
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: 'grey.100'
            }
          }}
        >
          Schedule Your Free Consultation
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
