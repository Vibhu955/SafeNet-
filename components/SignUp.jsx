import React from 'react';
import './SignUp.css'; 


const SignUp = () => {
  const create = async () => {
    try {
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const name= document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const confirm = document.getElementById('confirm').value;
        const response = await fetch('http://localhost:8800/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({ name, username, password, email, confirm }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('User created successfully', data);
            alert('User created successfully');
            // viewAll();
        } else {
            console.error('Error creating user', data);
        }
    } catch (error) {
        console.error('Error during create user', error);
    }
};
  return (
    <div className="sign-up-container"> 
      <div className="sign-up-form"> 
        <h2>Sign Up</h2>
        <div>
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
          <input type="password" id="confirm" placeholder="Confirm Password" />
        </div>
        <button onClick={create}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
