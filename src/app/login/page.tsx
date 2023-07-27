"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";


import './Login.scss'
const Login = () => {

    const [user, setuser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const onLogin = async (e: any) => {
        e.preventDefault();
        try {
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='Login'>
            <div className='Login__container'>
                <h1 className='Login__title'>Login</h1>
            </div>

        </div>
    )
}

export default Login;