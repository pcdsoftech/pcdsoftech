import { Typography, InputBase, Button } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: '16px',
  width: '140px',
  height: '40px',
  fontWeight: 700,
  fontFamily: 'Roboto',
  backgroundColor: '#882140',
  borderRadius: 0,
  border: '1px solid white',
  '&:hover': {
    backgroundColor: '#831F3F',
  },
  '@media (min-width: 600px)': {
    fontSize: '22px',
    width: '210px',
    height: '45px',
  }
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '18px',
  '@media (min-width: 600px)': {
    fontSize: '24px',
  },
  fontWeight: 300,
}));

export const Label2 = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '14px',
  '@media (min-width: 600px)': {
    fontSize: '18px',
  }
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: '#831F3F',
  paddingLeft: 15,
  width: '100%',
  height: '40px',
  '@media (min-width: 600px)': {
    height: '47px',
    width: '50%',
  }
})); 

export const StyledInput1 = styled(InputBase)(({ theme }) => ({
  backgroundColor: '#831F3F',
  paddingLeft: 15,
  width: '100%',
  height: '40px',
  '@media (min-width: 600px)': {
    height: '47px',
    width: '100%',
  }
})); 