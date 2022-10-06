import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function ElementoDaLista({item,handleLayout}) {
    const dispath = useDispatch()
    const getItem = (item)=>{
       
        dispath({
         type:'pessoa',
         payload:{pessoaDados:item}
        })
        handleLayout()
     }
     function semAvatar(s) {
      let letra = s.split("")
      return letra[0]
    }
  return (
    <ListItemButton className='' onClick={()=> getItem(item)}>
        <ListItem  disablePadding>
          <ListItemAvatar>
            <Avatar sx={{bgcolor:'blue'}} src={item.imagemPerfil} alt={item.nome}>
              {semAvatar(item.nome)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.nome} secondary={
            <div>
              <div>Prof: {item.profissao}</div>
              <div>Cidade: {item.cidade}</div>
              
            </div>
          
          } />
      </ListItem>
    </ListItemButton>
  )
}
