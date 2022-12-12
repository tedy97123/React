 
import { About1, Footer, Header, Skills,Testimonial, Work} from './container';
import Navbar from './components/Navbar/Navbar'
import './App.scss';
import React,{ useState, useEffect} from 'react';
function App() {
  return (
  
    <div className="app">
       <Navbar/> 
       <Header/>
       <About1/>
       <Work/>
       <Skills/> 
       <Footer/>
    </div>
  );
}

export default App;



 