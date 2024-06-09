
import NavBar from '../../components/NavBar.jsx'
import WellnessNavBar from '../components/WellnessNavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const Mood = () => {
    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [moodLogData, setMoodLogData] = useState([]);

    const fetchMoodLogs = async () => {

        try {
            const response = await fetch('http://localhost:4000/mood', {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setMoodLogData(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    useEffect(() => {

        fetchMoodLogs();

    }, []);

    console.log(moodLogData)

  return (
    <div>
        <NavBar pageName='Wellness Journal'/>
        <br></br>
        <WellnessNavBar />
        <br></br>

        <h1>Mood Log</h1>

        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >

            {moodLogData && moodLogData.map((mood, index) => {
                return (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-md w-45" >
                            <p>Log Date: {plant[0].updatedAt}</p>

                        <br></br>
                    </li>
                );
            })}
            <li className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-45" >
                <Link href="/wellnessjournal/createmoodlog" className="text-blue-500 hover:text-blue-700 font-semibold">
                    Log Mood
                </Link>
            </li>

        </ul>

    </div>
  )
}

export default withAuth(Mood);