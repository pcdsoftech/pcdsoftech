import React from 'react';
import { Box, Grid, useMediaQuery, Theme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { InfoCard1, InfoCard2 } from './InfoCards';
import { CardProps } from '../types';
import 'swiper/css';
import 'swiper/css/pagination';

interface CardSectionProps {
  brownCards: CardProps[];
  redCards: CardProps[];
}

const CardSection: React.FC<CardSectionProps> = ({ brownCards, redCards }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const swiperConfig = {
    modules: [Autoplay, Pagination],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true
  };

  if (isMobile) {
    return (
      <Box sx={{ width: '100%' }}>
        <Swiper {...swiperConfig}>
          {brownCards.map((card, index) => (
            <SwiperSlide key={`brown-${index}`}>
              <Box sx={{ p: 1 }}>
                <InfoCard1 {...card} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box sx={{ mt: 3 }}>
          <Swiper {...swiperConfig}>
            {redCards.map((card, index) => (
              <SwiperSlide key={`red-${index}`}>
                <Box sx={{ p: 1 }}>
                  <InfoCard2 {...card} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3} sx={{ p: 3 }}>
        {brownCards.map((card, index) => (
          <Grid item xs={12} sm={card.weight * 24} md={card.weight * 12} key={index}>
            <InfoCard1 {...card} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ p: 3 }}>
        {redCards.map((card, index) => (
          <Grid item xs={12} sm={card.weight * 24} md={card.weight * 12} key={index}>
            <InfoCard2 {...card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardSection; 