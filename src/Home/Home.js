import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
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
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Home(props) {
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
        transform: 'rotate(180deg)',
        color:'white',
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
        transition:"0.3s"
       })
    }
    
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{background:'',height:'8vh'}}>
          <Toolbar>
            <Typography variant="h6" component="div">
               <div className='btnMobileAppBar'>
                <Tooltip >
                  <ArrowBackIosIcon sx={btnStyle} onClick={handleLayout}/>
                </Tooltip>
               </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
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
