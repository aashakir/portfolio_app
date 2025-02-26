import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, Button, Paper, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import profilePic from '../assets/profile.jpg';
import sabrosoLogo from '../assets/sabroso-logo.png';
import metaSageLogo from '../assets/meta-sage-logo.png';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Theme configuration for light and dark modes
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Fallback image URL for error handling
  const fallbackImage = 'https://via.placeholder.com/150?text=Image+Not+Found';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={3} sx={{ minHeight: '100vh', p: 3 }}>
        <Container>
          <Box my={4} textAlign="center">
            {/* Profile Picture */}
            <Box mb={3}>
              <img
                src={profilePic}
                alt="Akhlaq Ahmad Shakir"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                }}
                onError={(e) => (e.target.src = fallbackImage)}
              />
            </Box>

            {/* Welcome Text */}
            <Typography variant="h3" gutterBottom>
              Welcome to Akhlaq Ahmad Shakir's Portfolio
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Deputy Manager at Sabroso | Meta Sage Software House
            </Typography>

            {/* Introduction Paragraphs */}
            <Typography variant="body1" paragraph>
              Passionate Full-Stack Developer with expertise in modern web technologies. I specialize in building user-friendly web applications using the MERN stack, Material-UI, and Tailwind CSS. My journey includes hands-on experience in developing scalable solutions while continuously enhancing my skill set.
            </Typography>

            <Typography variant="body1" paragraph>
              At Sabroso-owned Meta Sage Software House, I manage innovative projects and applications. My work reflects my dedication to delivering quality solutions with modern technologies.
            </Typography>

            {/* Dark/Light Mode Toggle Button */}
            <Button
              variant="contained"
              onClick={() => setDarkMode(!darkMode)}
              sx={{ mt: 2 }}
            >
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </Button>

            {/* Company Logos Section */}
            <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
              <Grid item xs={6} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={sabrosoLogo}
                    alt="Sabroso Logo"
                    onError={(e) => (e.target.src = fallbackImage)}
                  />
                </Card>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={metaSageLogo}
                    alt="Meta Sage Logo"
                    onError={(e) => (e.target.src = fallbackImage)}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default Home;



