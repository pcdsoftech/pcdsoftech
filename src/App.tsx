import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        backgroundImage: 'url(./assets/images/bg.png)', 
        backgroundSize: 'cover',
        color: 'text.primary', 
        minHeight: '100vh', }}>
        <Container maxWidth="lg">
          <Home />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;