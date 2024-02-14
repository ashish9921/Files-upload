import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Home from '../home/Home';
import "../Login/Login.css"

function Login() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", { email, password });
      setToken(response.data.token);
      alert('Login successful.');
    } catch (error) {
      console.error(error);
      alert('Login failed.');
    }
  };

  return (
    <>
      {

        token ? <Home token={token} /> : <div className="signup-form-container">
          <div className='head'>
            Login
          </div>
          <form onSubmit={handleSubmit} className="signup-form">

            <label className='labelinline'>

              <input
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                style={{ width: '19rem' }}
                onChange={(e) => setEmail(e.target.value)}

              />
            </label>
            <label className='labelinline'>

              <input
                className='inputtext'
                type="password"
                name="password"
                placeholder='Password'
                style={{ width: '19rem' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </label>
            <button className='col' style={{ width: '20.9rem' }} type="submit">Login</button>
          </form>

        </div>
      }
    </>
  )
}

export default Login 