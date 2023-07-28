"use client"


import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

import Image from 'next/image';
import { set } from 'mongoose';


const Navbar = () => {

  const router = useRouter();
  const [islogin, setislogin] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [user, setuser] = useState({} as any);

  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Saiu com sucesso.');
      setislogin(false);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  const checkLogin = async () => {
    try {
      setisLoading(true);
      const res = await axios.get('/api/users/me');
      setuser(res.data.data);
      setislogin(true);
    } catch (error: any) {
      setislogin(false);
      console.log(error.response.data.message);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    checkLogin();
  }, [pathname])



  return (
    <div className='Navbar'>
      <div className="Navbar__container">
        <div className="Navbar__logo-container">
          <Image src={'/assets/logo-wr.png'} alt="logo-workouttaf" fill className='Navbar__logo-img' />
        </div>
        {!isLoading && <div className='Navbar__links'>
          <div className='Navbar__Login-Logout-container'>
            {
              islogin ? (
                <div className='Navbar__name-container'>
                  <h2>{user.firstName} {user.lastName}</h2>
                <button
                  onClick={() => handleLogout()}
                  className='Navbar__Login-Logout-btn'>Logout</button>
                  </div>
              ) : (
                <button className='Navbar__Login-Logout-btn'
                  onClick={() => router.push('/login')}
                >Login</button>
              )

            }
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar