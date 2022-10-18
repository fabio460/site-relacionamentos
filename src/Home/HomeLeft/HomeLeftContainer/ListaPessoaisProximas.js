import { List, Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carregando from './Carregando'
import ElementoDaLista from './ElementoDaLista'
import ElementoDaListaMobile from './ElementosDaListaMobile'
import '../HomeLeft.css'
import { useSelector } from 'react-redux'
import { linkRemoto } from '../../../uteis'


export default function ListaPessoaisProximas({paginaInicial,paginaFinal,setTamanhoList}) {

  var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
  const [list,setList]=useState([])  
  const [VisibleBeforeLoading,setVisibleBeforeLoading]=useState(true)
  let search = useSelector(state=>state.SearchReducer.search)
  async function getUsuarios() {
    const link = 'localhost:4000/getUsuarios'
    const apiRemota = linkRemoto+'getUsuarios'
    const listaApi =await fetch(apiRemota).then(res=>res.json())

    let listaDeBusca = listaApi.filter(e=>{
      let searchArray = search.split('')
      let searchChar1 = searchArray[0]
      let maiusculo = search.replace(searchChar1,searchChar1.toUpperCase())
      let minusculo = search.replace(searchChar1,searchChar1.toLowerCase())
      if (e.nome.includes(maiusculo) || e.nome.includes(minusculo) ) {
        return e
      }
    })
    let l = listaDeBusca
    

    var filtroPorBairro = []

    if (localStorage.getItem('usuarioLogado')!==null) {
      
        filtroPorBairro = l.filter(elem=>{
          
            if (elem.bairro === usuarioLogado.bairro) {
              console.log(elem.bairro +' - '+usuarioLogado.bairro)
                return elem
            }
        })
    }
    

    let listaSemUsuarioLogado=[]
    //listaSemUsuarioLogado = filtroPorBairro

    if (localStorage.getItem('usuarioLogado')!==null) {
      listaSemUsuarioLogado = l.filter(elem=>{
        if (usuarioLogado.email !== elem.email && elem.bairro === usuarioLogado.bairro) {
          return elem
        }
      })
    }else{
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
