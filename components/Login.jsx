import { useState } from 'react';
import '..//components/Login.css';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import Background from './Background';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const history = useHistory();

const handleLogin = async(e) => {
e.preventDefault();
console.log('Logging in with:', username, password);


    try {
      const response = await fetch('http://localhost:8800/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // if(!data.isAdmin){
        //   return console.error('You are not Admin');
        // } 
        
        console.log('Login successful', data);

        
        Cookies.set('token', data.token, { expires: 7 });

    
        history.push('/');
      } else {
        console.error('Login failed', data);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };


return (
    
<div className='login'>
    {/* <Background/> */}
    <h1 className='heading'>Login Page</h1>
    <form onSubmit={handleLogin}>
    <div>
        <label htmlFor="username">Username:  </label>
        <br></br>
        <input 
        placeholder='Username'
        type="text" 
        id="username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        />
    </div>
    <div>
        <label htmlFor="password">Password:  </label>
        <br></br>
        <input 
        placeholder='Password'
        type="password" 
        id="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
    </div>
    <button type="submit">Login</button>
    </form>
</div>
);
}

export default Login;
