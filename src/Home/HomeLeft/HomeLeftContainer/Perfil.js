import React, { useEffect, useState } from 'react'
import { Avatar, Button, Divider, Typography } from '@mui/material';
import { iniciais } from '../../../uteis';
import { Stack } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';
export default function Perfil() {
  // se hover usuario logado vou mostrar os dados, se não outra tela aparece 

  const [usuarioLogado, setUsuarioLogado] = useState(null)
 
  useEffect(()=>{
    setUsuarioLogado(JSON.parse(localStorage.getItem('usuarioLogado')))
  },[])
  
  return (
    <div className='perfil'>
      {
        usuarioLogado ?
        <div>
          <div className='PerfilBlocos perfilBlocosTop'>
              <Avatar 
                src={usuarioLogado.imagemPerfil}
                sx={{width:"110px",height:"110px",bgcolor:"blue",fontSize:"50px"}}
              >
                  {iniciais(usuarioLogado.nome)}
              </Avatar>
              <h3>{usuarioLogado.nome}</h3>
              <Typography>{usuarioLogado.profissao}</Typography>
              <Stack spacing={2} direction="row" sx={{marginTop:"20px"}}>
                <Button variant="contained" sx={{borderRadius:"30px"}}>Editar dados</Button>
                <Button variant="outlined" sx={{borderRadius:"30px"}}>remover conta</Button>
              </Stack>

          </div>
          <div className='PerfilBlocos'>
          
            <Typography sx={{display:'flex',alignItems:'center'}}>
               <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>
               <div>{usuarioLogado.telefone}</div>
            </Typography>

            <Typography sx={{display:'flex',alignItems:'center',margin:'5px 0px'}}>
               <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>
               <div>{usuarioLogado.cidade}</div>
            </Typography>

            <Typography sx={{display:'flex',alignItems:'center'}}>
               <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>
               <div>{usuarioLogado.rua}</div>
            </Typography>

            <Typography sx={{display:'flex',alignItems:'center',margin:'5px 0px'}}>
               <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>
               <div>{usuarioLogado.logradouro}</div>
            </Typography>
            <Typography sx={{display:'flex',alignItems:'center'}}>
               <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>
               <div>{usuarioLogado.complemento}</div>
            </Typography>

            <Typography sx={{display:'flex',alignItems:'center',margin:'5px 0px'}}>
               <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>
               ,<div>{usuarioLogado.cidade}</div>
            </Typography>
            
          </div>
        </div>:
        <div>
          Logue-se para ver suas informações
        </div>
      }
    </div>
  )
}
