import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, SxProps } from '@mui/material';
import DataCard from './DataCard';
import SimpleCard from './SimpleCard';

interface StatData {
  title: string;
  value: string;
}

const cpuStats: StatData[] = [
  { title: "Total Free CPU", value: "6.12354" },
  { title: "Total Free CPU", value: "6.12354" },
  { title: "Total Free CPU", value: "6.12354" },
  { title: "Total Free CPU", value: "6.12354" }
];

const CardSection = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const containerStyles: SxProps = {
    display: 'flex',
    flexDirection: isXsScreen ? 'column' : 'row',
    justifyContent: 'space-between',
    p: isXsScreen ? 1 : isSmallScreen ? 1.5 : 3,
    gap: isXsScreen ? 1.5 : isSmallScreen ? 2 : 3
  };

  const columnStyles: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    width: isXsScreen ? '100%' : '30%',
    height: isXsScreen ? 'auto' : isSmallScreen ? 400 : 640,
    gap: isXsScreen ? 1 : isSmallScreen ? 1.5 : 3
  };

  const simpleCardContainerStyles: SxProps = {
    height: isXsScreen ? 'auto' : isSmallScreen ? 180 : 300,
    display: 'flex',
    flexDirection: 'column',
    gap: isXsScreen ? 1 : isSmallScreen ? 1.5 : 3
  };

  const cpuStatsStyles: SxProps = {
    bgcolor: "#831F3F",
    width: isXsScreen ? "100%" : "30%",
    p: isXsScreen ? 1 : isSmallScreen ? 1.5 : 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: isXsScreen ? '16px' : isSmallScreen ? '25px' : '50px',
    height: isXsScreen ? 'auto' : isSmallScreen ? 400 : 'auto',
    gap: 1
  };

  const titleStyles: SxProps = {
    fontSize: isXsScreen ? "24px" : isSmallScreen ? "20px" : "36px"
  };

  const valueStyles: SxProps = {
    fontSize: isXsScreen ? "32px" : isSmallScreen ? "32px" : "64px"
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={columnStyles}>
        <DataCard title="Requested CPU for self total:" value="6.12354" />
        <DataCard title="Requested CPU for self total:" value="6.12354" />
      </Box>

      <Box sx={columnStyles}>
        <Box sx={simpleCardContainerStyles}>
          <SimpleCard title="Updated Collected Fees" />
          <SimpleCard title="Updated Collected Fees" />
        </Box>
        <DataCard title="Deposited WAX to earn" value="6.12354" />
      </Box>

      <Box sx={cpuStatsStyles}>
        {cpuStats.map((stat, index) => (
          <React.Fragment key={index}>
            <Typography sx={titleStyles}>{stat.title}</Typography>
            <Typography sx={valueStyles}>{stat.value}</Typography>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default CardSection;