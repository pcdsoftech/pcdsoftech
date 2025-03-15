import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme, SxProps } from '@mui/material';

interface NavigationButton {
  text: string;
  href: string;
}

const buttons: NavigationButton[] = [
  { text: 'GO to Cpu4Sale', href: '/cpu4sale' },
  { text: 'GO to Cpu4Sale', href: '/cpu4sale' }
];

const ButtonSection = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const buttonStyles: SxProps = {
    width: isXsScreen ? '100%' : isSmallScreen ? 350 : 500,
    height: isXsScreen ? 60 : isSmallScreen ? 100 : 150,
    borderRadius: isXsScreen ? "16px" : isSmallScreen ? "25px" : "50px",
    bgcolor: '#5C2736',
    display: 'flex',
    justifyContent: 'space-between',
    px: isXsScreen ? 3 : isSmallScreen ? 5 : 8,
    '&:hover': {
      bgcolor: '#6d2e40'
    }
  };

  const textStyles: SxProps = {
    color: 'white',
    fontSize: isXsScreen ? 16 : isSmallScreen ? 24 : 32
  };

  const arrowStyles: SxProps = {
    color: 'white',
    fontSize: isXsScreen ? 24 : isSmallScreen ? 32 : 48
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: isXsScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      p: isXsScreen ? 1 : isSmallScreen ? 2 : 3,
      gap: isXsScreen ? 2 : 3
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
            &#62;
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default ButtonSection;