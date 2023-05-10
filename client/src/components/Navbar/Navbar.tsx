import { MdOutlineFitnessCenter } from 'react-icons/md';
import React, { useState } from 'react';
import './Navbar.scss';
import { logo } from '../../assets/index';
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  const [navbarActive, setnavbarActive] = useState(false);

  const handleMenu = () => {
    setnavbarActive(!navbarActive);
  };

  return (
    <div className={!navbarActive ? 'Navbar' : 'Navbar active'}>
      <div className="Navbar__container">
        <div className="Navbar__container__logo">
          <img src={logo} alt="logo-workouttaf" onClick={
            () => {
              navigate('/');
            }
          }/>
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
                onClick={() => {
                  navigate('/login');
                }
                }
              >
                Entrar
              </button>
            </li>
          </ul>
          <div className="Hamburger__menu">
            <MdOutlineFitnessCenter
              className={!navbarActive ? 'menu' : 'menu active'}
              onClick={() => handleMenu()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
