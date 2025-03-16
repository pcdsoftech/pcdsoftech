import React from 'react';
import { Box, Typography, Avatar, Grid, useMediaQuery, Theme } from '@mui/material';

interface TeamMemberProps {
  name: string;
  description: string;
  image?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, description, image }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar
        alt={name}
        src={image || ''}
        sx={{
          width: isMobile ? 48 : 128,
          height: isMobile ? 48 : 128,
          margin: '0 auto 2',
          transition: 'width 0.3s, height 0.3s',
          backgroundColor: "#8C243F"
        }}
      />
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'bold',
          fontSize: isMobile ? '1rem' : '1.25rem',
          mt: 2
        }}
      >
        {name}
      </Typography>
      {!isMobile && <Typography 
        variant="body2" 
        sx={{ 
          width: isMobile ? '160px' : '200px',
          fontSize: isMobile ? '0.875rem' : '1rem'
        }}
      >
        {description}
      </Typography>}
    </Box>
  );
};

const TeamSection: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={6}>
        <TeamMember
          name="Vaaaan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam."
          image="/vaaan.jpg"
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TeamMember
          name="deraXyna"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam."
          image="/deraxyna.jpg"
        />
      </Grid>
    </Grid>
  );
};

export default TeamSection;