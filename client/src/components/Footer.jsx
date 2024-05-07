import React from 'react';
import Logo from '../img/logo.png';

function footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ❤️ and <b>React.js</b>
      </span>
    </footer>
  )
}

export default footer