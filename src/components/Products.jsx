import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import {
  Star,
  ShoppingCart,
  TrendingUp,
  Assessment,
  Security,
  Speed,
  Calculate,
  Analytics,
} from '@mui/icons-material';

const products = [
  {
    id: 1,
    title: 'Pro Trading Bot',
    description: 'Advanced AI-powered trading automation software with machine learning algorithms. Execute trades 24/7 with precision and maximize your profits.',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Trading',
    badge: 'Best Seller',
    rating: 4.8,
    features: ['AI-Powered', '24/7 Trading', 'Risk Management', 'Backtesting'],
    icon: <TrendingUp />,
  },
  {
    id: 2,
    title: 'Portfolio Analyzer Pro',
    description: 'Professional portfolio analysis and optimization tool. Analyze risk, performance, and diversification with advanced metrics and visualizations.',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Analysis',
    badge: 'Popular',
    rating: 4.7,
    features: ['Risk Analysis', 'Performance Tracking', 'Optimization', 'Reports'],
    icon: <Assessment />,
  },
  {
    id: 3,
    title: 'Risk Calculator Pro',
    description: 'Advanced risk assessment and management system. Calculate VaR, stress testing, and scenario analysis for your investments.',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Risk Management',
    badge: 'New',
    rating: 4.9,
    features: ['VaR Calculation', 'Stress Testing', 'Monte Carlo', 'Reporting'],
    icon: <Security />,
  },
  {
    id: 4,
    title: 'Crypto Scanner Elite',
    description: 'Real-time cryptocurrency market scanner and alert system. Track thousands of coins and get instant notifications on price movements.',
    price: 129,
    originalPrice: 179,
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Crypto',
    badge: 'Hot',
    rating: 4.6,
    features: ['Real-time Scanning', 'Price Alerts', 'Technical Analysis', 'Multi-Exchange'],
    icon: <Speed />,
  },
  {
    id: 5,
    title: 'Options Strategy Builder',
    description: 'Design and test complex options strategies with our advanced modeling tool. Visualize profit/loss scenarios and Greeks.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Options',
    badge: 'Advanced',
    rating: 4.8,
    features: ['Strategy Builder', 'Greeks Calculator', 'P&L Visualization', 'Backtesting'],
    icon: <Calculate />,
  },
  {
    id: 6,
    title: 'Market Data Terminal',
    description: 'Professional-grade market data terminal with real-time quotes, charts, and news. Access global markets from one platform.',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Data',
    badge: 'Professional',
    rating: 4.9,
    features: ['Real-time Data', 'Advanced Charts', 'News Feed', 'Global Markets'],
    icon: <Analytics />,
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', 'Trading', 'Analysis', 'Risk Management', 'Crypto', 'Options', 'Data'];

  const filteredProducts = products
    .filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'All' || product.category === category)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const scrollToFooter = () => {
    const footer = document.getElementById('contact-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Professional Trading Tools & Software
          </Typography>
          <Typography variant="h6" component="p" sx={{ opacity: 0.9 }}>
            Discover our complete suite of financial software solutions
          </Typography>
        </Container>
      </Box>

      {/* Filters Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search Products"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                  />
                  <Chip
                    label={product.badge}
                    color={
                      product.badge === 'Best Seller' ? 'secondary' : 
                      product.badge === 'New' ? 'success' :
                      product.badge === 'Hot' ? 'error' : 'primary'
                    }
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      fontWeight: 'bold',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      bgcolor: 'rgba(0,0,0,0.7)',
                      borderRadius: '50%',
                      p: 1,
                      color: 'white',
                    }}
                  >
                    {product.icon}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Star sx={{ color: '#FFD700', mr: 0.5, fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      {product.rating} (150+ reviews)
                    </Typography>
                    <Chip 
                      label={product.category} 
                      size="small" 
                      variant="outlined"
                      sx={{ ml: 'auto' }}
                    />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  
                  {/* Features */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      Key Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {product.features.map((feature, index) => (
                        <Chip 
                          key={index}
                          label={feature} 
                          size="small" 
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" color="primary" fontWeight="bold">
                      ${product.price}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ textDecoration: 'line-through' }}
                    >
                      ${product.originalPrice}
                    </Typography>
                    <Chip 
                      label={`${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF`} 
                      size="small" 
                      color="success" 
                    />
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button 
                    size="small" 
                    variant="outlined"
                    onClick={scrollToFooter}
                  >
                    Contact Sales
                  </Button>
                  <Button 
                    size="small" 
                    variant="contained" 
                    startIcon={<ShoppingCart />}
                    onClick={scrollToFooter}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No products found matching your criteria.
            </Typography>
          </Box>
        )}
      </Container>

      {/* CTA Section */}
      <Paper
        sx={{
          background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
          color: 'white',
          py: 6,
          textAlign: 'center',
          mt: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Need Help Choosing the Right Product?
          </Typography>
          <Typography variant="h6" component="p" gutterBottom sx={{ mb: 3, opacity: 0.9 }}>
            Our experts are here to help you find the perfect solution for your trading needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToFooter}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: '#f5f5f5' },
              px: 4,
              py: 1.5,
            }}
          >
            Get Expert Consultation
          </Button>
        </Container>
      </Paper>
    </>
  );
};

export default Products;
