import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ActionButton } from './types';

interface HeroSectionProps {
  isSmallScreen: boolean;
  actionButtons: ActionButton[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ isSmallScreen, actionButtons }) => {
  const buttonStyles = {
    bgcolor: '#882140',
    color: 'white',
    width: isSmallScreen ? '100%' : '240px',
    height: isSmallScreen ? '50px' : '60px',
    fontSize: isSmallScreen ? '18px' : '24px',
    border: '1px solid white',
    mb: isSmallScreen ? 1 : 0,
    '&:hover': { bgcolor: '#6d1a33' }
  };

  return (
    <Box sx={{ maxWidth: '739px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography sx={{ fontSize: isSmallScreen ? '36px' : '48px', textAlign: 'center' }} gutterBottom>
        A new CPU renting system on the WAX blockchain
      </Typography>
      <Typography sx={{ fontSize: isSmallScreen ? '16px' : '24px', textAlign: 'center' }}>
        Created with help from the WAX development team and community members.
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: isSmallScreen ? 'column' : 'row',
        gap: isSmallScreen ? 1 : 2, 
        justifyContent: 'center', 
        my: isSmallScreen ? 1 : 4,
        width: isSmallScreen ? '100%' : 'auto',
        px: isSmallScreen ? 2 : 0
      }}>
        {actionButtons.map((button) => (
          <Button
            key={button.label}
            variant="contained"
            href={button.href}
            sx={buttonStyles}
          >
            {button.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection; 