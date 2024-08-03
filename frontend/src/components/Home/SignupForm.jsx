import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import * as authService from '../../services/authService';

import styles from "./Home.module.css"

const SignupForm = (props) => {
  const navigate = useNavigate();
//   const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     passwordConf: '',
  });

//   const updateMessage = (msg) => {
//     setMessage(msg);
//   };

  const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newUserResponse = await authService.signup(formData);
//       // console.log(newUserResponse)
//       props.setUser(newUserResponse.user);
//       navigate('/game/basic-strategy');
//     } catch (err) {
//       updateMessage(err.message);
//     }
  };

//   const { username, password, passwordConf } = formData;

  const isFormInvalid = () => {
    // return !(username && password && password === passwordConf);
  };

  return (
    <main>
      {/* <p>signUp comp{JSON.stringify(props)}</p> */}
      <div className = {styles.formHeader}>
        <h1>Sign Up</h1>
        {/* <p>{message}</p> */}
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              // value={username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              // value={password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input
              type="password"
              id="confirm"
              // value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
            />
          </div>
          <div>
            <button disabled={isFormInvalid()}>Create Account</button>
          </div>
        </form>
      </div>
      <div className={styles.formFooter}>
        <Link to="/">
          <button onClick={props.handleFormSwap}>Back to Login</button>
        </Link>
      </div>
    </main>
  );
};

export default SignupForm;