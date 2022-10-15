import {combineReducers} from 'redux'
import PessoaReducer from './PessoaReducer'
import functionHandleLeftRight from './funcaoHendleLeftHight'
import SearchReducer from './SearchReducer'
export default combineReducers({
    PessoaReducer,
    functionHandleLeftRight,
    SearchReducer
})