import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material'
import Confirmar from './Confirmar'
import { linkRemoto } from '../uteis'
export default function FormularioFinal({
  setprofissao,
  setoutrasHabilidades,
  setobservacoesFinais,
  outrasHabilidades,
  profissao,
  observacoesFinais,
  setvalidaProfissao,
  validaProfissao,
  nome,
  imagemPerfil,
  email,
  senha,
  Estado,
  Cidade,
  Bairro,
  Logradouro,
  Complemento,
  Cep,
  Rua,
  telefone,
  setTelefone,
  ImagemAvatar
}) {
  
  const navigate = useNavigate()
  const cadastrar = ()=>{
    console.log(imagemPerfil+" - "+ImagemAvatar)
      if (profissao !== '') {
        setvalidaProfissao(false)
        const formdata = new FormData()

        // o campo imagem pode vir em branco
        if (ImagemAvatar === 'https://support.logmeinrescue.com/assets/images/care/topnav/default-user-avatar.jpg') {
          formdata.append('imagemPerfil','')
        }else{
          formdata.append('imagemPerfil',imagemPerfil)
        }

        formdata.append('nome',nome)
        formdata.append('email',email)
        formdata.append('senha',senha)

        
        formdata.append('cidade',Cidade)
        formdata.append('bairro',Bairro)
        formdata.append('estado',Estado) 
        formdata.append('logradouro',Logradouro)
        formdata.append('cep',Cep)
        formdata.append('rua',Rua)
        formdata.append('complemento',Complemento)
       
        formdata.append('profissao',profissao)
        formdata.append('telefone',telefone)
        formdata.append('observacoesFinais',observacoesFinais)
        formdata.append('outrasHabilidades',outrasHabilidades)
        //post dos dados
        
        fetch(linkRemoto+"setUsuario",{
          method:"post",
          body:formdata
        })

        
        alert('Profissional '+nome+' cadastrado com sucesso')
        navigate('/login')
      }else{
        setvalidaProfissao(true)
      }
  }
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
            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Profiss??o*</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={profissao}
                size='small'
                onChange={e=>setprofissao(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
                {validaProfissao && <div className='labelInvalido'>profiss??o inv??lida</div>}
              
            </FormControl>

            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Telefone*</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={telefone}
                size='small'
                onChange={e=>setTelefone(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
                {validaProfissao && <div className='labelInvalido'>profiss??o inv??lida</div>}
              
            </FormControl>

            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Outras Habilidades</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={outrasHabilidades}
                size='small'
                onChange={e=>setoutrasHabilidades(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
            </FormControl>

            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Observa????es finais</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={observacoesFinais}
                size='small'
                onChange={e=>setobservacoesFinais(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
            </FormControl>
      </Box>
      <div className='FormularioFinalizarBtn'>
        
        <Confirmar cadastrar={cadastrar}/>
      </div>
     
    </div>
  )
}
