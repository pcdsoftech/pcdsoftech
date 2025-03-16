import * as React from 'react';
import { Tabs, Tab, Box, Typography, useMediaQuery, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import TabFirst from './TabFirst';
import TabSecond from './TabSecond';
import TabThird from './TabThird';
import TabFourth from './TabFourth';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled(Tab)({
  color: "white",
  fontSize: 16,
  '@media (min-width: 600px)': {
    fontSize: '24px',
  },
  maxWidth: 600,
  '&.Mui-selected': {
    backgroundColor: "#391E24",
    color: 'white',
    border: 'none',
  },
})


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '65%' }}
    >
      {value === index && (
        <Box sx={{ p: isMobile? 1 : 3, }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#4A1E2A', display: 'flex', height: 400, my: 8 }}
    >
      <AntTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ bgcolor: '#831F3F', border: 'none', width: '35%' }}
      >
        <StyledTab label="Request COU for Self" {...a11yProps(0)} />
        <StyledTab label="Stake to User" {...a11yProps(1)} />
        <StyledTab label="Deposit and Earn" {...a11yProps(2)} />
        <StyledTab label="Withdraw" {...a11yProps(3)} />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <TabFirst />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabSecond />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabThird />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabFourth />
      </TabPanel>
    </Box>
  );
}