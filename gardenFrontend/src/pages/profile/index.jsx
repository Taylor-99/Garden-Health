
import NavBar from '../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../components/withAuth.jsx';

const ShowProfile = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [userProfile, setUserProfile] = useState([]);

    const getProfile = async () => {

        try {
            const response = await fetch('http://localhost:4000/profile', {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setUserProfile(data[0])
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    useEffect(() => {

        getProfile();

    }, []);

    console.log(userProfile)

  return (
    <div>
        <NavBar pageName = "Profile" />

        <h1>Profile</h1>

    </div>
  )
}

export default withAuth(ShowProfile)