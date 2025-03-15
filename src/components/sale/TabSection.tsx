import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, TextField, Button, Stack } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface VerticalTabsProps {
    onAmountChanged: (amount: string) => void;
    amount: string;
    onRequestStake: () => void;
    days: string;
    onDaysChanged: (days: string) => void;
}

export default function TabSection({ amount, onAmountChanged, onRequestStake, days, onDaysChanged }: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', minHeight: '300px' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Request CPU for Self" />
        <Tab label="Stake to User" />
        <Tab label="Deposit and Earn" />
        <Tab label="Withdraw" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Stack spacing={2}>
            <Typography>Amount to send</Typography>
            <TextField
                label="WAX"
                variant="outlined"
                value={amount}
                onChange={(e) => onAmountChanged(e.target.value)}
                sx={{ width: '200px' }} // Adjust width as needed
            />
            <Typography>Number of days</Typography>
            <TextField
                label="Days"
                variant="outlined"
                value={days}
                onChange={(e) => onDaysChanged(e.target.value)}
                sx={{ width: '200px' }} // Adjust width as needed
            />
            <Typography>Amount to be staked</Typography>
            <Typography>11.349123158 WAX</Typography>
            <Button variant="outlined" onClick={onRequestStake}>Request self stake</Button>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Stake to User Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Deposit and Earn Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Withdraw Content
      </CustomTabPanel>
    </Box>
  );
}