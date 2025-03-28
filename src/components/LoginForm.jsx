import React from 'react';

const LoginForm = ({ email, password, setEmail, setPassword, handleLogin, message }) => (
  <div className="container">
    <h1>Login</h1>
    <form onSubmit={handleLogin} className="login-form">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
    {message && <p className="message">{message}</p>}
    <p className="hint">Hint: Use eve.holt@reqres.in / cityslicka</p>
  </div>
);

export default LoginForm;
