import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Person,
  Science,
  TrendingUp,
  School,
  Work,
  CheckCircle,
  Timeline,
  Business,
  Star
} from '@mui/icons-material';

const About = () => {
  const achievements = [
    "10+ years of specialized experience in chemical industry sales and marketing",
    "Successfully worked with 50+ chemical companies across various segments",
    "Expert in drilling chemicals, specialty chemicals, and agrochemicals",
    "Proven track record of 30% average revenue growth for clients",
    "Deep understanding of regulatory compliance and industry standards",
    "Strong network across chemical industry value chain"
  ];

  const expertise = [
    {
      title: "Sales Strategy Development",
      description: "Creating comprehensive sales strategies tailored for chemical markets",
      icon: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Marketing & Branding",
      description: "Building strong brand presence in competitive chemical sectors",
      icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Business Development",
      description: "Expanding market reach and developing strategic partnerships",
      icon: <Timeline sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Industry Knowledge",
      description: "Deep technical understanding of chemical products and applications",
      icon: <Science sx={{ fontSize: 40, color: 'primary.main' }} />
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
          About Reydar
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Your trusted partner for chemical industry growth and success
        </Typography>
      </Box>

      {/* Founder Section */}
      <Paper elevation={3} sx={{ p: 6, mb: 8, bgcolor: 'grey.50' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
                mb: 3,
                bgcolor: 'primary.main',
                fontSize: '4rem'
              }}
            >
              <Person sx={{ fontSize: '4rem' }} />
            </Avatar>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Neeraj Sharma
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              Founder & Principal Consultant
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              10+ Years Chemical Industry Experience
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Leading Chemical Industry Expert
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              Neeraj Sharma brings over a decade of specialized experience in chemical industry 
              sales and marketing. As the founder of Reydar, he has dedicated his career to helping 
              chemical companies accelerate their growth through strategic sales initiatives and 
              innovative marketing approaches.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              With deep expertise across multiple chemical segments including drilling chemicals, 
              specialty chemicals, and agrochemicals, Neeraj understands the unique challenges and 
              opportunities within the chemical industry. His proven methodologies have helped 
              50+ companies achieve significant revenue growth and market expansion.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              His approach combines technical knowledge of chemical products with strategic business 
              acumen, ensuring that solutions are both scientifically sound and commercially viable. 
              Neeraj's commitment to excellence and results-driven approach has made him a trusted 
              advisor to chemical industry leaders.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Key Achievements */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}
        >
          Key Achievements
        </Typography>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Grid container spacing={2}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <CheckCircle color="primary" sx={{ mt: 0.5, mr: 2, flexShrink: 0 }} />
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {achievement}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      {/* Areas of Expertise */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}
        >
          Areas of Expertise
        </Typography>
        <Grid container spacing={4}>
          {expertise.map((area, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  p: 3,
                  maxWidth: '500px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  {area.icon}
                  <Typography variant="h5" sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                    {area.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%', bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              To empower chemical companies with strategic sales and marketing solutions that 
              drive sustainable growth, enhance market presence, and create lasting competitive advantages 
              in the global chemical industry.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%', bgcolor: 'secondary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              To be the leading consulting partner for chemical companies worldwide, recognized for 
              our deep industry expertise, innovative solutions, and unwavering commitment to 
              client success and growth acceleration.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Company Values */}
      <Box sx={{ mb: 8}}>
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6}}
        >
          Our Values
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                textAlign: 'center',
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '500px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80, mx: 'auto', mb: 3 }}>
                <Star sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Excellence
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                Delivering the highest quality solutions and exceeding client expectations
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                textAlign: 'center',
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mx: 'auto', mb: 3 }}>
                <Science sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                Innovation
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                Continuous innovation in methodologies and approaches to solve industry challenges
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                textAlign: 'center',
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <Avatar sx={{ bgcolor: 'success.main', width: 80, height: 80, mx: 'auto', mb: 3 }}>
                <CheckCircle sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'success.main' }}>
                Integrity
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                Maintaining the highest ethical standards in all business relationships
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 6, 
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Partner with Us?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Discover how Neeraj's expertise can transform your chemical business
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            📞 +91-9171690029
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            ✉️ contact@reydar.in
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            📍 Indore, India
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
