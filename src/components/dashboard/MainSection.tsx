import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, AppBarProps, Theme, SxProps } from '@mui/material';
import { AppBar } from '@mui/material';

import { makeStyles } from '@mui/styles';
import zIndex from '@mui/material/styles/zIndex';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: '1100px', 
    height: '500px', 
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundImage: 'url(./assets/images/bg.png)', 
      backgroundSize: 'cover',
      transform: 'rotate(180deg)',
      width: '100%',
      height: '100%',
      borderRadius: '50px',
    }
  }
})

type CustomAppBarProps = AppBarProps & {
  customBgColor?: string;
  customShadow?: string;
  customPadding?: number;
};

interface MainSectionProps {
  className?: string;
  sx?: SxProps<Theme>;
}

interface ActionButton {
  label: string;
  href: string;
}

const defaultAppBarStyles: SxProps<Theme> = {
  bgcolor: 'transparent',
  boxShadow: 'none',
  py: 2,
};

const actionButtons: readonly ActionButton[] = [
  { label: 'CPU4SALE', href: '/cpu4sale' },
  { label: 'LIMITLESSWAX', href: '/limitlesswax' }
] as const;

const buttonSx = {
  backgroundColor: '#882140',
  color: 'white',
  width: '240px',
  height: '60px',
  fontSize: '24px',
  border: '1px solid white',
  '&:hover': {
    backgroundColor: '#6d1a33'
  }
};

interface SideProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const defaultSideProps: SideProps = {
  src: './assets/images/side.png',
  alt: 'Side',
  height: 500
};

const MainSection: React.FC<MainSectionProps> = ({ className, sx }) => {
  const classes = useStyles()
  const isSmallScreen: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const appBarProps: CustomAppBarProps = {
    position: "static",
    component: "nav",
    elevation: 0,
  };

  return (
    <Box sx={{ py: 4, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', ...sx }}>
      <Box sx={{ maxWidth: '739px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography style={{ fontSize: isSmallScreen ? '36px' : '48px', textAlign: 'center'}} gutterBottom>
          A new CPU renting system on the WAX blockchain
        </Typography>
        <Typography style={{ fontSize: isSmallScreen ? '16px' : '24px', textAlign: 'center'}}>
          Created with help from the WAX development team and community members.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', my: 4}}>
          {actionButtons.map((button) => (
            <Button
              key={button.label}
              variant="contained"
              href={button.href}
              sx={buttonSx}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: 4, display: 'flex',}} className={classes.root}>
        <Box sx={{  p: 8,  width: '100%', zIndex: 1}}>
          <Typography style={{ fontSize: isSmallScreen ? '24px' : '36px', lineHeight: '45px', fontFamily: 'roboto'}} gutterBottom>
            Allowing anyone to rent CPU or deposit wax and earn from renting to others.
          </Typography>
          <Typography style={{ fontSize: isSmallScreen ? '16px' : '24px', lineHeight: '30px', fontWeight: '100', fontFamily: "roboto" }} paragraph>
            {/* Add the paragraph content here (from OCR or your own text) */}
            The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax.
          </Typography>
          <Typography style={{ fontSize: isSmallScreen ? '16px' : '24px', lineHeight: '30px', fontWeight: '100', fontFamily: "roboto" }}>
            Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too.
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', width: '100%'}}>
        <img
          src={defaultSideProps.src}
          alt={defaultSideProps.alt}
          height={defaultSideProps.height}
          style={{ objectFit: 'contain', zIndex: 1, width: '100%'}}
        />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4}}>
        <Typography style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Roboto', lineHeight: '100%', maxWidth: '860px', textAlign: 'center'}}>
          Users can interact with the smart contract in a number of ways
        </Typography>
        <Typography style={{ fontSize: '24px', fontWeight: '300', maxWidth: '1000px', fontFamily: 'Roboto', lineHeight: '100%', textAlign: 'center', marginTop: 16}}>
          The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord.
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={6}> {/* Adjusted Grid for Responsiveness */}
          <Button variant="outlined" fullWidth>
            Request CPU for Self
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" fullWidth>
            Request Free CPU
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" fullWidth>
            Deposit to Earn
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2}}>
      <Grid item xs={12} sm={6} md={4}>
          <Button variant="outlined" fullWidth>
            Request CPU for Others
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="outlined" fullWidth>
            Update Collected Fees
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="outlined" fullWidth>
            Withdraw Deposited Wax
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1">Stay up to date with Limitless WAX</Typography>
        <Button variant="contained" color="primary">
          Join Community
        </Button>
      </Box>
    </Box>
  );
};

export default MainSection;