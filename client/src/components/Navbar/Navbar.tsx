import React from 'react';
import './Navbar.scss';
import { logo } from '../../assets/index';

function Navbar() {
  const currentUser = localStorage.getItem('currentUser');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__container__logo">
          <img src={logo} alt="logo-workouttaf" />
        </div>
        <div className="Navbar__container__links">
          <ul>
            <div className="Links__container">
              <li>Home</li>
              <div className="Links__bar" />
            </div>
            <div className="Links__container">
              <li>Serviços</li>
              <div className="Links__bar" />
            </div>
            <div className="Links__container">
              <li>Contato</li>
              <div className="Links__bar" />
            </div>
            <li>
              <button
                type="button"
              >
                Registrar
              </button>
            </li>
            <li>
              <button
                type="button"
              >
                Entrar
              </button>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
