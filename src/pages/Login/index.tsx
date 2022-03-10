import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {

const auth = useContext(AuthContext);

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
const handleLogin = async () => {
  if(email && password){
const isLogged = await auth.signin(email, password);
if(isLogged){
  navigate('/');
}else{
  alert('Você não está logado')
}
  }
}

  return(
    <div>
    <h2>Página Fechada</h2>
     
    <input 
    type="text" 
    value={ email } 
    onChange={e => setEmail(e.target.value)}
    placeholder="Digite seu e-mail" />

    <input 
    type="password" 
    value={ password } 
    onChange={e => setPassword(e.target.value)}
    placeholder="Digite sua senha" />

    <button onClick={handleLogin}>Login</button>
    </div>
  )
}