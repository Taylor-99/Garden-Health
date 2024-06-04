
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Auth(props){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('');

    const navigate = useRouter()

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/signup', {
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
                console.log(data.token)
                console.log(data)
                props.setUser(data.createUser)
                navigate.replace('/createprofile')
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
            <h2> SignUp </h2>
            <br></br> 
            <Link href='/auth/login'>Already have an account, click to Login</Link>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={(e) => {
            e.preventDefault();
            setError('');
            handleSignUp()
            }}>
            <label htmlFor="username" >Username: </label>
            <input type="text" 
            name="username" 
            placeholder="Enter your username" 
            value={formData.username} 
            onChange={handleChange}/>

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
            value="Sign Up"/>
            </form>
        </section>     
        </div>
    )
}