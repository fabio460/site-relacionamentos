import { Avatar, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DirectionsIcon from '@mui/icons-material/Directions';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useSelector } from 'react-redux';
import { iniciais, linkLocal, linkRemoto, ramdomColors } from '../../uteis';
import io from 'socket.io-client'
export default function Chat() {
    const pessoa = useSelector(state=>state.PessoaReducer.pessoaDados)  
    const [mensageArray, setMensageArray] = useState([])
    const [Mensagem, setMensagem] = useState([])
    const [mensage, setmensage] = useState('')
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    const chat = ()=>{
      socket.emit("msg",{
        room:usuarioLogado._id + pessoa._id,
        idEmissor:usuarioLogado._id,
        idReceptor:pessoa._id,     
        enviadoPor:usuarioLogado.nome,
        recebidoPor:pessoa.nome,
        bodyMsg:mensage,
      })
      setmensage('')
    }
    const chatOnKeyUp = (e)=>{
      if (e.keyCode===13) {
        chat()
      }
    }
    
    const socket = io.connect(linkRemoto,{
      withCredentials: false,
      extraHeaders: {
        "my-custom-header": "*"
      }
    });
    useEffect(()=>{
      socket.on("men",async data=>{
        let m = await data
        
        let res =await data.filter((elem,key)=>{
          let chave = key
          if (elem.room === usuarioLogado._id + pessoa._id || elem.room === pessoa._id + usuarioLogado._id) {
            return elem
          }
        })
        setMensagem(res.reverse())
        socket.disconnect();  
      });
     
    },[socket])


  return (
    <div className='chatConainerBody'>
       <div className='chatConainerBodyHeader'>
          <Avatar src={pessoa.imagemPerfil} sx={{width:'30px',height:'30px',marginRight:'5px',bgcolor:'black'}}>{iniciais(pessoa.nome)}</Avatar>
          <Typography>{pessoa.nome}</Typography>
       </div>
       <div className='chatConainerBodyContent'>
          
          {Mensagem.map((e,key)=>{ 
            return <div className='mensagensBody'>
              <div className={
                e.enviadoPor === usuarioLogado.nome ? 'mensagemDoEmissor' : 'mensagemReceptor'
              }>
                 <strong>{e.enviadoPor}</strong> : {e.bodyMsg} </div>
            </div>
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
