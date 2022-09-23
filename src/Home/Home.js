import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Home.css'
import { ListItemIcon, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight.js/HomeRight';

export default function Home() {
  const [styleHomeLeft,setStyleHomeLeft]= useState({
    marginLeft: '0%',
    width: '100%',
    height: '90vh',
    overflowY: 'scroll',
    transition: '0.3s'
  })

  const [styleHomeRight,setStyleHomeRight]= useState({
    display: 'none',
  })

  const [btnStyle,setBtnstyle]=useState({
    transform: 'rotateY(0deg)',
    color:'white',
    transition:"3s"
  })

  const [selecionado,setSelecionado]=useState(true)
  
  const handleLayout = ()=>{
    if(selecionado){
      setStyleHomeLeft({
        marginLeft: '-100%',
        width: '100%',
        height: '90vh',
        overflowY: 'scroll',
        transition: '0.3s'
       })
       setStyleHomeRight({
        display:'block'
       })
       setBtnstyle({
        transform: 'rotate(-180deg)',
        color:'black',
        transition:"0.3s"
       })
       setSelecionado(!selecionado)
    }else{
      setStyleHomeLeft({
        marginLeft: '0%',
        width: '100%',
        height: '90vh',
        overflowY: 'scroll',
        transition: '0.3s'
      })
      setSelecionado(!selecionado)
      setStyleHomeRight({
        display:'none'
       })
       setBtnstyle({
        transform: 'rotate(0deg)',
        transition:"0.3s",
        color:'black',
       })
    }
    
  }
  return (
    <React.Fragment>
      <div style={{background:'',height:'70px'}}>
        <Header/>
      </div>
      <CssBaseline />
        <div className='btnMobileAppBar'>
          <Tooltip sx={btnStyle}>
            <ArrowBackIosIcon  onClick={handleLayout}/>
          </Tooltip>
        </div>
      
      <div className='homeContainer'>
        <div className='homeMobileLeft' style={styleHomeLeft}>
           <HomeLeft handleLayout={handleLayout}/>
        </div>
        <div className='homeLeft' >
           <HomeLeft/>
        </div>
        <div className='homeMobileRight' style={styleHomeRight}>
          <Box>
            <HomeRight/>
          </Box>
        </div>
        <div className='homeRight'>
          <Box>
            <HomeRight/>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}
