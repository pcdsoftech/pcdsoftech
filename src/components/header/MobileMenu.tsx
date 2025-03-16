import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

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
    <Box sx={{ width: 250, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)', height: '100vh' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navigationItems.map((item, index) => (
          <ListItem key={item.path} disablePadding >
            <ListItemButton>
              <ListItemIcon>
              	<Button 
              	  sx={{ color: 'white'}}
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
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ backgroundColor: 'rgba(0,0,0,0.3)'}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}