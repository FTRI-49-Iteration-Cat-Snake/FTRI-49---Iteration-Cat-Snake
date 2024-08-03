import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./Home.module.css"

const SigninForm = (props) => {
    const navigate = useNavigate();
    // const [message, setMessage] = useState(['']);
    const [formData, setFormData] = useState({
    //   username: '',
    //   password: '',
    });
  
    // const updateMessage = (msg) => {
    //   setMessage(msg);
    // };
  
    const handleChange = (e) => {
    //   updateMessage('');
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const user = await authService.signin(formData);
    //     console.log(user);
    //     props.setUser(user);
    //     navigate('/game/basic-strategy');
    //   } catch (err) {
    //     updateMessage(err.message);
    //   }
    };
  

  
    return (
      <main>
        <div className = {styles.formHeader}>
          <h1>Log In</h1>
          {/* <p>{message}</p> */}
        </div>
        <div className={styles.formContainer}>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div>
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
          
            <div>
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
            <div>
              <button>Log In</button>
            </div>
          </form>
        </div>
        <div className={styles.formFooter}>
          <p>Need an account?</p>
          <button onClick={props.handleFormSwap}> Sign Up</button>    
        </div>
      </main>
    );
  };
  
  export default SigninForm;