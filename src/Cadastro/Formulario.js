
import React, { useEffect, useState } from 'react'
import './Cadastro.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, FormControl, IconButton, Input, InputLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Progresso from './Progresso';
export default function Formulario({
     setEmail,
     email,
     emailValido,
     nome,
     setNome,
     campoNulo,
     senha,
     setSenha,
     senhaInvalida,
     senhaNula,
     senhasNaoConferem,
     confirSenha,
     setConfirmsenha,
     confirmaSenha,
     setconfirmaSenha,
     setImagemPerfil,
     imagemPerfil
    }) {
    
    
  
    
    
    const [cidade,setCidade]=useState('')
    const [estado,setEstado]=useState('')
    const [cep,setCep]=useState('')
    const [bairro,setBairro]=useState('')
    const [numero,setNumero]=useState('')
    const [complemento,setComplemento]=useState('')
    const [profissao,setProfissao]=useState('')
    const [descricao,setDescricao]=useState('')
    const [rua,setRua]=useState('')
    const navigate = useNavigate()
    const [ErroDeEmail, setErroDeEmail] = useState(false)
    
    const [values, setValues] = React.useState({showPassword: false});
    const [ErroDeSenha, setErroDeSenha] = useState(false)
    const onSelectFile=(e)=>{
      setImagemPerfil(URL.createObjectURL(e.target.files[0]))
    }
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

      

      
  return (
    <div>
        <Box
              color='warning'
              component="form"
              sx={{
                color:"white",
                width:"100%",
                display:"flex",flexDirection:"column",
                margin:"auto"
              }}
              noValidate
              autoComplete="off"
            >
              
              <div className='cadastroAvatar' type='file'>     
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" onChange={onSelectFile}/>
                    <Avatar sx={{width:"120px",height:"120px"}} src={imagemPerfil}></Avatar>
                  </IconButton>
              </div>
              
              <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                    <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Email *</div></InputLabel>
                    <Input
                    type='email'
                    sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                    variant="standard"
                    error={ErroDeEmail}
                    value={email}
                    size='small'
                    onChange={e=>setEmail(e.target.value)}
                    aria-describedby="component-helper-text"
                    
                    />
                    {emailValido &&<div className='labelInvalido'>email inválido</div>}
                </FormControl>
                <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                    <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Nome*</div></InputLabel>
                    <Input
                    sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                    variant="standard"
                    error={ErroDeEmail}
                    value={nome}
                    size='small'
                    onChange={e=>setNome(e.target.value)}
                    aria-describedby="component-helper-text"
                    
                    />
                   {campoNulo &&<div className='labelInvalido'>campo não pode ser nulo</div>}
                </FormControl>
                <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                    <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Crie sua senha*</div></InputLabel>
                    <Input
                    sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                    variant="standard"
                    error={ErroDeEmail}
                    value={senha}
                    size='small'
                    onChange={e=>setSenha(e.target.value)}
                    aria-describedby="component-helper-text"
                    
                    />
                    {senhaInvalida &&<div className='labelInvalido'>minimo 5 caracteres</div>}
                    {senhaNula && <div className='labelInvalido'>campo nulo </div>}
                    {senhasNaoConferem && <div className='labelInvalido'>senhas não conferem</div>}
                    
                </FormControl>
                <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                    <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Confirmar senha*</div></InputLabel>
                    <Input
                    sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                    variant="standard"
                    error={ErroDeEmail}
                    value={confirmaSenha}
                    size='small'
                    onChange={e=>setconfirmaSenha(e.target.value)}
                    aria-describedby="component-helper-text"
                    
                    />
                   
                    {senhasNaoConferem && <div className='labelInvalido'>senhas não conferem</div>}
                    
                </FormControl>
              {/* <TextField 
                id="standard-basic"
                label={
                  <div style={{color:"white", textShadow: "1px 2px 3px black"}}>Email *</div>
                } 
                variant="standard" 
                sx={{color:'white'}}
              />
              <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            </Box>
    </div>
  )
}
