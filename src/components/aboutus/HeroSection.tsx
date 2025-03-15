import React, { useState } from 'react';
import { Box, Typography, Button, useMediaQuery, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: '1100px', 
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundImage: 'url(./assets/images/bg_about.png)', 
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: '50px',
    }
  }
});

interface ToggleButtonProps {
  showMore: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ showMore, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      mt: 2,
      color: 'white',
      bgcolor: '#882140',
      borderRadius: '4px',
      padding: '8px 24px',
      fontSize: '14px',
      '&:hover': {
        bgcolor: '#6d1a33'
      }
    }}
  >
    {showMore ? 'Show Less' : 'Read More'}
  </Button>
);

const HeroSection: React.FC = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [showMore, setShowMore] = useState(false);

  const containerStyles = {
    px: isSmallScreen ? 2 : 12,
    py: isSmallScreen ? 3 : 6,
    my: isSmallScreen ? 2 : 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyles = {
    fontWeight: 'bold',
    mb: 2,
    zIndex: 1,
    position: 'relative',
    fontSize: isSmallScreen ? 24 : 36,
    textAlign: 'center'
  };

  const bodyTextStyles = {
    zIndex: 1,
    position: 'relative',
    textAlign: 'center',
    fontSize: isSmallScreen ? 16 : 24,
    mb: 2
  };

  const paragraphs = [
    'The price is dynamically set between a 1% and 10% fee and it changes every time someone deposits/withdraws/rents/returns wax.',
    'Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too.',
    'Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too.'
  ];

  return (
    <Box sx={containerStyles} className={classes.root}>
      <Typography variant="h5" component="h2" sx={headingStyles}>
        Allowing anyone to rent cpu or deposit wax and earn from renting to others.
      </Typography>
      
      {(!isSmallScreen || showMore) && (
        <Box>
          {paragraphs.map((text, index) => (
            <Typography key={index} variant="body1" sx={bodyTextStyles}>
              {text}
            </Typography>
          ))}
        </Box>
      )}

      {isSmallScreen && (
        <ToggleButton 
          showMore={showMore} 
          onClick={() => setShowMore(!showMore)} 
        />
      )}
    </Box>
  );
};

export default HeroSection;