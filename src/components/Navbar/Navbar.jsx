import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {

  return (
    <>
    <Routes>
        <Route/>
    </Routes>

    <div className='navbar'>
        <div><h3><Link to="/" style={{textDecoration:"none",color:"White"}}>Pet Onboarding</Link></h3></div>
        <div>
            <h3><Link to = "/" style={{textDecoration:"none",color:"White"}}>Home</Link></h3>
            <h3><Link to = "/listing-create" style={{textDecoration:"none",color:"White"}}>Add Data</Link></h3>
        </div>
    </div>

    </>
  );
};
export default Navbar;
