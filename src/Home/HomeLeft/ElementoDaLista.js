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
  return (
    <ListItemButton className='' onClick={()=> getItem(item)}>
        <ListItem  disablePadding>
          <ListItemAvatar>
            <Avatar  src={item.avatar} alt={item.userName}>
              
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.userName} secondary={
            <div>
              <div>Prof: {item.profissao}</div>
              <div>Cidade: {item.cidade}</div>
            </div>
          
          } />
      </ListItem>
    </ListItemButton>
  )
}
