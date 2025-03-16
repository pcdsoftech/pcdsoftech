import React from 'react';
import { Box, useMediaQuery, Theme } from '@mui/material';
import { Label, StyledInput, StyledButton } from './StyledComponents';
import { FlareSharp } from '@mui/icons-material';

const TabThird: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	const containerStyles = {
    display: 'flex', 
    width: '100%',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? 3 : 0
  };

  const formStyles = {
    color: 'white',
  };

  const inputStyles = {
    width: isMobile ? 'auto' : '280px',
    mr: 2
  };

	const inputGroupStyles = {
		display: 'flex',
		flexDirection: 'row',
    alignItems: 'center',
    my: isMobile ? 0.5 : 1
	}

  return (
    <Box sx={formStyles}>
			<Box sx={containerStyles}>
				<Box sx={{ mr: 3}}>
					<Label>WAX Balance</Label>
					<Label sx={{ my: 1, fontWeight: 700, }}>11.349123158 WAX</Label>
				</Box>
				<Box>
					<Label>WAX in System</Label>
					<Label sx={{ my: 1, fontWeight: 700, }}>11.349123158 WAX</Label>
				</Box>
			</Box>
      <Label>Amount to Send</Label>
      <Box sx={inputGroupStyles}>
        <StyledInput sx={inputStyles} />
        <Label>WAX</Label>
      </Box>
      <StyledButton sx={{ textTransform: 'none', mt: 2 }}>
        Deposit and Earn
      </StyledButton>
    </Box>
  );
};

export default TabThird;