import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  TrendingUp,
  Campaign,
  Business,
  Gavel,
  CheckCircle
} from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      title: "Sales Strategy & Execution",
      icon: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Transform your sales performance with proven strategies designed specifically for chemical industry dynamics and B2B relationships",
      features: [
        "Go-to-market planning with industry-specific insights",
        "Distributor/channel management optimization",
        "Key account development and relationship building",
        "Salesforce training & coaching for technical products"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
      uniqueValue: "10+ years of chemical industry sales expertise with proven track record of 30% average revenue increase",
      methodology: "Data-driven approach combining technical product knowledge with advanced sales psychology"
    },
    {
      title: "Marketing & Branding",
      icon: <Campaign sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Build powerful brand presence and execute targeted marketing campaigns that resonate with technical decision-makers in the chemical sector",
      features: [
        "Market research & segmentation for chemical markets",
        "Competitive analysis and positioning strategies",
        "Brand positioning for technical B2B audiences",
        "Digital marketing for B2B chemicals with ROI focus"
      ],
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&h=250&fit=crop",
      uniqueValue: "Specialized in translating complex chemical benefits into compelling value propositions",
      methodology: "Technical marketing approach that bridges scientific complexity with business value"
    },
    {
      title: "Business Development",
      icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Accelerate growth through strategic partnerships, new market expansion, and systematic lead generation tailored for chemical industry networks",
      features: [
        "New market entry strategies with risk mitigation",
        "Partnership & JV scouting in chemical ecosystems",
        "Lead generation & qualification for technical products",
        "Strategic alliance development and management"
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      uniqueValue: "Extensive network across chemical value chains from raw materials to end applications",
      methodology: "Systematic approach to identifying and developing high-value business opportunities"
    },
    {
      title: "Regulatory & Compliance",
      icon: <Gavel sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: "Navigate complex regulatory landscapes with confidence through expert guidance on compliance, documentation, and regional requirements",
      features: [
        "Product registration guidance across multiple jurisdictions",
        "SDS/documentation support and optimization",
        "Regional compliance expertise for global markets",
        "Regulatory strategy development and implementation"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      uniqueValue: "Deep understanding of global chemical regulations including REACH, GHS, and regional standards",
      methodology: "Proactive compliance strategies that turn regulatory requirements into competitive advantages"
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
          Our Services
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Comprehensive sales and marketing solutions designed specifically for the chemical industry
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
              sx={{ 
                height: '100%',
                width: '100%',
                maxWidth: '500px',
                minHeight: '750px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
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
                    {service.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 2, fontWeight: 'bold', lineHeight: 1.2 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '80px', lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>

                  {/* Unique Value Proposition */}
                  <Paper elevation={0} sx={{ p: 2, bgcolor: 'primary.light', color: 'white', mb: 3, borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                      🎯 Our Unique Advantage:
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                      {service.uniqueValue}
                    </Typography>
                  </Paper>

                  {/* Methodology */}
                  <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.light', color: 'white', mb: 3, borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                      🔬 Our Methodology:
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                      {service.methodology}
                    </Typography>
                  </Paper>
                </Box>

                <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.50', mt: 'auto' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Key Services:
                  </Typography>
                  <List dense>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem', lineHeight: 1.4 } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
            Ready to Accelerate Your Chemical Business?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Let's discuss how our expertise can drive your growth in the chemical industry
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

export default Services;
