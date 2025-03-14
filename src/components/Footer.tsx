import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, textAlign: 'center', mt: 4, borderTop: '1px solid #525252' }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 Limitless Wax. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;