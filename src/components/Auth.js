import React, { useState } from 'react';
import { login, register } from '../services/authService';

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('trainer');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(email, password);
    } else {
      await register(name, email, password, userType);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Registro'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="trainer">Personal Trainer</option>
            <option value="athlete">Atleta</option>
          </select>
        )}
        <button type="submit">{isLogin ? 'Entrar' : 'Registrar'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Faça login'}
      </p>
    </div>
  );
}

export default Authentication;