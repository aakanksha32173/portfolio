'use client';
import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 4,
        mt: 12,
        backgroundColor: 'primary.light',
        textAlign: 'center',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="body1">
          © 2025 Aakanksha Trivedi
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href="https://www.linkedin.com/in/aakanksha-trivedi/" target="_blank" rel="noopener" color="inherit">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="https://github.com/aakanksha32173" target="_blank" rel="noopener" color="inherit">
            <GitHubIcon fontSize="large" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
