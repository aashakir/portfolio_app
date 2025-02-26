import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  // Social links (update as needed)
  const socialLinks = [
    { label: "Email", url: "mailto:aashakir484@gmail.com" },
    { label: "GitHub", url: "https://github.com/yourgithubusername" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourlinkedinprofile" }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 4,
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1">
          © {new Date().getFullYear()} Akhlaq Ahmad Shakir | All Rights Reserved
        </Typography>

        {/* Social Links */}
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          {socialLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.url}
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none', fontWeight: '500' }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
