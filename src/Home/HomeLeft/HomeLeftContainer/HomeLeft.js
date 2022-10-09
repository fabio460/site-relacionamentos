import * as React from 'react';
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
import ListaDeProfissionais from '../HomeLeftContainer/ListaDeProfissionais';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
    bgcolor: 'background.paper',
    width: "100%",
    position: 'relative',
    minHeight: 200,
    padding:'0px 0px 0px 0px',
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
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Lista" {...a11yProps(0)} />
          <Tab label="Perfil" {...a11yProps(1)} />
          <Tab label="outros" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
           <div className='SwipeableViews'><ListaDeProfissionais /></div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className='SwipeableViews'> <Perfil/></div>
         
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className='SwipeableViews'>       outros</div>
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
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
        </Zoom>
      ))}
    </Box>
  );
}
