import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface SimpleCardProps {
  title: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  return (
    <Box sx={{
      backgroundColor: '#391E24',
      color: 'text.primary',
      height: isXsScreen ? 50 : isSmallScreen ? 70 : 140,
      borderRadius: isXsScreen ? '12px' : isSmallScreen ? '25px' : '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: isXsScreen ? 1 : isSmallScreen ? 1.5 : 2.5
    }}>
      <Typography 
        component="div" 
        sx={{ 
          textAlign: 'center', 
          fontSize: isXsScreen ? 24 : isSmallScreen ? 24 : 32,
          lineHeight: 1.2
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SimpleCard;