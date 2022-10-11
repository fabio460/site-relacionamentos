import { List, Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carregando from './Carregando'
import ElementoDaLista from './ElementoDaLista'
import ElementoDaListaMobile from './ElementosDaListaMobile'
import '../HomeLeft.css'


export default function ListaDeProfissionais({paginaInicial,paginaFinal,setTamanhoList}) {

  const [list,setList]=useState([])  
  const [visible,setVisible]=useState(true)
  async function getUsuarios() {
    const link = 'localhost:4000/getUsuarios'
    const link2 = 'https://api-site-relacionamentos.vercel.app/getUsuarios'
    const l =await fetch(link2)
      .then(res=>res.json())
      setTamanhoList(l.length) 
      let listInterval = l.reverse().filter((e,key)=>{
        if (key >= paginaInicial && key <= paginaFinal) {
          return e
        }
      })
      setList(listInterval)
      setVisible(false)
      
  }  
  useEffect(()=>{
    
    getUsuarios()
  },[paginaInicial])
  
  let quant = [0,1,2,3,4,5,6]
  return (
    <div>
        {visible && 
          quant.map(e=>{
            return <Carregando/>
          })
        }
        {list.map((item,key)=>{
            return <List key={key} sx={{ bgcolor: '#e3f2fd' }}>
                <div className='ElementoDaLista'><ElementoDaLista item={item} key={key} /></div>
                <div className='ElementoDaListaMobile'><ElementoDaListaMobile item={item} key={key}/></div>
            </List>
        })}
    </div>
  )
}
