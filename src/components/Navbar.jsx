import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Akhlaq Ahmad Shakir
        </Typography>

        <Box>
          <Button color="inherit" href="home">Home</Button>
          <Button color="inherit" href="about">About</Button>
          <Button color="inherit" href="skills">Skills</Button>
          <Button color="inherit" href="projects">Projects</Button>
          <Button color="inherit" href="certifications">Certifications</Button>
          <Button color="inherit" href="contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


