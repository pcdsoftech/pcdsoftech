import React from 'react';
import { Box, Typography, Link, useMediaQuery, Theme } from '@mui/material';
import { Container, styled } from '@mui/system';

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const defaultLogoProps: LogoProps = {
  src: './assets/images/logo.png',
  alt: 'Limitless WAX',
  width: 40,
  height: 40
};

interface LinkProps {
  label: string;
  href: string;
}

const Links: readonly LinkProps[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Cpu4sale',
    href: '/'
  },
  {
    label: 'Github',
    href: '/'
  },
  {
    label: 'Privacy',
    href: '/'
  },
  {
    label: 'Account',
    href: '/'
  },
  {
    label: 'LimitlessWAX',
    href: '/'
  },
  {
    label: 'Discord',
    href: '/'
  },
  
  {
    label: 'Terms',
    href: '/'
  },
]

const StyledLink = styled(Link)({
  width: '25%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 16,
  textDecoration: 'none',
  color: '#fff',
});

const Footer = () => {

  const isSmallScreen: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: '#331E22', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth="lg">
        <Box sx={{p: 3, mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1100px', bgcolor: '#331E22'}}>
          <Box width={isSmallScreen ? "100%" :"40%"} sx={{ display: 'flex', flexDirection: 'column'}}>
            {defaultLogoProps.src ? (
              <img
                src={defaultLogoProps.src}
                alt={defaultLogoProps.alt}
                width={defaultLogoProps.width}
                height={defaultLogoProps.height}
                style={{ objectFit: 'contain' }}
              />
            ) : (
              <Typography variant="h6" component="div">
                {defaultLogoProps.alt}
              </Typography>
            )}
            <Typography sx={{ mt: 2}}>
              If you need help or have any question? please go through our discord.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2}}>
              © 2025 Limitless Wax. All rights reserved.
            </Typography>
            </Box>
            {!isSmallScreen &&
              <Box sx={{ display: 'flex', flexWrap: 'wrap',}}>
              {Links.map((item, index) => (
                <StyledLink href={item.href}>
                  {item.label}
                </StyledLink>
            ))}
          </Box>}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;