import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function HomeRight() {
   
  const pessoa = useSelector(state=>state.PessoaReducer.pessoaDados)  

  const styleAvatar = {
    width:'200px',height:"200px",marginLeft:'10px',fontSize:"70px",color:'blue',bgcolor:"white",border:"black 1px solid",
    "@media (max-width:400px)":{
        width:"100px",
        height:'100px',
        marginTop:"50px"
    }
  }
  function semAvatar(s) {
    let letra = s.split("")
    return letra[0]
  }
  return (
    <div className='HomeRightContainer'>
        {
          pessoa._id 
          ?<div>
              <div className=' HomeRightHeader'>
                    <div className=' '>
                        <Avatar sx={styleAvatar} src={pessoa.imagemPerfil}>{semAvatar(pessoa.nome)}</Avatar>
                    </div>
                    <div className=''>
                        <h1 className='HomeRightNome'>{pessoa.nome}</h1>
                    </div>
              </div>
              <div className='HomeRightDados'>
                 <h3>Profissão: {pessoa.profissao}</h3>
                 <h3>Cidade: {pessoa.cidade}</h3>

                 <h3>Estado: {pessoa.estado}</h3>
                 <h3>logradouro: {pessoa.logradouro}</h3>
                 <h3>rua: {pessoa.rua}</h3>
                 <h3>complemento: {pessoa.complemento}</h3>
                 <h3>telefone: {pessoa.telefone}</h3>
                 <h3>observacoesFinais: {pessoa.observacoesFinais}</h3>


                 <h3>outrasHabilidades: {pessoa.outrasHabilidades}</h3>
                
              </div>
            </div>
          :<div className='elementoVazio'>
            selecione um elemento
          </div>
        }
    
    </div>
  )
}
