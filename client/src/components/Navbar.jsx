import React from 'react'
import Logo from "../img/logo.png"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src="{Logo}" alt="" />
        </div>
        <div className="links">link</div>
      </div>
    </div>
  )
}

export default Navbar