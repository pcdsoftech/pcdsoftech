import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, AppBarProps, Theme, SxProps } from '@mui/material';
import { AppBar } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { Card, CardContent} from '@mui/material';
import { styled } from '@mui/system';

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

interface ButtonStyles {
  base: SxProps<Theme>;
  mobile: SxProps<Theme>;
}

const buttonStyles: ButtonStyles = {
  base: {
    backgroundColor: '#882140',
    color: 'white',
    width: '240px',
    height: '60px',
    fontSize: '24px',
    border: '1px solid white',
    '&:hover': {
      backgroundColor: '#6d1a33'
    }
  },
  mobile: {
    width: '100%',
    height: '50px',
    fontSize: '18px',
    marginBottom: '8px'
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


interface CardProps {
  title: string;
  description: string;
}

const StyledCard1 = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(51,30,34,0.8)',
  color: '#FFFFFF',
  display: 'flex',
  height: '160px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));

const StyledCard2 = styled(Card)(({ theme }) => ({
  backgroundColor: '#4A1E2A',
  color: '#FFFFFF',
  display: 'flex',
  height: '300px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));

const InfoCard1: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledCard1>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
      </CardContent>
    </StyledCard1>
  );
};

const StyledContainer = styled(Box)({
  backgroundColor: '#331E22',
  borderRadius: '24px',
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledButton = styled(Button)({
  backgroundColor: "#882140",
  color: '#fff',
  borderColor: '#fff',
  '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: '#fff',
  },
});

const InfoCard2: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledCard2>
      <CardContent style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
      </CardContent>
    </StyledCard2>
  );
};


const MainSection: React.FC<MainSectionProps> = ({ className, sx }) => {
  const cards_brown = [
    {
      title: 'Request CPU for Self',
      description: 'The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests. Then that wax is sent to a minion account and staked to the user for the given time.',
      weight: 0.5,
    },
    {
      title: 'Request Free CPU',
      description: 'As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user.',
      weight: 0.25,
    },
    {
      title: 'Deposit to Earn',
      description: 'Users can also deposit wax to earn 70% of the total fees collected.',
      weight: 0.25,
    },
];
const cards_red = [
  { title: 'Request CPU for Others', description: 'Similar to requesting for yourself, this does the first few steps but then directly stakes...', weight: 0.25 },
    { title: 'Update Collected Fees', description: 'This method is not required but will immediately update the table entry...', weight: 0.25 },
    { title: 'Withdraw Deposited Wax', description: 'At any time a user can request to withdraw deposited wax. A user can make as many...', weight: 0.5 },
];
  const classes = useStyles()
  const isSmallScreen: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const appBarProps: CustomAppBarProps = {
    position: "static",
    component: "nav",
    elevation: 0,
  };

  const getButtonStyles = (): SxProps<Theme> => {
    const styles = isSmallScreen 
      ? { ...buttonStyles.base, ...buttonStyles.mobile }
      : buttonStyles.base;
    return styles as SxProps<Theme>;
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
              sx={getButtonStyles()}
            >
              {button.label}
            </Button>
          ))}
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

      <Grid container spacing={3} sx={{ padding: '24px' }}>
        {cards_brown.map((card, index) => (
          <Grid item xs={12} sm={card.weight*24} md={card.weight*12} key={index}>
            <InfoCard1 title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ padding: '24px' }}>
        {cards_red.map((card, index) => (
          <Grid item xs={12} sm={card.weight*24} md={card.weight*12} key={index}>
            <InfoCard2 title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: '100%', p: 3, maxWidth: '1100px'}}>
        <StyledContainer>
          <Typography variant="h6" style={{ color: '#fff' }}>
            Stay up to date with Limitless WAX
          </Typography>
          <StyledButton variant="outlined">Join Community</StyledButton>
        </StyledContainer>
      </Box>
    </Box>
  );
};

export default MainSection;