import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@mui/material';
import {
  School,
  TrendingUp,
  People,
  Assessment,
  Star,
  CheckCircle,
  Lightbulb,
  HandshakeOutlined,
  Timeline,
  SupportAgent
} from '@mui/icons-material';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "Deep Industry Expertise",
      icon: <School sx={{ fontSize: 50, color: 'white' }} />,
      description: "10+ years of specialized experience in chemical industry sales and marketing",
      details: [
        "Comprehensive understanding of chemical market dynamics",
        "Technical knowledge of chemical products and applications",
        "Regulatory compliance expertise",
        "Industry-specific sales methodologies"
      ],
      bgColor: "#1976d2"
    },
    {
      title: "Proven Track Record",
      icon: <TrendingUp sx={{ fontSize: 50, color: 'white' }} />,
      description: "Consistent results in driving revenue growth and market expansion for chemical companies",
      details: [
        "Average 30% revenue increase for clients",
        "Successful market entry strategies",
        "Long-term client relationships",
        "Measurable ROI on consulting investments"
      ],
      bgColor: "#388e3c"
    },
    {
      title: "Customized Approach",
      icon: <Lightbulb sx={{ fontSize: 50, color: 'white' }} />,
      description: "Tailored solutions designed specifically for your unique business challenges and goals",
      details: [
        "In-depth business analysis and assessment",
        "Custom strategy development",
        "Flexible implementation approaches",
        "Scalable solutions for growth"
      ],
      bgColor: "#f57c00"
    },
    {
      title: "Strong Network",
      icon: <People sx={{ fontSize: 50, color: 'white' }} />,
      description: "Extensive connections across the chemical industry ecosystem",
      details: [
        "Key relationships with industry leaders",
        "Access to potential partners and customers",
        "Industry association memberships",
        "Global network of chemical professionals"
      ],
      bgColor: "#7b1fa2"
    },
    {
      title: "Data-Driven Results",
      icon: <Assessment sx={{ fontSize: 50, color: 'white' }} />,
      description: "Analytics-based approach ensuring measurable outcomes and continuous improvement",
      details: [
        "Advanced market research and analysis",
        "KPI tracking and performance metrics",
        "ROI measurement and reporting",
        "Continuous optimization based on data insights"
      ],
      bgColor: "#d32f2f"
    }
  ];

  const clientTestimonials = [
    {
      text: "Reydar's expertise helped us expand into new chemical markets with confidence. Their strategic approach delivered exceptional results.",
      author: "Chemical Industry Executive",
      company: "Leading Specialty Chemicals Company"
    },
    {
      text: "The team's deep understanding of regulatory requirements and market dynamics was invaluable for our product launch.",
      author: "Sales Director",
      company: "International Chemical Manufacturer"
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
          Why Choose Reydar?
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Your trusted partner for chemical industry growth with proven expertise and results
        </Typography>
      </Box>

      {/* Key Advantages */}
      <Grid container spacing={4} sx={{ mb: 8, alignItems: 'stretch', justifyContent: 'center' }}>
        {advantages.map((advantage, index) => (
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
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box 
                sx={{ 
                  p: 3, 
                  bgcolor: advantage.bgColor,
                  color: 'white',
                  textAlign: 'center',
                  minHeight: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    width: 80, 
                    height: 80, 
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {advantage.icon}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                  {advantage.title}
                </Typography>
              </Box>
              <CardContent sx={{ 
                p: 3, 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6, minHeight: '60px' }}>
                    {advantage.description}
                  </Typography>
                </Box>
                <List dense sx={{ mt: 'auto' }}>
                  {advantage.details.map((detail, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.25 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={detail} 
                        sx={{ 
                          '& .MuiListItemText-primary': { 
                            fontSize: '0.85rem',
                            lineHeight: 1.4
                          } 
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Process Section */}
      <Paper elevation={3} sx={{ p: 6, mb: 6, bgcolor: 'grey.50' }}>
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}
        >
          Our Proven Process
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '200px'
            }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80, mx: 'auto', mb: 2 }}>
                <Assessment sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, minHeight: '50px', display: 'flex', alignItems: 'center' }}>
                1. Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, textAlign: 'center' }}>
                Comprehensive assessment of your business and market position
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '200px'
            }}>
              <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mx: 'auto', mb: 2 }}>
                <Timeline sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, minHeight: '50px', display: 'flex', alignItems: 'center' }}>
                2. Strategy
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, textAlign: 'center' }}>
                Custom strategy development aligned with your goals
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '200px'
            }}>
              <Avatar sx={{ bgcolor: 'success.main', width: 80, height: 80, mx: 'auto', mb: 2 }}>
                <HandshakeOutlined sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, minHeight: '50px', display: 'flex', alignItems: 'center' }}>
                3. Execution
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, textAlign: 'center' }}>
                Collaborative implementation with your team ,enhance your capabilities
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '200px'
            }}>
              <Avatar sx={{ bgcolor: 'warning.main', width: 80, height: 80, mx: 'auto', mb: 2 }}>
                <SupportAgent sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, minHeight: '50px', display: 'flex', alignItems: 'center' }}>
                4. Support
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, textAlign: 'center' }}>
                Ongoing support and optimization for sustained growth
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center' }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6, 
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            color: 'white'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Experience the Reydar Advantage?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join successful chemical companies who trust us with their growth strategies
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                📞 +91-9171690029
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ✉️ contact@reydar.in
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                📍 Indore, India
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
