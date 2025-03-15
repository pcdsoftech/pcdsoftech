import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface DataCardProps {
  title: string;
  value: string;
  isButton?: boolean;
  earnings?: string[];
}

const DataCard: React.FC<DataCardProps> = ({ title, value, }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  return (
    <Box sx={{
      bgcolor: 'rgba(74,30,42,1)',
      color: 'white',
      borderRadius: isXsScreen ? '16px' : isSmallScreen ? '25px' : '50px',
      height: isXsScreen ? 'auto' : isSmallScreen ? 180 : 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      p: isXsScreen ? 2 : isSmallScreen ? 2.5 : 3
    }}>
      <Typography 
        component="div" 
        sx={{ 
          mb: isXsScreen ? 0.5 : 1, 
          textAlign: 'center', 
          fontSize: isXsScreen ? 24 : isSmallScreen ? 24 : 32,
          lineHeight: 1.2
        }}
      >
        {title}
      </Typography>
      <Typography 
        sx={{ 
          textAlign: 'center', 
          fontSize: isXsScreen ? 36 : isSmallScreen ? 48 : 64,
          lineHeight: 1.2
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default DataCard;