import React from 'react';
import { 
  Container, Typography, Box, List, ListItem, ListItemIcon, 
  Divider, Chip, Stack, Paper, Grid 
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const skills = {
  frontend: [
    '🌐 HTML, CSS & JavaScript – Strong hands-on experience in real-world applications.',
    '⚙️ jQuery & Bootstrap – Proficient in building dynamic, responsive UIs.',
    '⚛️ ReactJS – Extensive experience in high-performance UIs with component-based architecture.',
    '💼 Material-UI (MUI) – Building modern, responsive React UIs with best practices.',
    '🎨 Tailwind CSS – Fast, utility-first styling for modern web applications.'
  ],
  backend: [
    '🚀 PHP & Laravel – Building powerful, scalable server-side applications.',
    '🛠️ NodeJS, Express & MongoDB – Solid full-stack development proficiency.',
    '🔒 RESTful APIs – Developing secure and scalable endpoints.'
  ],
  tools: [
    '📦 Git & GitHub – Efficient version control and collaboration.',
    '🌍 WordPress – Creating customized websites and blogs.',
    '🏆 Capstone Project – Delivered a comprehensive full-stack solution demonstrating end-to-end expertise.'
  ]
};

const renderSkills = (title, skillList) => (
  <Paper elevation={8} sx={{ padding: 3, borderRadius: 3, mb: 4, backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
    <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', textTransform: 'uppercase', mb: 2 }}>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <List>
      {skillList.map((skill, index) => (
        <ListItem key={index} sx={{ py: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#444' }}>
            {skill}
          </Typography>
        </ListItem>
      ))}
    </List>
  </Paper>
);

function About() {
  return (
    <Container>
      <Box my={5}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#222', letterSpacing: '1px', mb: 2 }}>
          About Me
        </Typography>
        <Typography variant="h6" color="textSecondary" align="center" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
          I am Akhlaq Ahmad Shakir, a passionate Full Stack Web Engineer and Developer with hands-on experience in modern web technologies, including the MERN stack, PHP, and WordPress.
        </Typography>

        <Box my={5}>
          <Typography variant="h4" align="center" sx={{ color: '#222', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <SignalCellularAltIcon sx={{ mr: 1, fontSize: '2.5rem', color: '#ff5722' }} /> My Key Skills
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>{renderSkills('🌟 Frontend Development', skills.frontend)}</Grid>
            <Grid item xs={12} md={6} lg={4}>{renderSkills('⚙️ Backend Development', skills.backend)}</Grid>
            <Grid item xs={12} md={6} lg={4}>{renderSkills('🛠️ Tools & Platforms', skills.tools)}</Grid>
          </Grid>
        </Box>

        {/* Skill Chips */}
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 4, flexWrap: 'wrap' }}>
          {[
            { label: '🌐 HTML, CSS & JavaScript', color: 'primary' },
            { label: '⚛️ ReactJS', color: 'secondary' },
            { label: '🚀 PHP & Laravel', color: 'success' },
            { label: '🛠️ NodeJS & Express', color: 'info' },
            { label: '🎨 Tailwind & Material-UI', color: 'warning' },
            { label: '📦 Git & GitHub', color: 'error' }
          ].map((chip, index) => (
            <Chip
              key={index}
              label={chip.label}
              color={chip.color}
              variant="filled"
              sx={{
                borderRadius: '24px',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)'
                }
              }}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default About;

