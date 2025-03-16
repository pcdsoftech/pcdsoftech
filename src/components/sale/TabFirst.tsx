import React from 'react';
import { Box, Typography, useMediaQuery, Theme } from '@mui/material';
import { Label, Label2, StyledInput, StyledButton } from './StyledComponents';

const TabFirst: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const containerStyles = {
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '100%',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? 3 : 0
  };

  const formStyles = {
    color: 'white',
    '& .MuiBox-root': {
      display: 'flex',
      alignItems: 'center',
      my: isMobile ? 0.5 : 1
    }
  };

  const inputStyles = {
    width: isMobile ? '200px' : '280px',
    mr: 2
  };

  const daysInputStyles = {
    width: isMobile ? 80 : 100,
    mr: 2
  };

  const roiContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: '#831F3F',
    borderRadius: isMobile ? '20px' : '30px',
    width: isMobile ? '160px' : '200px',
    p: isMobile ? 2 : 3
  };

  const roiTitleStyles = {
    fontSize: isMobile ? 32 : 42,
    color: 'white',
    my: isMobile ? 1 : 3
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={formStyles}>
        <Label>Amount to Send</Label>
        <Box>
          <StyledInput sx={inputStyles} />
          <Label>WAX</Label>
        </Box>

        <Label>Number of days</Label>
        <Box>
          <StyledInput sx={daysInputStyles} />
          <Label>Days</Label>
        </Box>

        <Label>Amount to be staked</Label>
        <Label sx={{ my: 1 }}>11.349123158 WAX</Label>
        <StyledButton sx={{ textTransform: 'none' }}>
          Request self stake
        </StyledButton>
      </Box>

      {!isMobile && (
        <Box sx={roiContainerStyles}>
          <Typography sx={roiTitleStyles}>ROI</Typography>
          {[
            { label: 'Daily', value: '11.349 WAX' },
            { label: 'Weekly', value: '11.349 WAX' },
            { label: 'Monthly', value: '11.349 WAX' }
          ].map(({ label, value }, index) => (
            <React.Fragment key={index}>
              <Label2>{label}</Label2>
              <Label>{value}</Label>
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TabFirst;