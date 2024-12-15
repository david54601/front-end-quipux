import React, { useState } from 'react';
import { login } from '../../api/authService';
import { useFormState } from 'react-dom';


const Login =({onLoginSuccess})=>{
    const [username, setUsername]= useState('admin');
    const [password, setPassword]=useState('');

const handleSubmit =async(e) => {
    e.preventDefault();
    try{
        await login(username,password);
        onLoginSuccess();
    }catch(error){
        console.error('error en el login',error);
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <h2> iniciar sesion</h2>
            <div>
            <label>Usuario:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;



    


