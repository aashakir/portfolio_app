import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Snackbar, Alert, Link, Box } from '@mui/material';
import { Email, Phone, Send } from '@mui/icons-material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    console.log('Form Submitted:', formData);
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          📨 Get in Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 3 }}>
          Feel free to contact me. I’d love to hear from you!
        </Typography>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Send />}
                sx={{ borderRadius: 2, px: 4, py: 1 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Contact Information Section with Icons */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <Email sx={{ mr: 1, color: 'primary.main' }} />
            <Link href="mailto:aashakir484@gmail.com" underline="hover" color="primary">
              aashakir484@gmail.com
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Phone sx={{ mr: 1, color: 'primary.main' }} />
            <Link href="tel:+923214700537" underline="hover" color="primary">
              +92 321 4700537
            </Link>
          </Typography>
        </Box>
      </Paper>

      {/* Snackbar for Success Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Message sent successfully! I will get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;



