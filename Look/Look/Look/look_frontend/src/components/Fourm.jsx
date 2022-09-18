import { minWidth } from '@mui/system';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
 
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Posts = () => {
    return(
    <body> 
        <b style={{fontSize:'30px' , marginLeft:'350px'}}> Look Fourm </b>
        <div style={{   marginBottom:'45px'}}></div>
        <div style={{ fontFamily:'sans-serif' , marginBottom:'25px',  marginLeft:'400px' }}>Post</div>
        <div style={{marginLeft:'330px' , marginBottom:'25px', width:'400px'}}> <TextField id='outlined-multiline-static' label='Post' multiline  rows={8} /> </div>
        <div style={{ marginLeft:'400px' , marginBottom:'45px'}}>  <Button  variant='contained' size="medium">Post</Button></div>
    </body>   
    );
 };

 export default Posts;

