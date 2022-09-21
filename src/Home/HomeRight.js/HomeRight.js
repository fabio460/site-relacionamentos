import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function HomeRight() {
   
  const pessoa = useSelector(state=>state.PessoaReducer.pessoaDados)  

  const styleAvatar = {
    width:'200px',height:"200px",marginLeft:'10px',
    "@media (max-width:400px)":{
        width:"100px",
        height:'100px',
        marginTop:"50px"
    }
  }
  return (
    <div className='HomeRightContainer'>
        {
          pessoa._id 
          ?<div>
              <div className=' HomeRightHeader'>
                    <div className=' '>
                        <Avatar sx={styleAvatar} src={pessoa.avatar}>{pessoa.userName}</Avatar>
                    </div>
                    <div className=''>
                        <h1 className='HomeRightNome'>{pessoa.userName}</h1>
                    </div>
              </div>
              <div className='HomeRightDados'>
                 <h3>Profissão: {pessoa.profissao}</h3>
                 <h3>Cidade: {pessoa.cidade}</h3>
              </div>
            </div>
          :<div className='elementoVazio'>
            selecione um elemento
          </div>
        }
    
    </div>
  )
}
