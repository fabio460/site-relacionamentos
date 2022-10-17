import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Perfil from './Perfil';
import TelaDeListaDeProfissionais from '../HomeLeftContainer/TelaDeListaDeProfissionais';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Pagination, Stack } from '@mui/material';
import ControlledRadioButtonsGroup from './ControlledRadioButtonsGroup';
import ListaPessoaisProximas from './ListaPessoaisProximas';
import PerfilEditar from './PerfilEditar';
//import ListaDeProfissionais from './ListaDeProfissionais';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding:"0px" }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 1,
  right: 1,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function HomeLeft({handleLayout}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [PerfilEdit, setPerfilEdit] = useState(false)

  const handleChangePage = (event, value) => {
    ScrollTop()
    setPage(value);
    
  };

  const [intervaloDePaginacao, setintervaloDePaginacao] = useState(8)
  const [paginaInicial, setpaginaInicial] = useState(1)
  const [paginaFinal, setpaginaFinal] = useState(intervaloDePaginacao)
  const [TamanhoList, setTamanhoList] = useState()


 useEffect(()=>{
  setpaginaInicial( intervaloDePaginacao*page - intervaloDePaginacao)
  setpaginaFinal( intervaloDePaginacao*page - 1)
 },[page])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1)
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <ArrowUpwardIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  const boxStyle ={
    bgcolor: '#e3f2fd',
    width: "100%",
    position: 'relative',
    minHeight: 200,
    padding:'0px',
    "@media (max-width:400px)":{
      padding:'0px'
    }
  } 

  const ScrollTop = (i)=>{
    document.querySelectorAll('.SwipeableViews').forEach(e=>{
      e.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })
  }

  return (
    <Box
      sx={boxStyle}
    >
      <Box position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label=""
          sx={{padding:"5px"}}
        >
          <Tab label="todos" {...a11yProps(0)} sx={{fontSize:'11px'}}/>
          <Tab label="Perfil" {...a11yProps(1)} sx={{fontSize:'11px'}}/>
          <Tab label="perto de mim" {...a11yProps(2)} sx={{fontSize:'11px'}}/>
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <div className='SwipeableViews SwipeableViewsList'>
            <TelaDeListaDeProfissionais
              paginaInicial={paginaInicial}
              paginaFinal={paginaFinal}
              setTamanhoList={setTamanhoList}
            />
           <div className='paginacao' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50px'}}>
            <Pagination count={Math.ceil(TamanhoList/intervaloDePaginacao)} variant="outlined" color="secondary" page={page} onChange={handleChangePage}/>
          </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className='SwipeableViews  SwipeableViewsList'>
            {
              PerfilEdit
              ? <div className='SwipeableViews'><PerfilEditar/></div>
              : <div className='SwipeableViews'> <Perfil setPerfilEdit={setPerfilEdit}/></div>
            }            
          </div>        
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='SwipeableViews  SwipeableViewsList'>
              {/* <ControlledRadioButtonsGroup setintervaloDePaginacao={setintervaloDePaginacao} /> */}
              < ListaPessoaisProximas
                 paginaInicial={paginaInicial}
                 paginaFinal={paginaFinal}
                 setTamanhoList={setTamanhoList}
              />
              <div className='paginacao' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50px'}}>
                <Pagination count={Math.ceil(TamanhoList/intervaloDePaginacao)} variant="outlined" color="secondary" page={page} onChange={handleChangePage}/>
              </div>
            </div>
        </TabPanel>
      </SwipeableViews>
      {/* {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
            position:'absolute',
            bottom:'3%',
            right:"8%"
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color} onClick={()=>ScrollTop(index)}>
            {fab.icon}
          </Fab>
        </Zoom> */}
      {/* ))} */}
    </Box>
  );
}
