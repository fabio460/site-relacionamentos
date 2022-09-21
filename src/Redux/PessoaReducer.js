const inicial = {
    pessoaDados:{}
}

const PessoaReducer = (state=inicial,action)=>{
    switch (action.type) {
        case 'pessoa':
            return {...state, pessoaDados:action.payload.pessoaDados}
            break;
    
        default:
            break;
    }
    return state
}

export default PessoaReducer