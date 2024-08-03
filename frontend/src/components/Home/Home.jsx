/* =======================================================
Imports
=======================================================*/

import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';


/* =======================================================
Helper Functions
=======================================================*/

/* =======================================================
Component
=======================================================*/

function Home(props) {
  const [loginForm,setLoginForm] = useState(1)
  
  const handleFormSwap = () => {
      setLoginForm(loginForm*-1)
      // console.log(loginForm)
  }
  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <>
        {/* <p>{JSON.stringify(props)}</p> */}
        <div>
            {loginForm > 0 ? (
                <>
                    <SigninForm setUser={props.setUser} handleFormSwap={handleFormSwap}/>
                </>
            ):(
                <SignupForm setUser={props.setUser} handleFormSwap={handleFormSwap}/>
            )}
        </div>
      </>
      </>
  );
}

export default Home;
