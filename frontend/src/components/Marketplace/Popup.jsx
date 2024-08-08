/* =======================================================
Importing necessary tools
=======================================================*/

import React from 'react'

import { Routes, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';



/* =======================================================
Helper functions
=======================================================*/


/* =======================================================
Component
=======================================================*/

function Popup() {
    const [open, setOpen] = useState(false);
    



  return (
    <div>Popup</div>
  )
}

export default Popup

/* =======================================================
In-Source Test
=======================================================*/