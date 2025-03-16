import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

export default function MobileMenu({ open, onClose, toggleDrawer }: { open: boolean, onClose: () => void, toggleDrawer: (newOpen: boolean) => () => void }) {

	interface NavigationItem {
		label: string;
		path: string;
	};

  const navigationItems: NavigationItem[] = [
    { label: 'About Us', path: '/about' },
    { label: 'Account', path: '/account' },
    { label: 'Cpu4sales', path: '/sale' },
    { label: 'Limitlesswax', path: '/limitlesswax' },
    { label: 'Login', path: '/error' }
  ];

	const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  const DrawerList = (
    <Box sx={{ width: 250, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)', height: '100vh', pt: 3 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography sx={{ color: 'white', fontSize: 36, float: 'right', mr: 7, mb: 3 }} onClick={onClose}>X</Typography>
      <List>
        {navigationItems.map((item, index) => (
          <ListItem key={item.path} disablePadding >
            <ListItemButton>
              <ListItemIcon>
              	<Button 
              	  sx={{ color: 'white', fontSize: 24}}
              	  onClick={() => handleNavigation(item.path)}
              	>
              	  {item.label}
              	</Button>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right' sx={{ backgroundColor: 'rgba(0,0,0,0.3)'}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}