import { List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carregando from './Carregando'
import ElementoDaLista from './ElementoDaLista'
export default function HomeLeft({handleLayout,a11yProps}) {
  const [list,setList]=useState([])  
  const [visible,setVisible]=useState(true)
  async function getUsuarios() {
    const link = 'localhost:4000/getUsuarios'
    const link2 = 'https://api-site-relacionamentos.vercel.app/getUsuarios'
    const l =await fetch(link2)
      .then(res=>res.json())
      setList(l.reverse())
      setVisible(false)
      
  }  
  useEffect(()=>{
    getUsuarios()
  },[])
  let quant = [0,1,2,3,4,5,6]
  return (
    <div>
        {visible && 
          quant.map(e=>{
            return <Carregando/>
          })
        }
        {list.map((item,key)=>{
            return <List key={key} sx={{ bgcolor: 'background.paper' }}>
                <ElementoDaLista item={item} key={key} handleLayout={handleLayout} />
                {/* {item.nome} */}
            </List>
        })}
    </div>
  )
}
