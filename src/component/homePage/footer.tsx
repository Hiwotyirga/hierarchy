import React from 'react'
import './footer.css'

const Footer :React.FC=()=> {
  return (
    <div className='footer' >
      <footer className="bg-body-tertiary text-center text-lg-start">
  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>
    </div>
  )
}
export default Footer;
