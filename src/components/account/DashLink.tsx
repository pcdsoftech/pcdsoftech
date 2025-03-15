import React from 'react';
import { Box, useMediaQuery, Link, Theme } from '@mui/material';
import { styled } from '@mui/system';

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#FFFFFF',
  textDecoration: 'none',
  fontFamily: 'Roboto',
}));

const DashLink = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        padding: isMobile ? 2 : 3,
        borderRadius: 2,
        margin: '0 auto',
        gap: isMobile ? 2 : 0
      }}
    >
      <StyledLink 
        href="/" 
        sx={{ 
          fontSize: isMobile ? 32 : 48, 
          fontWeight: 700,
          textAlign: isMobile ? 'left' : 'center'
        }}
      >
        Dashboard
      </StyledLink>
      <StyledLink 
        sx={{ 
          fontSize: isMobile ? 16 : 24, 
          fontWeight: 300,
          textAlign: isMobile ? 'left' : 'center'
        }}
      >
        View on wax.block.io
      </StyledLink>
    </Box>
  );
};

export default DashLink;