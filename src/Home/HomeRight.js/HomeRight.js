import { Avatar, Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './HomeRight.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ChatButton from './ChatButton';
export default function HomeRight() {
   
  const pessoa = useSelector(state=>state.PessoaReducer.pessoaDados)  

  const styleAvatar = {
     width:'200px',
     height:"200px",
     marginLeft:'10px',
     fontSize:"70px",
     color:'blue',
     bgcolor:"white",
     border:"black 1px solid",
     marginTop:"10px",
    "@media (max-width:400px)":{
        width:"100px",
        height:'100px',
        marginTop:"50px"
    }
  }
  function semAvatar(s) {
    let letra = s.split("")
    return letra[0]
  }
  return (
    <div className='HomeRightContainer'>
        {
          pessoa._id 
          ?<div>
              <div className=''>
                    <div className='HomeRightHeader'>
                        <Avatar sx={styleAvatar} src={pessoa.imagemPerfil}>{semAvatar(pessoa.nome)}</Avatar>
                        <h1 className='HomeRightNome'>{pessoa.nome}</h1>
                    </div>
              </div>
              <div className='HomeRightDados'>
                 <div className='HomeRightDadosItems'>
                    <Avatar sx={{width:'80px',height:'80px',bgcolor:'#0288d1'}}><AccountBoxIcon sx={{width:'60px',height:'60px'}}/></Avatar>
                    <h3>Contatos</h3>
                    <Typography>{pessoa.email}</Typography>
                    <Typography>{pessoa.telefone}</Typography>
                 </div>
              
                 <div className='HomeRightDadosItems'>
                    <Avatar sx={{width:'80px',height:'80px',bgcolor:'#0288d1'}}><HomeWorkIcon sx={{width:'60px',height:'60px'}}/></Avatar>
                    <h3>Localidade</h3>
                    <Typography>{pessoa.rua} - {pessoa.logradouro} {pessoa.complemento}</Typography>
                    <Typography>{pessoa.bairro}</Typography>
                    <Typography>{pessoa.cidade}</Typography>
                    <Typography>{pessoa.estado}</Typography>
                 </div>
                
                 <div className='HomeRightDadosItems'>
                    <Avatar sx={{width:'80px',height:'80px',bgcolor:'#0288d1'}}><EngineeringIcon sx={{width:'60px',height:'60px'}}/></Avatar>
                    <h3>Serviços</h3>
                    <Typography>{pessoa.profissao}</Typography>
                    <Typography>{pessoa.outrasHabilidades}</Typography>
                    <Typography>{pessoa.observacoesFinais}</Typography>
                 </div>
              </div>
              
              <ChatButton/>
            </div>
          :<div className='elementoVazio'>
                <div className='elementoVazioBody'>
                  <h2>Selecione um profissional ao lado</h2>
                  <img 
                    className='ImagemSelecionarUsuario'
                    src='https://ajuda.simplo7.com.br/hc/article_attachments/5147596042395/adicionar-usuario-no-linux.jpg'
                  />
                </div>
          </div>
        }
    
    </div>
  )
}
