import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip, Stack } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

// Project Data
const projects = [
  {
    title: "Portfolio App",
    description: "A personal portfolio website showcasing my skills, projects, and certifications.",
    image: require('../assets/portfolioimage.jpg'),
    link: "#",
    tech: ["React", "Material-UI", "JavaScript"],
    github: "#"
  },
  {
    title: "ShopIT E-commerce App",
    description: "A full-stack MERN e-commerce platform with product management and secure payments.",
    image: require('../assets/shopitprofile.jpg'),
    link: "#",
    tech: ["MERN", "Redux Toolkit", "Stripe"],
    github: "#"
  },
  {
    title: "Capstone Full-Stack Project",
    description: "A comprehensive application integrating all my full-stack skills.",
    image: require('../assets/capstoneproject.jpg'),
    link: "#",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#"
  }
];

function Projects() {
  return (
    <Container maxWidth="lg">
      <Box my={5} textAlign="center">
        <Typography variant="h2" gutterBottom fontWeight="bold" color="primary">
          My Projects
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Here are some of the standout projects I've worked on, showcasing my full-stack development skills.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 400, margin: 'auto', borderRadius: 3, boxShadow: 4 }}>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'contain',
                  height: 250
                }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>

                {/* Technology Chips */}
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {project.tech.map((tech, idx) => (
                    <Chip key={idx} label={tech} color="secondary" size="small" />
                  ))}
                </Stack>

                {/* Action Buttons */}
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Launch />}
                    href={project.link}
                    target="_blank"
                    size="small"
                  >
                    Live Demo
                  </Button>

                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    size="small"
                  >
                    GitHub
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;






