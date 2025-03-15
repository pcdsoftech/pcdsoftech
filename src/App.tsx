import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import theme from './theme';
import Router from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        backgroundImage: 'url(./assets/images/bg.png)', 
        backgroundSize: '100%, 100%',
        color: 'text.primary', 
        minHeight: '100vh', }}>
        <Container maxWidth="lg">
        <Header />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;