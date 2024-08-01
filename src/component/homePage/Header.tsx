import React from 'react';
import './header.css'; 
// import Footer from './footer';
// import Tree from '../Tree/tree';

const Header : React.FC=()=> {
  return (
        <div> <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"gray"}}>
        <div className='container-fluid'>
          <div className='header'>
            <div className="logo">
              <a href="/">
                <img src="https://tse2.mm.bing.net/th?id=OIP.5Q5oX88vSpp2rOVEo2hKAQHaHa&pid=Api&P=0&h=220" alt="Logo" className="logo-image" />
              </a>
            </div>
  
            <div className='list'>
              <a className='navbar-brand active' href="/">Homepage</a>
              <a className='navbar-brand' href='/contact'>Contact</a>
              <a className='navbar-brand' href='/about'>About</a>
              <a className='navbar-brand' href='/register'>Register</a>
              <a className='navbar-brand' href='/tree'>Tree</a>
              <div className='input-group'>
                <div className="form-outline">
                  <input type="search" id="form1" className="form-control" placeholder="Search" />
                </div>
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </nav>
      {/* <Footer /> */}
    </div>
  );
}
export default Header;