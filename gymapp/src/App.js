import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './CSS/App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}> 
   <CssBaseline />
    <Box width="400px" sx={{ width: { lg:'1040px' ,xl: '2190px'} }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail/>} />
      </Routes>
    
    </Box>
  </ThemeProvider>
);

export default App;