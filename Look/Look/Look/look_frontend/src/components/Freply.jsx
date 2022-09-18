import { minWidth } from '@mui/system';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
 
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Reply = () => {
    return(
  <div>
        <div style={{   marginBottom:'45px'}}></div>
        <div style={{ fontFamily:'sans-serif' , marginBottom:'25px',  marginLeft:'400px' }}>Reply</div>
        <div style={{marginLeft:'330px' , marginBottom:'25px', width:'400px'}}><TextField id="outlined-name" label="Name" value={Reply} /> </div>
        <div style={{ marginLeft:'400px' , marginBottom:'45px'}}>  <Button  variant='contained' size="medium">Reply</Button></div>
 </div>
       
    );
 };

export default Reply;