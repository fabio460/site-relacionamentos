import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material';
import { iniciais } from '../../../uteis';
export default function Perfil() {
  // se hover usuario logado vou mostrar os dados, se não outra tela aparece 

  const [usuarioLogado, setUsuarioLogado] = useState(null)
 
  useEffect(()=>{
    setUsuarioLogado(JSON.parse(localStorage.getItem('usuarioLogado')))
  },[])
  
  return (
    <div className='perfil'>
      {
        usuarioLogado ?
        <div>
          <div className='PerfilAvatar'>
              <Avatar 
                src={usuarioLogado.imagemPerfil}
                sx={{width:"110px",height:"110px",bgcolor:"blue",fontSize:"50px"}}
              >
                  {iniciais(usuarioLogado.nome)}
              </Avatar>
          </div>
          <div className='perfilNome'>
             <h3>{usuarioLogado.nome}</h3>
          </div>
        </div>:
        <div>
          Logue-se para ver suas informações
        </div>
      }
    </div>
  )
}
