import React, { useEffect, useState } from 'react'
import './Login.css'

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar } from '@mui/material';
export default function Login() {

  const [values, setValues] = React.useState({showPassword: false});
  const [ErroDeSenha, setErroDeSenha] = useState(false)
  const [ErroDeEmail, setErroDeEmail] = useState(false)
  const [LabelEmail, setLabelEmail] = useState('email')
  const [LabelSenha, setLabelSenha] = useState('senha')
  const [email, setemail] = useState('')
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


  const usuarios = [
    {
      email:"fabio@gmail.com",
      senha:"fabio"
    },
    {
      email:"ruth@gmail.com",
      senha:"ruth"
    },
    {
      email:"ana@gmail.com",
      senha:"ana"
    },
  ]

  const logar = ()=>{
      var usuario = usuarios.find(use=>{
        if (use.email === email && use.senha === values.password) {
          return use
        }else{
          return false
        }
      })

      var existeEmail = usuarios.find(e=>{
        if (e.email === email) {
          return true
        }else{
          return false
        } 
      })
      
      var existeSenha = usuarios.find(e=>{
        if (e.senha === values.password) {
          return true
        }else{
          return false
        } 
      })

      if(!existeEmail){
        setErroDeEmail(true)
        setLabelEmail('usuario inexistente')
      }else{
        setErroDeEmail(false)
        setLabelEmail('email')
      }

      if (!existeSenha) {
        setErroDeSenha(true)
        setLabelSenha('senha invalida')
      } else {
        setErroDeSenha(false)
        setLabelSenha('senha')
      }


      if(usuario){
        alert("usuario(a) "+usuario.email+" conectado com sucesso")
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
                <h1>Você possui uma conta?</h1> 
                <div>
                  Registre-se para acessar funcionalidades,
                  encontrar profissionais e conseguir trabalhos freelancer  
                </div>
                <div className='loginLeftIcones'>
                  <Avatar sx={{width:"30px",height:"30px"}}>GH</Avatar>
                  <Avatar sx={{width:"30px",height:"30px"}}>F</Avatar>
                  <Avatar sx={{width:"30px",height:"30px"}}>T</Avatar>
                </div>
            </div>  
            
          </div>
          <div className='loginBodyRight'>
            <h1 >Login</h1>
            <TextField
              error={ErroDeEmail}
              label={'email'}
              size='small'
              onChange={e=>setemail(e.target.value)}
            />
            {ErroDeEmail &&
              <div className='labelEmail'>{LabelEmail}</div>
            }
            <FormControl sx={{ marginTop:"20px"}} variant="outlined" size='small'>
              <InputLabel htmlFor="outlined-adornment-password">senha</InputLabel>
              <OutlinedInput
                error={ErroDeSenha}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='password'
              />
            </FormControl>
            {ErroDeSenha &&
              <div className='labelSenha'>{LabelSenha}</div>
            }
            <Button sx={{marginTop:"20px"}} variant="contained" onClick={logar}>Logar</Button>
          </div>
    </div>

  )
}