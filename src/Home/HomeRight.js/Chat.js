import { Avatar, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DirectionsIcon from '@mui/icons-material/Directions';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useSelector } from 'react-redux';
import { iniciais, ramdomColors } from '../../uteis';
export default function Chat() {
    const pessoa = useSelector(state=>state.PessoaReducer.pessoaDados)  
    const [mensageArray, setMensageArray] = useState([])
    const [mensage, setmensage] = useState('')
    const chat = ()=>{
      setMensageArray(e=>[...e,mensage])
      setmensage('')
    }
    const chatOnKeyUp = (e)=>{
      if (e.keyCode===13) {
        chat()
      }
    }
  return (
    <div className='chatConainerBody'>
       <div className='chatConainerBodyHeader'>
          <Avatar src={pessoa.imagemPerfil} sx={{width:'30px',height:'30px',marginRight:'5px',bgcolor:ramdomColors}}>{iniciais(pessoa.nome)}</Avatar>
          <Typography>{pessoa.nome}</Typography>
       </div>
       <div className='chatConainerBodyContent'>
          {mensageArray.map(elem=>{
            return <div>{elem}</div>
          })}
       </div>
       <div className='chatConainerBodyFooter'>
         <Paper
         component=""
         sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: '94%',height:38,borderRadius:'20px',bgcolor:'#e3f2fd' }}
         >
         <InputBase 
               sx={{ ml: 1, flex: 1 }}
               placeholder="Envie sua mensagem ..."
               onChange={e=>setmensage(e.target.value)}
               value={mensage}
               onKeyUp={e=>chatOnKeyUp(e)}
         />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={chat} >
                <NearMeIcon />
            </IconButton>
         </Paper>
       </div>
    </div>
  )
}
