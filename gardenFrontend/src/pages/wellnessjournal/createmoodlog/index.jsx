
import NavBar from '../../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const CreateMoodLog = () => {

    const [moodFormData, setMoodFormData] = useState({
        overallMood: '',
        energyLevel: '',
        stressLevel: '',
        journalEntry: '',
        entry: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const navigate = useRouter();

    const handleCreateMoodLog = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/mood/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(moodFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("mood log created")

                // Redirect or perform an action on successful login
                navigate.replace('/wellnessjournal/mood')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setMoodFormData({
            ...moodFormData, 
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <NavBar pageName="Plant Journal" />

        <section>
            <h2>Log Mood</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handleCreateMoodLog()
            }}>
                <label htmlFor="overallmood" >Overall Mood: </label>
                <input type='text' 
                name="overallMood"
                onChange={handleChange} 
                value={moodFormData.overallMood} 
                />

                <br></br>

                <label htmlFor="energylevel" >Energy Level: </label>
                <input type="text" 
                name="energylevel"
                onChange={handleChange} 
                value={moodFormData.energyLevel} 
                />

                <br></br>

                <label htmlFor="stresslevel" >Stress Level: </label>
                <input type='text' 
                name="stresslevel"  
                onChange={handleChange} 
                value={moodFormData.stressLevel} 
                />

                <br></br>

                <label htmlFor="journalentry" >Would you like to make a journal entry? </label>
                <input type='text' 
                name="journalentry"  
                onChange={handleChange} 
                value={moodFormData.journalEntry} 
                />

                <br></br>

                <label htmlFor="entry" >Journal Entry: </label>
                <input type='text' 
                name="entry"  
                onChange={handleChange} 
                value={moodFormData.entry} 
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

export default withAuth(CreateMoodLog)