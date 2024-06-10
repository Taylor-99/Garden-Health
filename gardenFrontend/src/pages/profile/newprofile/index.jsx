import React, { useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import withAuth from '../../components/withAuth';

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
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto" >

            <h2 className="text-xl font-semibold mt-4 text-center" >Create Profile</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form onSubmit={(e) => {
                e.preventDefault();
                setError('');
                setSuccess('');
                handleSubmit()
            }} className="mt-4 space-y-4 mx-auto max-w-md">

                <input 
                type="text" 
                name="fName" 
                placeholder="First Name" 
                value={profileData.fName} 
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600" 
                required />

                <br></br>

                <input 
                type="text" 
                name="lName" 
                placeholder="Last Name" 
                value={profileData.lName} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input 
                type="text" 
                name="image" 
                placeholder="Image URL" 
                value={profileData.image} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input 
                type="text" 
                name="city" 
                placeholder="City" 
                value={profileData.city} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input 
                type="text" 
                name="state" 
                placeholder="State" 
                value={profileData.state} 
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                 />

                <br></br>

                <input 
                type="text" 
                name="gExperience" 
                placeholder="Gardening Experience" 
                value={profileData.gExperience} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input 
                type="text" 
                name="aExperience" 
                placeholder="Activity Experience" 
                value={profileData.aExperience} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <textarea 
                name="bio" 
                placeholder="Bio" 
                value={profileData.bio} 
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600" 
                ></textarea>

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block" />
            </form>
        </div>
    )
};

export default withAuth(CreateProfile)