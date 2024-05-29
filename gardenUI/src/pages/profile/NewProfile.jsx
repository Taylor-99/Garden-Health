import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Profile = () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:5000/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Important to include cookies
                body: JSON.stringify(profileData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Profile created successfully');
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
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={profileData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={profileData.lastName} onChange={handleChange} />
                <input type="text" name="username" placeholder="Username" value={profileData.username} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" value={profileData.image} onChange={handleChange} />
                <input type="text" name="city" placeholder="City" value={profileData.city} onChange={handleChange} />
                <input type="text" name="state" placeholder="State" value={profileData.state} onChange={handleChange} />
                <input type="text" name="gardeningExperience" placeholder="Gardening Experience" value={profileData.gardeningExperience} onChange={handleChange} />
                <input type="text" name="activityExperience" placeholder="Activity Experience" value={profileData.activityExperience} onChange={handleChange} />
                <textarea name="bio" placeholder="Bio" value={profileData.bio} onChange={handleChange}></textarea>
                <input type="text" name="level" placeholder="Level" value={profileData.level} onChange={handleChange} />
                <button type="submit">Create Profile</button>
            </form>
        </div>
    )
};