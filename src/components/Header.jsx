import React from 'react';

import { public_key } from '../data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import '../style/header.css';

const Header = () => {

  const handleCopy = () => {

    let myInput = document.getElementById('myinput')

    myInput.select()
    myInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
  }

  return ( 
    <>
      <header>
        <div className="icons-container">
          <a href="https://github.com/BlackH3art/stages-form" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faGithub} color="white"/> </a>
          <div className="info-container">
            <p>You can support this project sending some bitcoins :)</p>
            <div className="header-input-container">
              <label className="bitcoin-label"><FontAwesomeIcon icon={faBitcoin} /></label> 
              <input className="myInput" id="myinput" type="text" value={public_key}/> 
              <button onClick={handleCopy} className="btn btn-outline-light"> <FontAwesomeIcon icon={faCopy} /> </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
 
export default Header;