import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationItem {
  label: string;
  path: string;
}

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const defaultLogoProps: LogoProps = {
  src: './assets/images/logo.png',
  alt: 'Limitless WAX',
  width: 150,
  height: 40
};

const navigationItems: NavigationItem[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' },
  { label: 'Spudnik', path: '/spudnik' },
  { label: 'Limitlesswax', path: '/limitlesswax' },
  { label: 'Login', path: '/login' }
];

const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', py: 2,}} style={{ backgroundColor: 'inherit' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
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
        </Box>
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navigationItems.map((item: NavigationItem) => (
              <Button 
                key={item.path}
                color="inherit"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;