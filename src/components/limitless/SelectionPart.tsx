import React from 'react';
import { Button, Box, Typography, styled } from '@mui/material';

const PlusButtonsContainer = styled(Box)({
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
	backgroundColor: '#831F3F',
	borderRadius: '15px',
	padding: '20px 40px',
});

const PlusButton = styled(Button)({
  color: 'white',
	border: '1px dotted white',
	borderRadius: '0px',
	backgroundColor: 'inherit',
	fontSize: 64,
	width: 64,
	height: 64,	
  '&:hover': {
    backgroundColor: '#A32A4E',
  },
});

function SelectionPart({ handlePageChange }: { handlePageChange: (newPageNumber: number) => void }) {
  return (
    <Box sx={{ height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems:  'center', width: '100%'}}>
      <Typography variant="h4" gutterBottom sx={{ alignSelf: 'flex-start'}}>
        LimitlessWAX
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Button sx={{ border: '1px dotted white', fontSize: 18, color: 'white', borderRadius: '0px', }} onClick={() => handlePageChange(1)}>
          Add Action +
        </Button>
        <Typography variant="body1">or</Typography>
        <Button sx={{ bgcolor: '#882140', border: '1px solid white', fontSize: 18, color: 'white', borderRadius: '0px', }}>Load</Button>
      </Box>
      <PlusButtonsContainer>
        <PlusButton variant="contained">+</PlusButton>
        <PlusButton variant="contained">+</PlusButton>
        <PlusButton variant="contained">+</PlusButton>
        <PlusButton variant="contained">+</PlusButton>
      </PlusButtonsContainer>
    </Box>
  );
}

export default SelectionPart;