import React from 'react'
import {Box, Stack, Typography , Button} from '@mui/material'
import HeroBannerImage from '../Assets/images/Banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{ lg:'212px', xs:'70px'}, 
      ml : {sm:'50px'}
    }} position="relative" p =" 20px">
    <Typography color="#FF2625 " fontWeight="600" fontSize="26px">
      Get Fit
    </Typography>
    <Typography fontWeight={700} 
    sx={{fontSize: { lg:'44px', xs:'40px'}}} mp="23px" mt="30px">
      Sweat, Smile <br/> and Repeat
    </Typography>
    <Typography fontSize={22} lineHeight= "35px" mb={4}>
      Checkout the most effective way to get a good sweat
    </Typography >
    <Button color="error" variant="contained" href="/exercise/0002"> Explore 
    Excercises </Button>
    <Typography
    fontWeight={600} 
    color="#ff2625" 
    sx={{
      opacity:0.1,
      display:{lg:'block', xs:'none'}
    }}
      fontSize="200px"
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
  </Box>
  )
}

export default HeroBanner