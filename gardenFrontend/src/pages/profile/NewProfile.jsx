import React, { useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'

const CreateProfile = () => {
    const [profileData, setProfileData] = useState({
        fName: '',
        lName: '',
        image: '',
        city: '',
        state: '',
        gExperience: '',
        aExperience: '',
        bio: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/profile/createprofile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Important to include cookies
                body: JSON.stringify(profileData),
            });

            const data = await response.json();
            console.log(data)

            if (response.ok) {
                setSuccess('Profile created successfully');
                navigate.replace('/')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    };

    return (
        <div>
            <h2>Create Profile</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <form onSubmit={(e) => {
                e.preventDefault();
                setError('');
                setSuccess('');
                handleSubmit()
            }}>
                <input 
                type="text" 
                name="fName" 
                placeholder="First Name" 
                value={profileData.fName} 
                onChange={handleChange} 
                required />
                <br></br>
                <input 
                type="text" 
                name="lName" 
                placeholder="Last Name" 
                value={profileData.lName} 
                onChange={handleChange} />
                <br></br>
                <input 
                type="text" 
                name="image" 
                placeholder="Image URL" 
                value={profileData.image} 
                onChange={handleChange} />
                <br></br>
                <input 
                type="text" 
                name="city" 
                placeholder="City" 
                value={profileData.city} 
                onChange={handleChange} />
                <br></br>
                <input 
                type="text" 
                name="state" 
                placeholder="State" 
                value={profileData.state} 
                onChange={handleChange} />
                <br></br>
                <input 
                type="text" 
                name="gExperience" 
                placeholder="Gardening Experience" 
                value={profileData.gExperience} 
                onChange={handleChange} />
                <br></br>
                <input 
                type="text" 
                name="aExperience" 
                placeholder="Activity Experience" 
                value={profileData.aExperience} 
                onChange={handleChange} />
                <br></br>
                <textarea 
                name="bio" 
                placeholder="Bio" 
                value={profileData.bio} 
                onChange={handleChange}></textarea>
                <br></br>
                <br></br>
                <button type="submit">Create Profile</button>
            </form>
        </div>
    )
};

export default CreateProfile