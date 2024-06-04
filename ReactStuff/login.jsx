
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


export default function Auth(props){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('');

    const navigate = useRouter()


    const handleLogin = async (e) => {
        try {

            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Cookies.set('token', data.token);
                // Redirect or perform an action on successful login
                props.setUser(data.user)
                navigate.replace('/dashboard')

            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <section>
                <h2> Login </h2>
                <br></br> 
                <Link href='/auth/signup'>New user, click to Signup!</Link>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleLogin()
                }}>
                    <label htmlFor="username" >Username: </label>
                    <input type="text" 
                    name="username" 
                    placeholder="Enter your username" 
                    value={formData.username} 
                    onChange={handleChange} />

                    <br></br>

                    <label htmlFor="password" >Password: </label>
                    <input type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={formData.password} 
                    onChange={handleChange} />

                    <br></br>
                    <br></br>

                    <input type="submit" 
                    value="LogIn" />
                </form>
            </section>
        </div>
    )
}