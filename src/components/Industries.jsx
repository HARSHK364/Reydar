import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Paper
} from '@mui/material';
import {
  Science,
  Agriculture,
  LocalGasStation,
  Colorize,
  CleaningServices,
  Water
} from '@mui/icons-material';

const Industries = () => {
  const industries = [
    {
      title: "Drilling Chemicals",
      icon: <LocalGasStation sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Specialized chemicals for oil & gas drilling operations, including drilling fluids, completion fluids, and production chemicals.",
      applications: ["Drilling Fluids", "Completion Fluids", "Stimulation Chemicals", "Production Chemicals"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop"
    },
    {
      title: "Specialty Chemicals",
      icon: <Science sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "High-performance chemicals designed for specific industrial applications with unique properties and functions.",
      applications: ["Catalysts", "Additives", "Surfactants", "Performance Materials"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop"
    },
    {
      title: "Agrochemicals",
      icon: <Agriculture sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Crop protection and agricultural enhancement chemicals including pesticides, fertilizers, and plant growth regulators.",
      applications: ["Pesticides", "Fertilizers", "Growth Regulators", "Soil Conditioners"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop"
    },
    {
      title: "Paints & Coatings",
      icon: <Colorize sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Protective and decorative coatings for industrial, automotive, architectural, and marine applications.",
      applications: ["Industrial Coatings", "Automotive Paints", "Marine Coatings", "Architectural Finishes"],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=250&fit=crop"
    },
    {
      title: "Cleaning Chemicals",
      icon: <CleaningServices sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Industrial and commercial cleaning solutions for various sectors including manufacturing, hospitality, and healthcare.",
      applications: ["Industrial Cleaners", "Sanitizers", "Degreasers", "Maintenance Chemicals"],
      image: "/src/assets/CleaningAgent.png"
    },
    {
      title: "Water Treatment",
      icon: <Water sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Chemical solutions for water purification, treatment, and management in municipal and industrial applications.",
      applications: ["Coagulants", "Flocculants", "Disinfectants", "Corrosion Inhibitors"],
      image: "/src/assets/WaterTreatement.png"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
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
          Industries Served
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          We serve diverse chemical industry segments with specialized knowledge and tailored solutions
        </Typography>
      </Box>

      {/* Industries Grid */}
      <Grid container spacing={4} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
        {industries.map((industry, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
              sx={{ 
                height: '100%',
                width: '100%',
                maxWidth: '400px',
                minHeight: '550px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={industry.image}
                alt={industry.title}
                sx={{ 
                  objectFit: 'cover',
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1
                }}
              />
              <CardContent sx={{ 
                p: 3, 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, minHeight: '60px' }}>
                    {industry.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 2, fontWeight: 'bold', lineHeight: 1.2 }}>
                      {industry.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, minHeight: '90px' }}>
                    {industry.description}
                  </Typography>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                    Key Applications:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: '80px', alignContent: 'flex-start' }}>
                    {industry.applications.map((app, idx) => (
                      <Chip 
                        key={idx} 
                        label={app} 
                        variant="outlined"
                        size="small"
                        sx={{ 
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontSize: '0.75rem',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Statistics Section */}
      <Box sx={{ mt: 8 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6,
            background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Our Industry Impact
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                50+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Chemical Companies Served
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                15+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Industry Segments
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                10+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Years of Experience
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6, 
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            color: 'white'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Need Expertise in Your Chemical Sector?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Our industry-specific knowledge can help accelerate your business growth
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              📞 +91-9171690029
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              ✉️ contact@reydar.in
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Industries;
