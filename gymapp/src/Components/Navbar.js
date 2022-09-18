import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../Assets/images/Logo.png'

const Navbar = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-around" sx={{ gap: {sm: '110px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px="20">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ borderRadius:'30px', width: '50px', height: '48px', margin: '0 30px' }} />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="flex-end">
            <Link to="/"  style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>
              Home
            </Link>
        </Stack> 
      </Stack>
  </>
   
  )
}

export default Navbar