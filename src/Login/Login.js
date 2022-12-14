import React, { useEffect, useState } from 'react'
import './Login.css'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, Input } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import { grey } from '@mui/material/colors';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import {useNavigate} from 'react-router-dom'
export default function Login() {

  const [values, setValues] = React.useState({showPassword: false});
  const [ErroDeSenha, setErroDeSenha] = useState(false)
  const [ErroDeEmail, setErroDeEmail] = useState(false)
  const [LabelEmail, setLabelEmail] = useState('email')
  const [LabelSenha, setLabelSenha] = useState('senha')
  const [email, setemail] = useState('')
  const [usuarioLogado, setUsuarioLogado] = useState(false)
  const navigate = useNavigate()
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const logar =async ()=>{
    const formdata = new FormData()
    formdata.append('email',email)
    formdata.append('senha',values.password)
    // o objeto user retorna um jwt e um objeto chamado "usuario" contendo as informações do usuário
    var user = fetch('https://api-site-relacionamentos.vercel.app/jwt',{
        method:'POST',
        body:formdata
      }).then(res=>res.json()).then(res=>{
        if(res){
          localStorage.setItem('usuarioLogado',JSON.stringify(res.usuario))
          navigate('/')
        }
      })
    // user.usuario retorna indefinido se o usuario e senha estejam errados
    if (!user.usuario) {
      setLabelSenha('usuário ou senha inválidos')
      setErroDeSenha(true)
    }
  }


  return (
    <div className='loginContainer'>
          <div className='loginBodyLeft'>
           
            <h2 style={{display:"flex"}}>            
              <Avatar 
                 sx={{marginRight:"10px"}}
                 src={'https://i.pinimg.com/236x/37/a5/2c/37a52cb19aabbff43eb7346dc71a68ab.jpg'}>
              </Avatar>
              <span>Bicos FS </span>  
            </h2>
            <div>
                <h1>Login</h1> 
                <h4>
                  Faça seu login e interaja com profissionais da sua região 
                </h4>
                <h4>
                  Com o login voçê terá mais acesso ao site e suas funcionalidades
                </h4>
                <div className='loginLeftIcones'>
                  <Box sx={{width:"30px",height:"30px"}}><GitHubIcon/></Box>
                  <Box sx={{width:"30px",height:"30px"}}><LinkedInIcon/></Box>
                  <Box sx={{width:"30px",height:"30px"}}><AlternateEmail/></Box>
                </div>
            </div>  
            
          </div>
          <div className='loginBodyRight' >
            <div>
              
              <IconButton aria-label="home" onClick={()=>navigate('/')}>
                <HomeIcon color={'primary'} />
              </IconButton>
            
            </div>
            <div className='loginBodyRightIcone'><PersonIcon sx={{width:'100px',height:'100px'}}/></div>
            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Email</div></InputLabel>
                <Input
                  sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                  variant="standard"  
                  error={ErroDeEmail}
                  value={email}
                  size='small'
                  onChange={e=>setemail(e.target.value)}
                  aria-describedby="component-helper-text"
                />
            </FormControl>
            {ErroDeEmail &&
              <div className='labelEmail'>{LabelEmail}</div>
            }

              <FormControl variant="standard" sx={{ marginTop:"20px"}} size='small'>
                <InputLabel  sx={{color:"white",fontSize:"20px"}} htmlFor="standard-adornment-password">Senha</InputLabel>
                <Input
                  error={ErroDeSenha}
                  sx={{color:'white'}}
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{color:'white'}}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                
             </FormControl>
            {ErroDeSenha &&
              <div className='labelSenha'>{LabelSenha}</div>
            }
            <div style={{marginTop:"5px"}}>
              Não é cadastrado? <span className='loginLinkCadastro' onClick={()=>navigate('/cadastro')}>cadastre-se aqui</span>
            </div>
            <Button sx={{marginTop:"20px"}} variant="contained" onClick={logar}>Logar</Button>
          </div>
    </div>

  )
}