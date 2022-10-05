import React, { useEffect, useState } from 'react'
import './Cadastro.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import { Avatar, Button, IconButton } from '@mui/material';
import Progresso from './Progresso';
export default function Cadastro() {
    
  const [imagemPerfil,setImagemPerfil]=useState('https://support.logmeinrescue.com/assets/images/care/topnav/default-user-avatar.jpg')
  const [nome,setNome]=useState('')
  const [email,setEmail]=useState('')
  const [senha,setSenha]=useState('')
  const [confirSenha,setConfirmsenha]=useState('')
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
  const onSelectFile=(e)=>{
    setImagemPerfil(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <div className='cadastroContainer'>
       <div className='cadastroBodyLeft'>
           <h2 style={{display:"flex"}}>            
             <Avatar 
                sx={{marginRight:"10px"}}
                src={'https://i.pinimg.com/236x/37/a5/2c/37a52cb19aabbff43eb7346dc71a68ab.jpg'}>
             </Avatar>
             <span>Bicos FS </span>  
           </h2>
           <div>
               <h1>Você possui uma conta?</h1> 
               <h4>
                 Registre-se para acessar funcionalidades,
                 encontrar profissionais e conseguir trabalhos freelancer  
               </h4>
               <div className='loginLeftIcones'>
                 <Box sx={{width:"30px",height:"30px"}}><GitHubIcon/></Box>
                 <Box sx={{width:"30px",height:"30px"}}><LinkedInIcon/></Box>
                 <Box sx={{width:"30px",height:"30px"}}><AlternateEmail/></Box>
               </div>
           </div>  
          
        </div>  

        <div className='cadastroBodyRight'>
            <Progresso imagemPerfil={imagemPerfil} />
        </div>      
    </div>
  )
}
