import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Card, CardContent } from '@mui/material';

const UserSection: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isXsScreen ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isXsScreen ? 1 : isSmallScreen ? 2 : 3,
        borderRadius: 2,
        margin: '0 auto',
        gap: isXsScreen ? 2 : isSmallScreen ? 2 : 3
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        width: isXsScreen ? '100%' : 'auto'
      }}>
        <Box
          sx={{
            width: isXsScreen ? '60px' : isSmallScreen ? '100px' : 172,
            height: isXsScreen ? '60px' : isSmallScreen ? '100px' : 172,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            flexShrink: 0
          }}
        />
        <Typography 
          sx={{ 
            fontSize: isXsScreen ? '1.2rem' : isSmallScreen ? '1.8rem' : 48,
            ml: isXsScreen ? 1.5 : "20px",
          }} 
          align="left"
        >
          ki.fg.wam
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'flex',
        gap: isXsScreen ? 1 : 2,
        width: isXsScreen ? '100%' : 'auto'
      }}>
        <Card sx={{ 
          flex: isXsScreen ? 1 : 'none',
          width: isSmallScreen ? 160 : 200,
          bgcolor: '#391E24', 
          color: "white", 
          borderRadius: isXsScreen ? "12px" : isSmallScreen ? "16px" : "25px",
        }}>
          <CardContent sx={{ 
            p: isXsScreen ? 1.5 : isSmallScreen ? 1.75 : 2,
            '&:last-child': { pb: isXsScreen ? 1.5 : isSmallScreen ? 1.75 : 2 }
          }}>
            <Typography sx={{ 
              fontSize: isXsScreen ? '0.9rem' : isSmallScreen ? '1.1rem' : 26,
              mb: 0.5
            }} gutterBottom>
              Total WAX
              <br />
              Balance:
            </Typography>
            <Typography sx={{ 
              fontSize: isXsScreen ? '1rem' : isSmallScreen ? '1.2rem' : 26
            }} component="div">
              6.12354672
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ 
          flex: isXsScreen ? 1 : 'none',
          width: isSmallScreen ? 160 : 200,
          bgcolor: '#391E24', 
          color: "white", 
          borderRadius: isXsScreen ? "12px" : isSmallScreen ? "16px" : "25px",
        }}>
          <CardContent sx={{ 
            p: isXsScreen ? 1.5 : isSmallScreen ? 1.75 : 2,
            '&:last-child': { pb: isXsScreen ? 1.5 : isSmallScreen ? 1.75 : 2 }
          }}>
            <Typography sx={{ 
              fontSize: isXsScreen ? '0.9rem' : isSmallScreen ? '1.1rem' : 26,
              mb: 0.5
            }} gutterBottom>
              Total USD
              <br />
              Balance:
            </Typography>
            <Typography sx={{ 
              fontSize: isXsScreen ? '1rem' : isSmallScreen ? '1.2rem' : 26
            }} component="div">
              $1.9321245
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserSection;