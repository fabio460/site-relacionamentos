
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './Cadastro/Cadastro';
import Home from './Home/Home';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/cadastro' element={<Cadastro/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
