import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ElementoDaLista({item}) {
    const dispath = useDispatch()
    // esta constante reducer esta pegando a função la do componente HomeLeft que ira rolar a tela no mobile 
    const handleLeftRight = useSelector(state=>state.functionHandleLeftRight.handleLeftRight)
    const getItem = (item)=>{
       
        dispath({
         type:'pessoa',
         payload:{pessoaDados:item}
        })
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
