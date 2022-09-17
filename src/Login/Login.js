import React from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>tela de login</h1>
      <div>a desenvolver</div>
      <button className='btn btn-primary' onClick={()=>navigate('/cadastro')}>va para tela de cadastro</button>
    </div>
  )
}
