/* =======================================================
Importing necessary tools
=======================================================*/

import { useState, createContext,useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Marketplace from './components/Marketplace/Marketplace'
import Cart from './components/Cart/Cart'
import SigninForm from './components/Home/SigninForm';
import SignupForm from './components/Home/SignupForm';

import * as authService from '../src/services/authService'
import './App.css';
import AdminPanel from './components/Admin/AdminPanel';
import Landing from './components/Landing/Landing';


export const AuthedUserContext = createContext(null);


/* =======================================================
Helper functions
=======================================================*/


/* =======================================================
Component
=======================================================*/

function App() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState(authService.getUser()); // look for an active user

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  useEffect(() => {
    console.log('App user state:', user);
    if (!user) {
      navigate('/')
    }
  }, [user]);
  
  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <Landing />
        {/* <Navbar handleSignout={handleSignout}/> */}
        <Navbar handleSignout={handleSignout}/>
        <div className="appContainer">
          <Routes>
            {user ?  (
              <>
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<AdminPanel />} />
              </> 
            ) : (
              <>
                <Route path="/" element={<SigninForm setUser={setUser} />} />
                <Route path="/signup" element={<SignupForm setUser={setUser} />} />
              </>
            )}
            
          </Routes>
        </div>
      </AuthedUserContext.Provider>
    </>
  );
}

export default App;

/* =======================================================
In-Source Test
=======================================================*/

if (import.meta.vitest) {
  const { describe, it, expect, beforeEach, afterEach, vi } = import.meta.vitest

  describe('App - confirm elements render', () => {

    // Render Dom before each test; Clean up DOM after each test
    beforeEach(() => render(<Router><App/></Router>));
    afterEach(()=>cleanup())
  
    it('renders the App component', () => {
      const body = document.body
      expect(body).toBeInTheDocument();
    });

    it('renders the navigation bar', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument();
    });

    it('renders all buttons on page', ()=>{
      const loginButton = screen.getByRole('button', {name: /log in/i} )
      const signUpButton = screen.getByRole('button', {name: /Sign up/i} )
      
      expect(loginButton).toBeInTheDocument()
      expect(signUpButton).toBeInTheDocument()
    })

    it('page re renders after the user logs in', ()=>{

    })
  
    screen.debug()
  })

  // describe('App - confirm buttons function ', ()=>{

  //   // Render Dom before each test; Clean up DOM after each test
  //   beforeEach(() => render(<Router><App/></Router>));
  //   afterEach(()=>cleanup())    

  // })
}