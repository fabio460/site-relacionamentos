import React,{useState} from 'react'
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material'
export default function FormularioFinal() {
  const [profissao, setprofissao] = useState('')
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
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Profissao</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={profissao}
                size='small'
                onChange={e=>setprofissao(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
            </FormControl>

            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Ultimo serviço</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={profissao}
                size='small'
                onChange={e=>setprofissao(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
            </FormControl>

            <FormControl variant="standard" sx={{ marginTop:"20px",color:'white'}} size='small'>
                <InputLabel  sx={{color:"white"}} htmlFor="component-helper" ><div style={{fontSize:"20px"}}>Sua especialidade</div></InputLabel>
                <Input
                sx={{color:'white',textShadow:' 1px 1px 2px black'}}
                variant="standard"
                value={profissao}
                size='small'
                onChange={e=>setprofissao(e.target.value)}
                aria-describedby="component-helper-text"
                
                />
            </FormControl>
      </Box>
      <div className='FormularioFinalizarBtn'>
        <Button variant='contained'>finalizar cadastro</Button>
      </div>
     
    </div>
  )
}
