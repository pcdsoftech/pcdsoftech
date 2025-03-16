import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  styled,
  Grid,
  InputAdornment,
  Theme,
  useMediaQuery,
  InputBase,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Label, Label2, StyledInput, StyledInput1 } from './StyledComponents';

const MainContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '4px',
  width: '100%',
  position: 'relative',
});

const StyledTextField = styled(TextField)({
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  backgroundColor: '#831F3F',
  border: '1px solid white',
  color: 'white',
  borderRadius: '0px',
  marginRight: '10px',
});


function ActionPart({ handlePageChange }: { handlePageChange: (newPageNumber: number) => void }) {
  interface dataState {
    id: number;
    data: number;
  };

  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<dataState[]>([]);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  
  const inputGroupStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
  }
  
  const inputRowStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '0.5rem',
    marginTop: '1rem',
    width: '100%',
  }

  const inputRow = ( Num: number) => {
    return (
      <Box sx={inputRowStyles}>
        <Box sx={inputGroupStyles} width="100%">
          <Label>Action #{Num}</Label>
          <StyledInput1 />
        </Box>
        <Box sx={inputGroupStyles} width="100%">
          <Label>Data #{Num}</Label>
          <StyledInput1 />
        </Box>
      </Box>
    )
  }

  return (
    <MainContentContainer>
      <Typography variant={isMobile ? "body1" : "h5"} gutterBottom>
        LimitlessWAX
      </Typography>

      <Box sx={inputGroupStyles}>
        <Label>Name this action</Label>
        <StyledInput />
      </Box>

      <Box sx={inputGroupStyles}>
        <Label>Smart contract address</Label>
        <StyledInput />
      </Box>

      {data.map((item, index) => (
        inputRow(item.id + 1)
      ))};

      <Button variant="contained" sx={{ mt: 2, width: 140, border: '1px dotted white', borderRadius: '0px', bgcolor: 'inherit', color: 'white' }} 
        onClick={() => {
          setData([
            ...data,
            { id: count, data: 0 }
        ]);
        setCount(count + 1);
      }}>
        Add Action +
      </Button>

      <Box mt={2} display="flex" alignItems={isMobile ? 'flex-start' : 'center'} flexDirection={isMobile ? 'column' : 'row'}>
        <Box sx={inputGroupStyles} mr={'30px'}>
          <Label>How much CPU</Label>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase sx={{ width: '80px', mr: 1, bgcolor: '#831F3F', height: '45px', fontSize: '18px', textTransform: 'none' }} />
            <Typography>ms</Typography>
          </Box>
        </Box>
        <Box sx={inputGroupStyles}>
          <Label>Play With</Label>
          <Box sx={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'baseline', flexDirection: isMobile ? 'column' : 'row' }}>
            <Button sx={{ width: '80px', mr: 1, bgcolor: '#831F3F', color: 'white', height: '45px', fontSize: '18px', textTransform: 'none' }}>WAX</Button>
            {!isMobile && <Typography mr={1}>or</Typography>}
            <Button sx={{ mt: 1, width: '160px', height: '42px', fontSize: '18px', textTransform: 'none', bgcolor: 'inherit', color: 'white', border: '1px dotted white' }}>
              Custom Token +
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', mt: 2 }}>
        <StyledButton variant="contained" onClick={() => handlePageChange(0)}>Submit</StyledButton>
        <StyledButton variant="outlined" 
        onClick={() => {
        setCount(0);
        setData([]);
        }}>Reset</StyledButton> 
      </Box>
      <Box sx={{ display: 'flex', position: 'absolute', top: 0, right: 0 }}>
        <Button sx={{ width: isMobile ? '60px' : '80px', bgcolor: '#831F3F', color: 'white', borderRadius: '0px', mr: 1 }} 
        onClick={() => handlePageChange(0)}>
          Save
        </Button>
        <Button sx={{ width: isMobile ? '60px' : '80px', bgcolor: '#831F3F', color: 'white', borderRadius: '0px' }}>Load</Button>
      </Box>
    </MainContentContainer>
  );
}

export default ActionPart;