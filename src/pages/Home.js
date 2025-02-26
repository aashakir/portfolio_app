import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Card, 
  CardMedia, Button, ThemeProvider, createTheme, CssBaseline 
} from '@mui/material';
import profilePic from '../assets/profile.jpg';
import sabrosoLogo from '../assets/sabroso-logo.png';
import metaSageLogo from '../assets/meta-sage-logo.png';

// Theme configuration (moved outside to avoid re-creation on re-renders)
const getTheme = (mode) => createTheme({
  palette: { mode },
});

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <Container sx={{ minHeight: '100vh', py: 4 }}>
        {/* Home Section */}
        <Box id="home" textAlign="center">
          <Box mb={3}>
            <img
              src={profilePic}
              alt="Akhlaq Ahmad Shakir - Profile"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              }}
            />
          </Box>

          <Typography variant="h3" gutterBottom>
            Welcome to Akhlaq Ahmad Shakir's Portfolio
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Deputy Manager at Sabroso | Meta Sage Software House
          </Typography>

          <Typography variant="body1" paragraph>
            Passionate Full-Stack Developer specializing in MERN stack, Material-UI, 
            and Tailwind CSS. I focus on building scalable web applications with a 
            strong emphasis on modern UI/UX.
          </Typography>

          <Typography variant="body1" paragraph>
            At Sabroso-owned Meta Sage Software House, I lead innovative projects and 
            applications, ensuring high-quality development standards.
          </Typography>

          <Button 
            variant="contained" 
            onClick={() => setDarkMode(!darkMode)}
            sx={{ mt: 3 }}
          >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </Button>

          {/* Company Logos */}
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {[{ img: sabrosoLogo, alt: 'Sabroso Logo' }, { img: metaSageLogo, alt: 'Meta Sage Logo' }].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia component="img" height="140" image={item.img} alt={item.alt} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
