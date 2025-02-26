import React from 'react';
import { Container, Typography, Grid, Paper, Box, Stack } from '@mui/material';
import { Code, Storage, Build, Computer } from '@mui/icons-material';

const skills = [
  { category: 'Frontend', icon: <Code sx={{ color: '#ff5722' }} />, list: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material-UI', 'Tailwind CSS'] },
  { category: 'Backend', icon: <Build sx={{ color: '#4caf50' }} />, list: ['Node.js', 'Express.js', 'PHP', 'Laravel'] },
  { category: 'Database', icon: <Storage sx={{ color: '#2196f3' }} />, list: ['MongoDB', 'MySQL'] },
  { category: 'Tools & Platforms', icon: <Computer sx={{ color: '#ff9800' }} />, list: ['Git & GitHub', 'WordPress'] },
];

function Skills() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary" mb={4}>
        My Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                height: 280,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                '&:hover': { boxShadow: 10, transform: 'scale(1.05)' },
                backgroundColor: '#f0f0f0',
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                {skill.icon}
                <Typography variant="h6" fontWeight="bold" color="secondary">
                  {skill.category}
                </Typography>
              </Stack>

              <Box component="ul" sx={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                {skill.list.map((item, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>
                    <Typography variant="body1" sx={{ fontSize: '1rem', color: '#555' }}>
                      • {item}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;



