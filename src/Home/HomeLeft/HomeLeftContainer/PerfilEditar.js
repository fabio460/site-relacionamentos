import React, { useEffect, useState } from 'react'
import { Avatar, Button, Divider, FormLabel, Input, Typography } from '@mui/material';
import { iniciais, linkRemoto } from '../../../uteis';
import { Stack } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StreetviewIcon from '@mui/icons-material/Streetview';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
export default function PerfilEditar() {
  // se hover usuario logado vou mostrar os dados, se não outra tela aparece 

  const [usuarioLogado, setUsuarioLogado] = useState(null)
  let user = JSON.parse(localStorage.getItem('usuarioLogado'))
  const [atualiza, setAtualiza] = useState(false)
  const [Object, setObject] = useState({})
  const [userLogged, setuserLogged] = useState()

  const editar = ()=>{
    alert('editar')
  }

  useEffect(async()=>{
    getUsuarioPorId()
    setUsuarioLogado(JSON.parse(localStorage.getItem('usuarioLogado')))
  //   setObject({
  //       telefone:userLogged[0].telefone,
  //       nome:user.nome,
  //       estado:userLogged[0].estado,
  //       cidade:user.cidade,
  //       rua:user.rua,
  //       logradouro:user.logradouro,
  //       complemento:user.complemento,
  //       email:user.email,
  //       profissao:user.profissao,
  //       id:user._id
  //  })
  },[])
 
  
 
  function getUsuarioPorId() {
    const formdata = new FormData()
    formdata.append('id',JSON.parse(localStorage.getItem('usuarioLogado'))._id)
    fetch(linkRemoto+'getUsuarioPorId',{
     method:'post',
     body:formdata
    }).then(res=>res.json()).then(e=>setuserLogged(e))
  }

  const Editar = async()=>{
   
    if (localStorage.getItem('usuarioLogado')!=='null') {
      getUsuarioPorId()
    }
    const formdata = new FormData()
    formdata.append('id',JSON.parse(localStorage.getItem('usuarioLogado'))._id)
    if (Object.telefone !== undefined) formdata.append('telefone',Object.telefone)
   
    if (Object.nome !== undefined) formdata.append('nome',Object.nome)
    if (Object.email !== undefined) formdata.append('email',Object.email)
    if (Object.estado !== undefined) formdata.append('estado',Object.estado)
    if (Object.cidade !== undefined) formdata.append('cidade',Object.cidade)
    if (Object.bairro !== undefined) formdata.append('bairro',Object.bairro)

    if (Object.rua !== undefined) formdata.append('rua',Object.rua)
    if (Object.logradouro !== undefined) formdata.append('logradouro',Object.logradouro)
    if (Object.complemento !== undefined) formdata.append('complemento',Object.complemento)
    if (Object.profissao !== undefined) formdata.append('profissao',Object.profissao)

    if (Object.observacoesFinais !== undefined) formdata.append('observacoesFinais',Object.observacoesFinais)
    if (Object.outrasHabilidades !== undefined) formdata.append('outrasHabilidades',Object.outrasHabilidades)
    if (Object.imagemPerfil !== undefined) formdata.append('imagemPerfil',Object.imagemPerfil)

    fetch(linkRemoto+'updateUsuario',{
     method:'put',
     body:formdata
    })
    
      setAtualiza(!atualiza)
      setTimeout(() => {
        window.location.reload()
      }, 700);
   }

  useEffect(()=>{
    setUsuarioLogado(JSON.parse(localStorage.getItem('usuarioLogado')))
    if (localStorage.getItem('usuarioLogado')!=='null') {
      getUsuarioPorId()
    }
  },[atualiza])

  const voltar = ()=>{
    window.location.reload()
  }
  return (
    // <div>ff</div>
    <div className='perfil'>
      {
        userLogged !== undefined ?
        <div>
          <div className='PerfilBlocos perfilBlocosTop'>
              <Avatar 
                src={userLogged[0].imagemPerfil}
                sx={{width:"110px",height:"110px",bgcolor:"blue",fontSize:"50px"}}
              >
                  {iniciais(userLogged[0].nome)}
              </Avatar>
              <Input
                  defaultValue={userLogged[0].nome}
                  placeholder={userLogged[0].nome}
                  size=''
                  onChange={e=>setObject({...Object,nome:e.target.value})}
                />
                <Input
                  defaultValue={userLogged[0].profissao}
                  placeholder={userLogged[0].profissao}
                  size='medium'
                  onChange={e=>setObject({...Object,profissao:e.target.value})}
                />
              <Stack spacing={2} direction="row" sx={{marginTop:"20px"}}>
                <Button variant="contained" sx={{borderRadius:"30px"}} onClick={Editar}>Editar</Button>
                <Button variant="contained" sx={{borderRadius:"30px"}} onClick={voltar}>Cancelar</Button>
              </Stack>
          </div>
         
          <div className='PerfilBlocos'>
              <Typography sx={{display:'flex',alignItems:'center'}}>
                <Avatar sx={{marginRight:'15px'}}><CallIcon/></Avatar>      
                <Input
                  defaultValue={userLogged[0].telefone}
                  placeholder={userLogged[0].telefone}
                  size='small'
                  onChange={e=>setObject({...Object,telefone:e.target.value})}
                />
              </Typography>
              <Typography sx={{display:'flex',alignItems:'center',margin:'5px 0px'}}>
                <Avatar sx={{marginRight:'15px'}}><EmailIcon/></Avatar>
                <Input
                  defaultValue={userLogged[0].email}
                  placeholder={userLogged[0].email}
                  size='small'
                  onChange={e=>setObject({...Object,email:e.target.value})}
                />
              </Typography>
          </div>
          <div className='PerfilBlocos'>
            <Typography sx={{display:'flex',alignItems:'center',margin:'2px 0px'}}>
               <Avatar sx={{marginRight:'15px'}}><LocationCityIcon/></Avatar>
               <Input
                  defaultValue={userLogged[0].cidade}
                  placeholder={userLogged[0].cidade}
                  size='small'
                  onChange={e=>setObject({...Object,cidade:e.target.value})}
                />
            </Typography>
            <Typography sx={{display:'flex',alignItems:'center',margin:'2px 0px'}}>
               <Avatar sx={{marginRight:'15px'}}><ApartmentIcon/></Avatar>
               <Input
                  defaultValue={userLogged[0].bairro}
                  placeholder={userLogged[0].bairro}
                  size='small'
                  onChange={e=>setObject({...Object,bairro:e.target.value})}
                />
            </Typography>

            <Typography sx={{display:'flex',alignItems:'center',margin:'2px 0px'}}>
               <Avatar sx={{marginRight:'15px'}}><ApartmentIcon/></Avatar>
               <Input
                    sx={{maxWidth:'150px'}}
                    defaultValue={userLogged[0].rua}
                    placeholder={userLogged[0].rua}
                    size='small'
                    onChange={e=>setObject({...Object,rua:e.target.value})}
                />
                  <Input
                    sx={{width:'50px',margin:'0px 5px'}}
                    defaultValue={userLogged[0].logradouro}
                    placeholder={userLogged[0].logradouro}
                    size='small'
                    onChange={e=>setObject({...Object,logradouro:e.target.value})}
                  />
                  <Input
                    sx={{maxWidth:'100px'}}
                    defaultValue={userLogged[0].complemento}
                    placeholder={userLogged[0].complemento ? userLogged[0].complemento : "Complemento" }
                    size='small'
                    onChange={e=>setObject({...Object,complemento:e.target.value})}
                  />
            </Typography>
            <Typography sx={{display:'flex',alignItems:'center',margin:'2px 0px'}}>
                  <Avatar sx={{marginRight:'15px'}}>< IntegrationInstructionsIcon/></Avatar>
                  <Input
                    defaultValue={userLogged[0].outrasHabilidades}
                    placeholder={userLogged[0].outrasHabilidades}
                    size='small'
                    onChange={e=>setObject({...Object,outrasHabilidades:e.target.value})}
                  />
            </Typography>
            <Typography sx={{display:'flex',alignItems:'center',margin:'2px 0px'}}>
                  <Avatar sx={{marginRight:'15px'}}><BrunchDiningIcon/></Avatar>
                  <Input
                    defaultValue={userLogged[0].observacoesFinais}
                    placeholder={userLogged[0].observacoesFinais ? userLogged[0].observacoesFinais : "observacoesFinais" }
                    size='small'
                    onChange={e=>setObject({...Object,observacoesFinais:e.target.value})}
                  />
            </Typography>
          </div>
        </div>:
        <div>
          
        </div>
      }
    </div>
  )
}
