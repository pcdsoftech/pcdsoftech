import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Theme, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './header/MobileMenu';
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
  width: 40,
  height: 40
};

const navigationItems: NavigationItem[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' },
  { label: 'Cpu4sales', path: '/sale' },
  { label: 'Limitlesswax', path: '/limitlesswax' },
  { label: 'Login', path: '/error' }
];

const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box position="static" sx={{ boxShadow: 'none', py: 2,}} style={{ backgroundColor: 'inherit' }}>
      <Toolbar>
        <Link sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }} href="/">
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
        </Link>
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu" 
            onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: 36 }} />
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
      <MobileMenu open={open} onClose={toggleDrawer(false)} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Header;