import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

// Importing project images
import portfolioImg from '../assets/portfolioproject.jpg';
import shopitImg from '../assets/shopitproject.jpg';
import capstoneImg from '../assets/capstoneproject.jpg';

// Project Data
const projects = [
  {
    title: "Portfolio Website",
    image: portfolioImg,
    description: "A modern and stylish personal portfolio showcasing my skills, projects, and expertise in web development."
  },
  {
    title: "ShopIT E-Commerce",
    image: shopitImg,
    description: "A full-stack e-commerce platform with MERN stack, secure authentication, and payment integration."
  },
  {
    title: "Capstone Project",
    image: capstoneImg,
    description: "A large-scale full-stack application integrating advanced technologies and best development practices."
  }
];

function Projects() {
  return (
    <Container>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', my: 4 }}>
         My Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              height: 400, // Ensures all cards are the same height
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)'
              }
            }}>
              {/* Image Box to ensure same size */}
              <Box sx={{
                width: '100%',
                height: 220, // Same height for all images
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: '#f5f5f5'
              }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain' // Ensures full image visibility without cutting
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;





