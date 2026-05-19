import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Chip,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import {
  Cable,
  CheckCircle,
  Build,
  Security,
  Speed,
  ElectricBolt,
  Home,
  Settings
} from '@mui/icons-material';

// Import cable images
import singleCoreImage from '../assets/single-core-cable.jpg';
import twinCoreImage from '../assets/twin-core-cable.jpg';
import threeCoreImage from '../assets/three-core-cable.jpg';
import fourCoreImage from '../assets/four-core-cable.jpg';

const Products = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-footer');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productCategories = [
    {
      title: "Single Core Multistrand",
      description: "Flexible copper conductor with PVC insulation",
      image: singleCoreImage,
      applications: ["Panel Wiring", "Control Circuits", "Lighting Systems"],
      features: ["Superior Flexibility", "Easy Installation", "Heat Resistant"],
      specifications: [
        { size: "1.5 sq mm", current: "16A", voltage: "1100V", strands: "30/0.25", resistance: "12.1 Ω/km" },
        { size: "2.5 sq mm", current: "24A", voltage: "1100V", strands: "50/0.25", resistance: "7.41 Ω/km" },
        { size: "4 sq mm", current: "32A", voltage: "1100V", strands: "56/0.30", resistance: "4.61 Ω/km" },
        { size: "6 sq mm", current: "41A", voltage: "1100V", strands: "84/0.30", resistance: "3.08 Ω/km" },
        { size: "10 sq mm", current: "57A", voltage: "1100V", strands: "80/0.40", resistance: "1.83 Ω/km" }
      ]
    },
    {
      title: "Twin Core Multistrand",
      description: "Dual conductor cable with superior insulation",
      image: twinCoreImage,
      applications: ["Switch Wiring", "Fan Connections", "Two-way Circuits"],
      features: ["Dual Core Design", "Reduced Installation Time", "Enhanced Safety"],
      specifications: [
        { size: "1.5 sq mm", current: "16A", voltage: "1100V", strands: "30/0.25", resistance: "12.1 Ω/km" },
        { size: "2.5 sq mm", current: "24A", voltage: "1100V", strands: "50/0.25", resistance: "7.41 Ω/km" },
        { size: "4 sq mm", current: "32A", voltage: "1100V", strands: "56/0.30", resistance: "4.61 Ω/km" },
        { size: "6 sq mm", current: "41A", voltage: "1100V", strands: "84/0.30", resistance: "3.08 Ω/km" }
      ]
    },
    {
      title: "Three Core Multistrand",
      description: "Triple conductor design for appliance connections",
      image: threeCoreImage,
      applications: ["Appliance Wiring", "Motor Connections", "Distribution"],
      features: ["Three Phase Compatible", "Heavy Duty", "Professional Grade"],
      specifications: [
        { size: "2.5 sq mm", current: "24A", voltage: "1100V", strands: "50/0.25", resistance: "7.41 Ω/km" },
        { size: "4 sq mm", current: "32A", voltage: "1100V", strands: "56/0.30", resistance: "4.61 Ω/km" },
        { size: "6 sq mm", current: "41A", voltage: "1100V", strands: "84/0.30", resistance: "3.08 Ω/km" },
        { size: "10 sq mm", current: "57A", voltage: "1100V", strands: "80/0.40", resistance: "1.83 Ω/km" }
      ]
    },
    {
      title: "Four Core Multistrand",
      description: "Advanced four-conductor cable for smart systems",
      image: fourCoreImage,
      applications: ["Smart Home", "Automation", "Complex Circuits"],
      features: ["Smart Compatible", "Future Ready", "Advanced Design"],
      specifications: [
        { size: "1.5 sq mm", current: "16A", voltage: "1100V", strands: "30/0.25", resistance: "12.1 Ω/km" },
        { size: "2.5 sq mm", current: "24A", voltage: "1100V", strands: "50/0.25", resistance: "7.41 Ω/km" },
        { size: "4 sq mm", current: "32A", voltage: "1100V", strands: "56/0.30", resistance: "4.61 Ω/km" },
        { size: "6 sq mm", current: "41A", voltage: "1100V", strands: "84/0.30", resistance: "3.08 Ω/km" }
      ]
    }
  ];

  const generalFeatures = [
    {
      icon: <ElectricBolt sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Multi-Stranded Conductors",
      description: "Multiple thin strands of copper wire offering enhanced flexibility and conductivity compared to single-strand cables"
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Superior Insulation",
      description: "High-quality materials providing excellent protection against heat, moisture, and corrosion"
    },
    {
      icon: <Build sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Easy Installation",
      description: "Flexibility makes them easy to handle and install in tight spaces, ideal for home wiring projects"
    },
    {
      icon: <Settings sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Versatile Applications",
      description: "Suitable for lighting systems, appliances, HVAC systems, and both low voltage and standard home electrical systems"
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Compliance and Safety",
      description: "All cables meet rigorous industry standards (ISO) with strict testing to guarantee performance and safety"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Enhanced Performance",
      description: "Improved electrical conductivity allows for less energy loss, making electrical systems more efficient"
    }
  ];

  const benefits = [
    {
      title: "Flexibility",
      description: "Ideal for complex layouts that require bending and routing around obstacles",
      color: "primary"
    },
    {
      title: "Reduced Breakage",
      description: "Less prone to breaking or crumbling, ensuring longevity and dependability in home installations",
      color: "secondary"
    },
    {
      title: "Improved Performance",
      description: "Enhanced electrical conductivity allows for less energy loss, making your electrical systems more efficient",
      color: "success"
    },
    {
      title: "Cost Effective",
      description: "Long-lasting durability and reduced maintenance requirements provide excellent value for money over time",
      color: "warning"
    }
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
              Product Specifications
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
              Multistrain Home Electrical Cable
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
              Efficient, Durable, and Versatile Electrical Solutions for your home
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Product Features Section */}
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
            Product Features
          </Typography>
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              display: 'flex', 
              alignItems: 'stretch',
              '& .MuiGrid-item': {
                display: 'flex !important',
                flexBasis: { xs: '100%', md: '50%' },
                maxWidth: { xs: '100%', md: '50%' },
                width: { xs: '100%', md: '50%' }
              }
            }}
          >
            {generalFeatures.map((feature, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                key={index} 
                sx={{ 
                  display: 'flex !important',
                  width: '100% !important',
                  flex: '1 1 auto'
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: '200px',
                    width: '100% !important',
                    maxWidth: '100% !important',
                    minWidth: '0 !important',
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 30px ${theme.palette.primary.main}20`
                    }
                  }}
                >
                  <CardContent sx={{ 
                    p: 0, 
                    flexGrow: 1, 
                    display: 'flex', 
                    width: '100%',
                    height: '100%'
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 3, 
                      height: '100%',
                      width: '100%'
                    }}>
                      <Box sx={{ 
                        flexShrink: 0, 
                        pt: 1, 
                        width: '48px',
                        minWidth: '48px',
                        maxWidth: '48px'
                      }}>
                        {feature.icon}
                      </Box>
                      <Box sx={{ 
                        flex: '1 1 auto',
                        display: 'flex', 
                        flexDirection: 'column',
                        minWidth: 0,
                        width: 'calc(100% - 60px)' // Account for icon width + gap
                      }}>
                        <Typography
                          variant="h6"
                          sx={{ 
                            fontWeight: 600, 
                            color: 'primary.main',
                            mb: 2,
                            fontSize: '1.1rem',
                            height: '56px',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            wordBreak: 'break-word'
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ 
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            wordBreak: 'break-word',
                            flex: 1
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technical Specifications Section */}
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
            Technical Specifications
          </Typography>
          
          {/* Product Category Tabs */}
          <Paper elevation={0} sx={{ mb: 4, border: '1px solid', borderColor: 'divider' }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                '& .MuiTab-root': {
                  minWidth: { xs: 120, md: 200 },
                  fontWeight: 600
                }
              }}
            >
              {productCategories.map((category, index) => (
                <Tab
                  key={index}
                  label={category.title}
                  icon={<Cable />}
                />
              ))}
            </Tabs>
            
            <Box sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {productCategories[selectedTab].title}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                    {productCategories[selectedTab].description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                    Applications:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {productCategories[selectedTab].applications.map((app, index) => (
                      <Chip 
                        key={index}
                        label={app} 
                        color="primary" 
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    ))}
                  </Box>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Key Features:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {productCategories[selectedTab].features.map((feature, index) => (
                      <Chip 
                        key={index}
                        label={feature} 
                        color="secondary" 
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      minHeight: '300px'
                    }}
                  >
                    <Box
                      component="img"
                      src={productCategories[selectedTab].image}
                      alt={productCategories[selectedTab].title}
                      sx={{
                        width: '100%',
                        maxWidth: '400px',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: 3,
                        boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease',
                        border: '3px solid',
                        borderColor: 'primary.light',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 16px 40px rgba(0,0,0,0.2)'
                        }
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              
              {/* Specifications Table */}
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ fontWeight: 600, mt: 4, mb: 2 }}
              >
                Detailed Specifications:
              </Typography>
              <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'primary.main' }}>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Size</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Current Rating</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Voltage</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Stranding</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Resistance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productCategories[selectedTab].specifications.map((spec, index) => (
                      <TableRow key={index} sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                        <TableCell sx={{ fontWeight: 600 }}>{spec.size}</TableCell>
                        <TableCell>{spec.current}</TableCell>
                        <TableCell>{spec.voltage}</TableCell>
                        <TableCell>{spec.strands}</TableCell>
                        <TableCell>{spec.resistance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Box>

        {/* Product Gallery Section */}
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
            Product Gallery
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
          >
            Explore our complete range of multistrand electrical cables
          </Typography>
          
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              display: 'flex', 
              alignItems: 'stretch',
              justifyContent: 'center',
              '& .MuiGrid-item': {
                display: 'flex !important',
                flexBasis: { xs: '100%', sm: '50%', md: '25%', lg: '25%' },
                maxWidth: { xs: '100%', sm: '50%', md: '25%', lg: '25%' },
                width: { xs: '100%', sm: '50%', md: '25%', lg: '25%' }
              }
            }}
          >
            {productCategories.map((product, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                lg={3} 
                key={index} 
                sx={{ 
                  display: 'flex !important',
                  width: '100% !important',
                  flex: '1 1 auto'
                }}
              >
                <Card
                  sx={{
                    height: '440px',
                    width: '100% !important',
                    maxWidth: '100% !important',
                    minWidth: '0 !important',
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: selectedTab === index ? '2px solid' : '1px solid',
                    borderColor: selectedTab === index ? 'primary.main' : 'grey.300',
                    boxSizing: 'border-box',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      borderColor: 'primary.main'
                    }
                  }}
                  onClick={() => setSelectedTab(index)}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: '220px', // Increased image height
                      overflow: 'hidden',
                      flexShrink: 0
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    {selectedTab === index && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          bgcolor: 'primary.main',
                          opacity: 0.15
                        }}
                      />
                    )}
                    {selectedTab === index && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          color: 'white',
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          fontSize: '0.875rem',
                          fontWeight: 600
                        }}
                      >
                      </Box>
                    )}
                  </Box>
                  <CardContent 
                    sx={{ 
                      p: 3, 
                      flex: '1 1 auto',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '220px', // Fixed content height
                      width: '100%'
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ 
                        fontWeight: 600,
                        color: selectedTab === index ? 'primary.main' : 'text.primary',
                        fontSize: '1.05rem',
                        mb: 1,
                        height: '52px', // Fixed title height for 2 lines max
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        wordBreak: 'break-word',
                        lineHeight: 1.3
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ 
                        mb: 2,
                        height: '72px', // Fixed description height
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.4,
                        fontSize: '0.875rem',
                        wordBreak: 'break-word'
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        gap: 1, 
                        flexWrap: 'wrap',
                        mt: 'auto', // Push to bottom
                        height: '64px', // Fixed feature chips height
                        alignContent: 'flex-start',
                        overflow: 'hidden'
                      }}
                    >
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          color={selectedTab === index ? 'primary' : 'default'}
                          variant="outlined"
                          sx={{ 
                            fontSize: '0.7rem',
                            height: '26px',
                            maxWidth: '100%',
                            '& .MuiChip-label': {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Choose Multistrain Section */}
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
            Why Choose Multistrain Home Electrical Cable?
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Choosing multistrain cable over traditional solid wire provides added benefits that can streamline your electrical projects:
          </Typography>
          
          <Grid 
            container 
            spacing={4} // Increased spacing back to 4 for larger cards
            sx={{ 
              display: 'flex', 
              alignItems: 'stretch',
              justifyContent: 'center',
              maxWidth: '1100px', // Adjusted max width to accommodate 350px cards + spacing
              mx: 'auto', // Center the grid
              '& .MuiGrid-item': {
                display: 'flex !important',
                flexBasis: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                maxWidth: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' }
              }
            }}
          >
            {benefits.map((benefit, index) => (
              <Grid 
                item 
                xs={12} 
                sm={12} 
                md={6} 
                lg={6} 
                key={index} 
                sx={{ 
                  display: 'flex !important',
                  flex: '1 1 auto'
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4, // Increased padding back to 4 for larger cards
                    height: '300px', // Increased height for better proportions
                    width: '100%',
                    maxWidth: '350px !important', // Set max width to 350px as requested
                    minWidth: '300px', // Set minimum width for consistency
                    mx: 'auto', // Center the card within grid item
                    flex: '1 1 auto',
                    textAlign: 'center',
                    border: '2px solid',
                    borderColor: `${benefit.color}.main`,
                    borderRadius: 3, // Increased border radius for larger cards
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    '&:hover': {
                      transform: 'translateY(-8px)', // Increased hover movement for larger cards
                      boxShadow: `0 12px 40px ${theme.palette[benefit.color].main}20`
                    }
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{ 
                      fontWeight: 'bold', 
                      color: `${benefit.color}.main`,
                      mb: 2, // Increased margin
                      fontSize: '3rem' // Increased font size for larger cards
                    }}
                  >
                    {index + 1}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ 
                      fontWeight: 600, 
                      color: `${benefit.color}.main`,
                      mb: 2, // Increased margin
                      fontSize: '1.5rem', // Increased font size
                      height: '48px', // Increased fixed title height
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      lineHeight: 1.3
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6,
                      fontSize: '1rem', // Increased font size
                      textAlign: 'center',
                      maxWidth: '280px', // Adjusted for 350px card width
                      mx: 'auto',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 4, // Increased back to 4 lines
                      WebkitBoxOrient: 'vertical',
                      wordBreak: 'break-word'
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
            color: 'white',
            borderRadius: 4
          }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}
          >
            Ready to Order?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              opacity: 0.95,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            Choose Reydar for high-quality multistrain home electrical cables. Browse our selection and order online today to ensure your next project is a success!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            startIcon={<Home />}
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

export default Products;
