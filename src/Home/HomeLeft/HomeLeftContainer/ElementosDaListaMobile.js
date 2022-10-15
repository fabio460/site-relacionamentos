import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ramdomColors } from '../../../uteis'

export default function ElementoDaListaMobile({item}) {
    const dispath = useDispatch()
    // esta constante reducer esta pegando a função la do componente HomeLeft que ira rolar a tela no mobile 
    const handleLeftRight = useSelector(state=>state.functionHandleLeftRight.handleLeftRight)
    const getItem = (item)=>{
       
        dispath({
         type:'pessoa',
         payload:{pessoaDados:item}
        })
        handleLeftRight()
     }
     function semAvatar(s) {
      let letra = s.split("")
      return letra[0]
    }
  return (
    <ListItemButton className='' onClick={()=> getItem(item)}>
        <ListItem  disablePadding>
          <ListItemAvatar>
            <Avatar sx={{bgcolor:ramdomColors}} src={item.imagemPerfil} alt={item.nome}>
              {semAvatar(item.nome)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.nome} secondary={
            <div>
              <div>Prof: {item.profissao}</div>
              <div>Bairro: {item.bairro}</div>
              
            </div>
          
          } />
      </ListItem>
    </ListItemButton>
  )
}
