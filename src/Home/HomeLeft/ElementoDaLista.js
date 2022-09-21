import { Avatar } from '@mui/material'
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
    <div className='elementoDaLista' onClick={()=> getItem(item)}>
        <div className='elementoDaListaAvatar'>
           <Avatar  src={item.avatar} alt={item.userName}/>
        </div>
        <div>
            <div className='elementoDaListaNome'>
             Nome: {item.userName}
            </div>
            <div className='elementoDaListaProfissao'>
               Profissão: {item.profissao}
            </div>
            <div className='elementoDaListaCidade'>
              Cidade: {item.cidade}
            </div>
        </div>
    </div>
  )
}
