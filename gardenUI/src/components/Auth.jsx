import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function Auth(props){
    const [showLogin, setShowLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('');

    const navigate = useNavigate()


    const handleLogin = async (e) => {
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
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
                navigate('/')

            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:3000/auth/signup', {
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
                navigate('/createprofile')
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
            {
                showLogin?
                <section>
                    <h2 onClick={() => setShowLogin(!showLogin)}>
                        Login 
                        <br></br> 
                        <small>New user, click to Signup!</small>
                    </h2>

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
                </section>:
                 <section>
                 <h2 onClick={() => setShowLogin(!showLogin)}>
                    SignUp 
                    <br></br> 
                    <small>Already have an account, click to Login</small>
                </h2>

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
            }        
        </div>
    )
}