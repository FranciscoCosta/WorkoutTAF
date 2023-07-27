import React from 'react';

import './Navbar.scss';

import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="Navbar__container">
        <div className="Navbar__logo-container">
          <Image src={'/assets/logo-wr.png'} alt="logo-workouttaf" fill className='Navbar__logo-img' />
          </div>
          </div>
          <div className='Navbar__links'>
            
          </div>
    </div>
  )
}

export default Navbar