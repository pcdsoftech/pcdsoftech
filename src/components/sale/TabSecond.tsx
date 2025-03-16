import React from 'react';
import { Box, useMediaQuery, Theme } from '@mui/material';
import { Label, StyledInput, StyledButton } from './StyledComponents';
import { FlareSharp } from '@mui/icons-material';

const TabSecond: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const formStyles = {
    color: 'white',
  };

  const inputStyles = {
    width: isMobile ? 'auto' : '280px',
    mr: 2
  };

  const daysInputStyles = {
    width: isMobile ? 80 : 100,
    mr: 2
  };

	const daysContainerStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'baseline',
		paddingRight: '30px',
	}

	const inputGroupStyles = {
		display: 'flex',
		flexDirection: 'row',
    alignItems: 'center',
    my: isMobile ? 0.5 : 1
	}

  return (
    <Box sx={formStyles}>
      <Label>Amount to Send</Label>
      <Box sx={inputGroupStyles}>
        <StyledInput sx={inputStyles} />
        <Label>WAX</Label>
      </Box>
			<Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' :'row', gap: '10px' }}>
				<Box sx={daysContainerStyles}>
					<Label>Number of days</Label>
					<Box sx={inputGroupStyles}>
						<StyledInput sx={daysInputStyles} />
						<Label>Days</Label>
					</Box>
				</Box>
				<Box sx={daysContainerStyles}>
					<Label>User to stake to</Label>
					<StyledInput sx={inputStyles} />
				</Box>
			</Box>
      <Label>Amount to be staked</Label>
      <Label sx={{ my: 1, fontWeight: 700, }}>11.349123158 WAX</Label>
      <StyledButton sx={{ textTransform: 'none' }}>
        Stake to User
      </StyledButton>
    </Box>
  );
};

export default TabSecond;