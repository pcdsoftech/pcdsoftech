import React from 'react';
import { Box, Button, Typography, useMediaQuery, Theme, SxProps } from '@mui/material';

interface SubscriptionSectionProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ className, sx }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box 
      className={className}
      sx={{
        bgcolor: 'rgba(56,30,38,0.8)',
        padding: isMobile ? 3 : 5,
        borderRadius: '50px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        gap: isMobile ? 2 : 0,
        fontFamily: 'Roboto',
        maxWidth: '1100px',
        mx: 'auto',
        ...sx
      }}
    >
      <Typography 
        sx={{
          fontSize: isMobile ? 24 : 36,
          color: "white",
          textAlign: isMobile ? 'center' : 'left',
          mb: isMobile ? 2 : 0
        }}
      >
        Stay up to date with Limitless WAX
      </Typography>
      <Button 
        variant="contained" 
        sx={{
          bgcolor: "#882140",
          color: "white",
          borderRadius: '0px',
          fontSize: isMobile ? 18 : 24,
          padding: isMobile ? '8px 16px' : '12px 24px',
          width: isMobile ? '100%' : 'auto',
          '&:hover': {
            bgcolor: '#6d1a33'
          }
        }}
      >
        Join Community
      </Button>
    </Box>
  );
};

export default SubscriptionSection;