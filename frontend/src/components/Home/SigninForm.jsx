/* =======================================================
Importing necessary tools
=======================================================*/

import { useState } from 'react';
import * as authService from '../../services/authService'
import { Link, Routes, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';


import styles from "./Form.module.css"

/* =======================================================
Helper functions
=======================================================*/

/* =======================================================
Component
=======================================================*/

function SigninForm(props){
    const navigate = useNavigate();
    const [message, setMessage] = useState(['']);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const updateMessage = (msg) => {
      setMessage(msg);
    };
  
    const handleChange = (e) => {
      updateMessage('');
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => { 
      e.preventDefault(e)

      console.log('submit')
      try {
        const user = await authService.signin(formData);
        console.log(user);
        props.setUser(user);
        navigate('/marketplace');
      } catch (err) {
        updateMessage(err.message);
      }
    };

    const handleFormSwap = () => {
      navigate('/signup'); // Adjust this as needed
    };

    return (
      <>
        <div className = {styles.mainContainer}>
          
          <div className={styles.formContainer}>
              <div className = {styles.formHeader}>
                <h1>Log In</h1>
                <p>{message}</p>
              </div>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className = {styles.inputContainer}>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="username"
                    value={formData.username}
                    name="username"
                    onChange={handleChange}
                  />
                </div>
            
                <div className = {styles.inputContainer}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  autoComplete="off"
                  id="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className = {styles.inputContainer}>
                <button >Log In</button>
              </div>
            </form>
          </div>
          <div className={styles.formFooter}>
            <p>Need an account?</p>
            <button onClick={handleFormSwap}> Sign Up</button>    
          </div>
        </div>
      </>
    );
  };
  
  export default SigninForm;

  /* =======================================================
In-Source Test
=======================================================*/