import { List, Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carregando from './Carregando'
import ElementoDaLista from './ElementoDaLista'
import ElementoDaListaMobile from './ElementosDaListaMobile'
import '../HomeLeft.css'
import { useSelector } from 'react-redux'
import { linkLocal, linkRemoto } from '../../../uteis'


export default function ListaDeProfissionais({paginaInicial,paginaFinal,setTamanhoList}) {

  var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
  const [list,setList]=useState([])  
  const [VisibleBeforeLoading,setVisibleBeforeLoading]=useState(true)
  
  let search = useSelector(state=>state.SearchReducer.search)

  if (search === '') {
    //getUsuarios()
    window.location.reload()   
  }
  async function getUsuarios() {
    const listaApi =await fetch(linkRemoto+'getUsuarios').then(res=>res.json())
    
    let listaDeBusca = listaApi.filter(e=>{
      let searchArray = search.split('')
      let searchChar1 = searchArray[0]
      let maiusculo = search.replace(searchChar1,searchChar1.toUpperCase())
      let minusculo = search.replace(searchChar1,searchChar1.toLowerCase())
      if (e.nome.includes(maiusculo) || e.nome.includes(minusculo) ) {
        return e
      }
    })
    
    var l = listaDeBusca
    let listaSemUsuarioLogado=[]
    if (localStorage.getItem('usuarioLogado')!=='null' || !localStorage.getItem('usuarioLogado')) {
      console.log('diferente de nulo')
      listaSemUsuarioLogado = l.filter(elem=>{
        // if (usuarioLogado.email !== elem.email) {
        //   return elem
        // }
      })
    }else{
      console.log('igual a nulo')
      listaSemUsuarioLogado = l
    }
    let listInterval = listaSemUsuarioLogado.reverse().filter((e,key)=>{
      if (key >= paginaInicial && key <= paginaFinal) {
        return e
      }
    
    })
    setTamanhoList(listaSemUsuarioLogado.length)
    setList(listInterval)
    setVisibleBeforeLoading(false)
      
  }  
  useEffect(()=>{
    getUsuarios()
  },[paginaInicial,search])
  
  let elementLoadingArray = [0,1,2,3,4,5,6]
  return (
    <div>
        {VisibleBeforeLoading && 
          elementLoadingArray.map(e=>{
            return <Carregando/>
          })
        }
        {list.map((item,key)=>{
            return <List key={key} sx={{ bgcolor: '#e3f2fd' }}>
               {/* o ElementoDaListaMobile aparece no mobile e some o ElementoDaLista porque terem propriedades diferentes */}
                <div className='ElementoDaLista'><ElementoDaLista item={item} key={key} /></div>
                <div className='ElementoDaListaMobile'><ElementoDaListaMobile item={item} key={key}/></div>
            </List>
        })}
    </div>
  )
}
