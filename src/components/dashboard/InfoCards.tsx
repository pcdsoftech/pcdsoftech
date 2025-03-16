import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';
import { CardProps } from './types';

const StyledCard1 = styled(Card)({
  backgroundColor: 'rgba(51,30,34,0.8)',
  color: '#fff',
  height: '160px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': { transform: 'scale(1.05)' }
});

const StyledCard2 = styled(Card)({
  backgroundColor: '#4A1E2A',
  color: '#fff',
  height: '300px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': { transform: 'scale(1.05)' }
});

export const InfoCard1: React.FC<CardProps> = ({ title, description }) => (
  <StyledCard1>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        {description}
      </Typography>
    </CardContent>
  </StyledCard1>
);

export const InfoCard2: React.FC<CardProps> = ({ title, description }) => (
  <StyledCard2>
    <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        {description}
      </Typography>
    </CardContent>
  </StyledCard2>
); 