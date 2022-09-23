import React, { useState } from 'react'
import './Cadastro.css'
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
export default function Cadastro() {
    
  const [imagemPerfil,setImagemPerfil]=useState('https://thumbs.dreamstime.com/b/imita%C3%A7%C3%A3o-do-fundo-transparente-69028332.jpg')
  const navigate = useNavigate()
  const onSelectFile=(e)=>{
    setImagemPerfil(URL.createObjectURL(e.target.files[0]))
  }

  const [nome,setNome]=useState('')
  const [email,setEmail]=useState('')
  const [senha,setSenha]=useState('')
  const [confirSenha,setConfirmsenha]=useState('')
  const [cidade,setCidade]=useState('')
  const [estado,setEstado]=useState('')
  const [cep,setCep]=useState('')
  const [bairro,setBairro]=useState('')
  const [numero,setNumero]=useState('')
  const [complemento,setComplemento]=useState('')

  function validaCampoNulo(Id,campo) {
    function invalido(id) {
        console.log(document.getElementById(id))
        document.getElementById(id).classList.remove('is-valid')
        document.getElementById(id).classList.add('is-invalid')
      }
      function valido(id) {
        document.getElementById(id).classList.remove('is-invalid')
        document.getElementById(id).classList.add('is-valid')
      }

      if(campo === ''){
        invalido(Id)
      }else{
            valido(Id)
      }
  }

  function validaSenha(Id,campo) {
    function invalido(id) {
        console.log(document.getElementById(id))
        document.getElementById(id).classList.remove('is-valid')
        document.getElementById(id).classList.add('is-invalid')
      }
      function valido(id) {
        document.getElementById(id).classList.remove('is-invalid')
        document.getElementById(id).classList.add('is-valid')
      }

      if (senha !== confirSenha) {
        invalido(Id)
      } else {
        valido(Id)
      }
      if(campo === ''){
        invalido(Id)
      }else{
            valido(Id)
      }
  }
  
  const enviar = (e)=>{
    //e.preventDefault()
    validaCampoNulo('validationDefault01',nome)
    validaSenha('senha',senha)
    validaSenha('validationDefault07',confirSenha)
  }
 
  return (
    <div classNameName='cadastroContainer'>
        <form className="row" style={{width:"90%",margin:'20px auto'}}>
            <div className='col-md-2' style={{display:'flex',justifyContent:"center"}} >
                <img className='img-thumbnail img-fluid' src={imagemPerfil} alt='' />
            </div>
            <div className='col-md-10' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'90vh'}}>
                <div className='row'>
                    <h3>Seus dados</h3>
                    <div className="col-md-4">
                        <label for="validationDefaultUsername" className="form-label">Imagem</label>
                        <input type="file" className="form-control" aria-label="file example" id='inputImage'
                            onChange={onSelectFile}
                            
                        />
                        <div className="invalid-feedback">Esse campo não pode ser nulo</div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationDefault01 " className="form-label">Nome</label>
                        
                        <input id="validationDefault01" onChange={(e=>setNome(e.target.value))} type="text" className="form-control"  required/>
                        <div className="invalid-feedback">campo inválido</div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationDefaultUsername" className="form-label">Email</label>
                        <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input 
                          onChange={(e=>setEmail(e.target.value))}
                          type="email" className="form-control is-invalid" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationDefault03" className="form-label">Profissão</label>
                        <input type="text" className="form-control" id="validationDefault03" required/>
                        <div className="invalid-feedback">campo inválido</div>
                    </div>
                    <div className="col-md-3">


                        <label for="senha" className="form-label">Senha</label>
                        <input type="text" className="form-control" id="senha" onChange={e=>setSenha(e.target.value)} required/>
                    </div>
                    <div className="col-md-3">
                    <label for="validationDefault07" className="form-label">Confirmar senha</label>
                        <input type="text" className="form-control" id="validationDefault07" onChange={(e=>setConfirmsenha(e.target.value))} required/>
                        <div className="invalid-feedback">campo inválido</div>
                    </div>

                    <Divider sx={{margin:'30px 0px'}}/>

                    <h3>Localidade</h3>
                    {/* <div className="col-md-3">
                        <label for="validationDefault04" className="form-label">Genero</label>
                        <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">...</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        </select>
                    </div> */}

                    <div className='col-md-3'>
                        <label for="cep" className="form-label">Cep</label>
                        <input type="text" className="form-control" id="cep" onChange={e=>setCep(e.target.value)} required/>
                    </div>
                    <div className='col-md-3'>
                        <label for="cidade" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="cidade" onChange={e=>setCidade(e.target.value)} required/>
                    </div>
                    <div className='col-md-6'>
                        <label for="estado" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="estado" onChange={e=>setEstado(e.target.value)} required/>
                    </div>

                    <div className='col-md-4'>
                        <label for="bairro" className="form-label">Bairro</label>
                        <input type="text" className="form-control" id="bairro" onChange={e=>setBairro(e.target.value)} required/>
                    </div>
                    <div className='col-md-4'>
                        <label for="numero" className="form-label">Numero</label>
                        <input type="text" className="form-control" id="numero" onChange={e=>setNumero(e.target.value)} required/>
                    </div>
                    <div className='col-md-4'>
                        <label for="complemento" className="form-label">Complemento</label>
                        <input type="text" className="form-control" id="complemento" onChange={e=>setComplemento(e.target.value)} required/>
                    </div>


                    {/* <div className="col-md-3">
                        <label for="validationDefault04" className="form-label">Cor</label>
                        <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">...</option>
                        <option>Branco(a)</option>
                        <option>Pardo(a)</option>
                        <option>Negro(a)</option>
                        <option>Loiro(a)</option>
                        <option>Moreno(a)</option>
                        </select>
                    </div>

                    <div className="col-md-3">
                    <label for="validationDefault04" className="form-label">Altura</label>
                        <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">...</option>
                        <option>abaixo de 1,60m</option>
                        <option>1,60m a 1,70m</option>
                        <option>1,70m a 1,80m</option>
                        <option>1,80m a 1,90m</option>
                        <option>acima de 1,90m</option>
                        </select>                        
                    </div>

                    <div className="col-md-3">
                    <label for="validationDefault04" className="form-label">Corpo</label>
                        <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">...</option>
                        <option>magro</option>
                        <option>comum</option>
                        <option>atletico</option>
                        <option>um pouco acima do peso</option>
                        <option>muito acima do peso</option>
                        </select>                        
                    </div> */}

                </div>              
                <label for="complemento" className="form-label">Descreva o que faz</label>
                <textarea class="form-control" aria-label="With textarea"></textarea>
             
                <Divider sx={{margin:'30px 0px'}}/>
                <div className="col-12" style={{paddingBottom:'20px'}}>
                    <button className="btn btn-primary" style={{marginRight:'30px'}} type="" onClick={enviar}>Cadastrar</button>
                    <button className='btn btn-danger' onClick={()=>navigate('/')}>voltar ao login</button>
                </div>
            </div>
        </form>

    </div>
  )
}
