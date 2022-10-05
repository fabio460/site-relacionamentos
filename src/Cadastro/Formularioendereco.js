import { Box, FormControl, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'

export default function Formularioendereco({
    Estado,
    Cidade,
    Bairro,
    Logradouro,
    Complemento,
    setEstado,
    setCidade,
    setBairro,
    setLogradouro,
    setComplemento,
    Cep,
    setCep,
    Rua,
    setRua,
    cepvalido,
    setcepvalido
}) {
    
    async function setarCep() {
      const p = await fetch(`https://viacep.com.br/ws/${Cep}/json/`)
          .then(r=>r.json())
          .then(res=>{
            setBairro(res.bairro)
            setCidade(res.localidade)
            setRua(res.logradouro)
            setEstado(res.uf)
            setComplemento(res.complemento)
            setcepvalido(true)
          })
          .catch(res=>{
            setcepvalido(false)
            // setBairro('')
            // setCidade('')
            // setRua('')
            // setEstado('')
            // setComplemento('')
          })     
     }
     setarCep()

  return (
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
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Cep</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
            {
               cepvalido ? <div></div> : <div className='labelInvalido'>cep invalido</div>
            }
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Estado</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Estado}
            size='small'
            onChange={e=>setEstado(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Cidade</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Cidade}
            size='small'
            onChange={e=>setCidade(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Bairro</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Bairro}
            size='small'
            onChange={e=>setBairro(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Rua</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Rua}
            size='small'
            onChange={e=>setRua(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Numero</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Logradouro}
            size='small'
            onChange={e=>setLogradouro(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Complemento</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={Complemento}
            size='small'
            onChange={e=>setComplemento(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
    </Box>
  )
}
