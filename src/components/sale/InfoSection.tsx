import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme, SxProps } from '@mui/material';

interface NavigationButton {
  text: string;
  title: string;
  href: string;
}

const buttons: NavigationButton[] = [
  { text: '517892.244698252', title: 'Total Wax in System', href: '/cpu4sale' },
  { text: '517892.244698252', title: 'Total Wax in System', href: '/cpu4sale' }
];

const InfoSection = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const buttonStyles: SxProps = {
    width: isXsScreen ? '100%' : isSmallScreen ? 320 : 400,
    height: isXsScreen ? 60 : isSmallScreen ? 80 : 120,
    borderRadius: isXsScreen ? "16px" : isSmallScreen ? "20px" : "30px",
    bgcolor: '#5C2736',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    px: isXsScreen ? 3 : isSmallScreen ? 5 : 8,
    '&:hover': {
      bgcolor: '#6d2e40'
    }
  };

  const textStyles: SxProps = {
    color: 'white',
    fontSize: isXsScreen ? 16 : isSmallScreen ? 24 : 36
  };

  const arrowStyles: SxProps = {
    color: 'white',
    fontSize: isXsScreen ? 12 : isSmallScreen ? 16 : 24,
    textTransform: 'none'
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: isXsScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      p: isXsScreen ? 1 : isSmallScreen ? 2 : 3,
      gap: isXsScreen ? 2 : 3,
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          href={button.href}
          sx={buttonStyles}
        >
          <Typography sx={textStyles}>
            {button.text}
          </Typography>
          <Typography sx={arrowStyles}>
            {button.title}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default InfoSection;