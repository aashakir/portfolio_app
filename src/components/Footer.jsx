import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#1976d2', color: 'white' }}>
      <Typography variant="body2">© {new Date().getFullYear()} Akhlaq Ahmad Shakir. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;

