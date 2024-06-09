
import NavBar from '../../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const CreateActivityLog = () => {

    const [activityFormData, setActivityFormData] = useState({
        activity: '',
        duration: '',
        outdoors: '',
        activity_mood: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const navigate = useRouter();

    const handleCreateActivityLog = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/activity/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(activityFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("activity log created")

                // Redirect or perform an action on successful login
                navigate.replace('/wellnessjournal/activity')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setActivityFormData({
            ...activityFormData, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <NavBar pageName="Plant Journal" />

            <section>
                <h2>Log Mood</h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <Link href='/wellnessjournal/activity'> Go Back </Link>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleCreateMoodLog()
                }}>
                    <label htmlFor="activity" >Activity: </label>
                    <input type='text' 
                    name="activity"
                    placeholder='What activity did you complete'
                    onChange={handleChange} 
                    value={activityFormData.activity} 
                    />

                    <br></br>

                    <label htmlFor="duration" >Duration of the activity: </label>
                    <input type="text" 
                    name="duration"
                    onChange={handleChange} 
                    value={activityFormData.duration} 
                    />

                    <br></br>

                    <label htmlFor="outdoors" >Was this activity outdoors? </label>
                    <input type='text' 
                    name="outdoors"  
                    onChange={handleChange} 
                    value={activityFormData.outdoors} 
                    />

                    <br></br>

                    <label htmlFor="activitymood" >How did you feel after the activity? </label>
                    <input type='text' 
                    name="activitymood"  
                    onChange={handleChange} 
                    value={activityFormData.activity_mood} 
                    />

                    <br></br>
                    <br></br>

                    <input type="submit" 
                    value="Submit" />
                </form>
            </section>
        </div>
    )
}

export default withAuth(CreateActivityLog);