import { Box, FormControl, Input, InputLabel } from '@mui/material'
import React from 'react'

export default function Formularioendereco({cep,setCep}) {
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
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Estado</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Cidade</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>

        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Rua</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Rua</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Numero</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
        <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
            <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Complemento</div></InputLabel>
            <Input
            sx={{color:'white',textShadow:' 1px 1px 2px black'}}
            variant="standard"
            value={cep}
            size='small'
            onChange={e=>setCep(e.target.value)}
            aria-describedby="component-helper-text"
            
            />
        </FormControl>
    </Box>
  )
}
