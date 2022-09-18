import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../Assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ borderRadius:'30px',  width: '50px', height: '50px' }} />
    </Stack>
    <Typography color="#000000" variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Tedy </Typography>
  </Box>
);

export default Footer;