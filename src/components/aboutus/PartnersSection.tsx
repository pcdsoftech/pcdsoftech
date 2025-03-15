import React from 'react';
import { Box, Typography, useMediaQuery, Theme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface PartnerImage {
  url: string;
  alt: string;
}

const partnerImages: PartnerImage[] = [
  { url: './assets/images/partner.png', alt: 'Partner 1' },
  { url: './assets/images/partner.png', alt: 'Partner 2' },
  { url: './assets/images/partner.png', alt: 'Partner 3' },
  { url: './assets/images/partner.png', alt: 'Partner 4' },
  { url: './assets/images/partner.png', alt: 'Partner 5' },
  { url: './assets/images/partner.png', alt: 'Partner 6' },
  { url: './assets/images/partner.png', alt: 'Partner 7' },
  { url: './assets/images/partner.png', alt: 'Partner 8' },
  { url: './assets/images/partner.png', alt: 'Partner 9' },
  { url: './assets/images/partner.png', alt: 'Partner 10' },
];

const PartnersSection: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        my: 3,
        px: isMobile ? 2 : 4,
        mx: 'auto'
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 4,
          fontSize: isMobile ? '1.25rem' : '2.5rem',
          color: '#fff'
        }}
      >
        Partners
      </Typography>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={6}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 6,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }}
      >
        {partnerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: isMobile ? '40px' : '120px',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease-in-out',
                img: {
                  maxWidth: '80%',
                  maxHeight: '80%',
                  objectFit: 'contain'
                }
              }}
            >
              <img src={image.url} alt={image.alt} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PartnersSection;