import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Slide
} from '@mui/material';
import {
  Timeline,
  Verified,
  TrendingUp,
  Nature,
  Groups,
  Lightbulb,
  Security,
  Star
} from '@mui/icons-material';
import reydarLogo from '../assets/Reydar.png';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Verified sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: "Quality Assurance",
      description: "Our cables undergo rigorous testing to ensure they meet the highest performance standards, providing you with peace of mind in every connection."
    },
    {
      icon: <Groups sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: "Customer-Centric Approach", 
      description: "We value our customers and strive to provide exceptional service, ensuring that your experience with us is smooth and satisfying from start to finish."
    },
    {
      icon: <Lightbulb sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: "Innovation",
      description: "We are constantly exploring new technologies and designs to stay ahead in the fast-evolving world of connectivity, ensuring you have access to the latest solutions."
    },
    {
      icon: <Nature sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: "Sustainability",
      description: "Committed to the environment, we take steps to minimize our ecological footprint by using sustainable materials and practices in our manufacturing processes."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Reydar Founded",
      description: "Started our journey with a vision to provide high-quality multistrain home cables to the market."
    },
    {
      year: "2023-24",
      title: "Product Development",
      description: "Focused on engineering superior cable designs with enhanced flexibility and durability using cutting-edge technology."
    },
    {
      year: "2024-25",
      title: "Market Expansion",
      description: "Established ourselves as a reputable name in the home cable industry with a growing customer base."
    },
    {
      year: "Future",
      title: "Continued Innovation",
      description: "Committed to expanding our product offerings and enhancing connectivity solutions for modern homes."
    }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}10 0%, 
            ${theme.palette.secondary.main}08 50%, 
            ${theme.palette.primary.light}10 100%)`,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              {/* <Box
                component="img"
                src={reydarLogo}
                alt="ReydarIndia Logo"
                sx={{
                  height: { xs: '60px', md: '80px' },
                  width: 'auto',
                  mb: 4
                }}
              /> */}
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
                About Reydar
              </Typography>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  maxWidth: '800px',
                  mx: 'auto'
                }}
              >
                Your trusted source for high-quality multistrain home cables
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Welcome Section */}
        <Slide direction="up" in={isVisible} timeout={1200}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              mb: 8,
              background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #ffffff 100%)`,
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 'bold', 
                color: 'primary.main',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                mb: 3
              }}
            >
              Welcome to Reydar
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ 
                lineHeight: 1.8, 
                color: 'text.primary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 3
              }}
            >
              Founded in 2023, we are a dynamic and innovative company committed to delivering exceptional 
              products that meet the needs of our customers. At Reydar, we believe that connectivity is at 
              the heart of modern living, and we strive to keep you connected in the most efficient and 
              reliable way possible.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip 
                icon={<Timeline />} 
                label="Founded 2023" 
                color="primary" 
                variant="outlined"
                sx={{ fontWeight: 600 }}
              />
              <Chip 
                icon={<TrendingUp />} 
                label="Rapidly Growing" 
                color="secondary" 
                variant="outlined"
                sx={{ fontWeight: 600 }}
              />
              <Chip 
                icon={<Star />} 
                label="Customer Focused" 
                color="primary" 
                variant="outlined"
                sx={{ fontWeight: 600 }}
              />
            </Box>
          </Paper>
        </Slide>

        {/* Our Journey Section */}
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
            Our Journey
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
              borderRadius: 4,
              mb: 4
            }}
          >
            <Typography
              variant="body1"
              paragraph
              sx={{ 
                lineHeight: 1.8, 
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: 'text.primary'
              }}
            >
              Starting from humble beginnings, Reydar has rapidly grown into a reputable name in the home 
              cable industry. With two years of dedicated service, we have established ourselves as a 
              forward-thinking company with a focus on quality, performance, and customer satisfaction. 
              Our journey has been fueled by a passion for technology and a commitment to understanding 
              the needs of our diverse clientele.
            </Typography>
          </Paper>

          {/* Timeline */}
          <Grid 
            container 
            spacing={4} 
            sx={{ justifyContent: 'center' }}
            className="timeline-cards"
          >
            {timeline.map((item, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: '280px',
                    maxWidth: '320px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${theme.palette.primary.main}15, 0 10px 30px rgba(0, 0, 0, 0.1)`,
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: 4, 
                      textAlign: 'center',
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h4"
                        sx={{ 
                          fontWeight: 'bold', 
                          background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 90%)`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 2,
                          fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                      >
                        {item.year}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ 
                          fontWeight: 600, 
                          color: 'primary.main',
                          fontSize: '1.2rem',
                          mb: 2
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.7,
                        fontSize: '1rem',
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Products Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            mb: 8,
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #ffffff 100%)`,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              mb: 3
            }}
          >
            Our Products
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ 
              lineHeight: 1.8, 
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: 'text.primary'
            }}
          >
            We specialize in a wide range of multistrain home cables designed to provide superior 
            flexibility and durability, ensuring seamless connectivity for all your electronic devices. 
            Our cables are engineered to deliver optimal performance, whether you're streaming your 
            favorite shows, powering your home office, or connecting your smart devices. Each product 
            is crafted with precision, using the finest materials and cutting-edge technology to 
            guarantee reliability.
          </Typography>
        </Paper>

        {/* Our Mission Section */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            mb: 8,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
            color: 'white',
            borderRadius: 4,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              mb: 3
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              lineHeight: 1.8, 
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.95,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            At Reydar, our mission is simple: to provide high-quality, innovative solutions that 
            enhance the way you connect and communicate at home. We pride ourselves on our commitment 
            to sustainability and excellence, ensuring that our products not only meet industry 
            standards but exceed them. Our goal is to make connectivity effortless and accessible 
            for everyone.
          </Typography>
        </Box>

        {/* Why Choose Us Section */}
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
            Why Choose Us?
          </Typography>
          <Grid 
            container 
            spacing={4}
            className="values-cards"
            sx={{
              justifyContent: 'center',
              maxWidth: '1200px',
              mx: 'auto'
            }}
          >
            {values.map((value, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
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
                    minHeight: '220px',
                    maxWidth: '480px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.01)',
                      boxShadow: `0 16px 50px ${theme.palette.primary.main}20, 0 8px 25px rgba(0, 0, 0, 0.1)`,
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, height: '100%' }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 3,
                        height: '100%'
                      }}
                    >
                      <Box 
                        sx={{ 
                          flexShrink: 0,
                          p: 2,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {React.cloneElement(value.icon, {
                          sx: { 
                            fontSize: 40, 
                            color: 'primary.main',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                          }
                        })}
                      </Box>
                      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{ 
                            fontWeight: 600, 
                            color: 'primary.main',
                            fontSize: '1.3rem',
                            mb: 2
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ 
                            lineHeight: 1.7,
                            fontSize: '1rem'
                          }}
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Join Us Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}10 0%, ${theme.palette.primary.main}10 100%)`,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              mb: 3
            }}
          >
            Join Us on Our Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              lineHeight: 1.8, 
              color: 'text.primary',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            As we look to the future, Reydar is excited to continue expanding our product offerings 
            and enhancing the ways you connect your home. We invite you to explore our range of 
            multistrain home cables and experience the difference in quality and performance for yourself. 
            Thank you for being a part of our journey—together, we can embrace a world of connectivity.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
