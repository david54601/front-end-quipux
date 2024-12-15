import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); 
            window.location.href = '/listas';
        } else {
                      alert('Credenciales inválidas');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
             type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
               type="password"
               placeholder="Contraseña"
             value={password}
               onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}
export default LoginPage;
