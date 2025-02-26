import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Stack } from '@mui/material';
import { School, WorkspacePremium, EmojiEvents } from '@mui/icons-material';

const certifications = [
  {
    title: "Full Stack Web Engineer",
    institute: "NITSEP (Nationwide IT Skillsets Expansion Program)",
    duration: "1 Year - Comprehensive Advanced Course",
    icon: (
      <Stack direction="row" spacing={1} alignItems="center">
        <School sx={{ color: '#4caf50', fontSize: 40 }} />
        <EmojiEvents sx={{ color: '#ff9800', fontSize: 40 }} />
      </Stack>
    ),
    description: "Comprehensive training in full-stack web development, covering HTML, CSS, JavaScript, PHP, Laravel, React, Node.js, Express, MongoDB, and project deployment."
  },
  {
    title: "Full Stack Web Development",
    institute: "ZAFF Institute",
    duration: "8 Months - Advanced Course",
    icon: (
      <Stack direction="row" spacing={1} alignItems="center">
        <School sx={{ color: '#2196f3', fontSize: 40 }} />
        <EmojiEvents sx={{ color: '#ff9800', fontSize: 40 }} />
      </Stack>
    ),
    description: "Advanced training focusing on modern web technologies, including MERN stack, Material-UI, Tailwind CSS, Git, GitHub, and best practices for full-stack applications."
  }
];

function Certifications() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box my={5} textAlign="center">
        <Typography
          variant="h2"
          gutterBottom
          fontWeight="bold"
          color="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <WorkspacePremium sx={{ color: '#ff5722', fontSize: 40 }} />
          My Certifications
        </Typography>

        <Typography variant="h6" color="textSecondary" paragraph>
          Here are my professional certifications that demonstrate my expertise and dedication to continuous learning.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ flexGrow: 1, mb: 6 }}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                padding: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': { boxShadow: 8, transform: 'scale(1.05)' }
              }}
            >
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                  {cert.icon}
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {cert.institute}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" display="block">
                      Duration: {cert.duration}
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                      {cert.description}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      
    </Container>
  );
}

export default Certifications;
