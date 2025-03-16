import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, Theme } from '@mui/material';
import { styled } from '@mui/system';
import HeroSection from './HeroSection';
import { InfoCard1, InfoCard2 } from './InfoCards';
import { THEME, MainSectionProps, CardProps } from './types';

const StyledContainer = styled(Box)({
  backgroundColor: '#331E22',
  borderRadius: '24px',
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const MainSection: React.FC<MainSectionProps> = ({ sx }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const actionButtons = [
    { label: 'CPU4SALE', href: '/cpu4sale' },
    { label: 'LIMITLESSWAX', href: '/limitlesswax' }
  ];

  const cards_brown: CardProps[] = [
    {
      title: 'Request CPU for Self',
      description: 'The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests.',
      weight: 0.5
    },
    {
      title: 'Request Free CPU',
      description: 'As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user.',
      weight: 0.25
    },
    {
      title: 'Deposit to Earn',
      description: 'Users can also deposit wax to earn 70% of the total fees collected.',
      weight: 0.25
    }
  ];

  const cards_red: CardProps[] = [
    {
      title: 'Request CPU for Others',
      description: 'Similar to requesting for yourself, this does the first few steps but then directly stakes...',
      weight: 0.25
    },
    {
      title: 'Update Collected Fees',
      description: 'This method is not required but will immediately update the table entry...',
      weight: 0.25
    },
    {
      title: 'Withdraw Deposited Wax',
      description: 'At any time a user can request to withdraw deposited wax. A user can make as many...',
      weight: 0.5
    }
  ];

  return (
    <Box sx={{ py: 4, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', ...sx }}>
      <HeroSection isSmallScreen={isSmallScreen} actionButtons={actionButtons} />

      <Box sx={{
        background: THEME.colors.background.gradient,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: { xs: 3, md: 4 },
        padding: { xs: '16px', sm: '20px', md: '24px' },
        borderRadius: { xs: '16px', sm: '20px', md: '24px' }
      }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' },
              fontWeight: 'medium',
              mb: { xs: 2, md: 3 }
            }}
          >
            Allowing anyone to rent cpu or deposit wax and earn from renting to others.
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: 14, sm: 16, md: 18 }, 
              color: THEME.colors.text.secondary,
              mb: 2,
              wordBreak: 'break-word' 
            }}
          >
            The price is dynamically set between a 1% and 10% fee and it changes everytime someone
            deposits/withdraws/rents/returns wax.
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: 14, sm: 16, md: 18 }, 
              color: THEME.colors.text.secondary 
            }}
          >
            Users are limited to how much they can rent in a single
            transaction but can make multiple requests as long as there is wax available. There is also a free
            system implemented but it has limits too.
          </Typography>
        </Box>
        <Box
          component="img"
          src="./assets/images/side.png"
          alt="CPU Illustration"
          loading="lazy"
          sx={{
            width: '100%',
            maxWidth: { xs: '180px', sm: '220px', md: '300px' },
            height: 'auto',
            objectFit: 'contain',
            transition: 'transform 0.3s ease-in-out',
            order: { xs: -1, md: 2 },
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography sx={{ fontSize: '36px', fontWeight: 700, maxWidth: '860px', textAlign: 'center' }}>
          Users can interact with the smart contract in a number of ways
        </Typography>
        <Typography sx={{ fontSize: '24px', fontWeight: 300, maxWidth: '1000px', textAlign: 'center', mt: 2 }}>
          The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord.
        </Typography>

        <Grid container spacing={3} sx={{ p: 3 }}>
          {cards_brown.map((card, index) => (
            <Grid item xs={12} sm={card.weight * 24} md={card.weight * 12} key={index}>
              <InfoCard1 {...card} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} sx={{ p: 3 }}>
          {cards_red.map((card, index) => (
            <Grid item xs={12} sm={card.weight * 24} md={card.weight * 12} key={index}>
              <InfoCard2 {...card} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ width: '100%', p: 3, maxWidth: '1100px' }}>
        <StyledContainer>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Stay up to date with Limitless WAX
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            Join Community
          </Button>
        </StyledContainer>
      </Box>
    </Box>
  );
};

export default MainSection;