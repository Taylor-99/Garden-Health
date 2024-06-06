
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const challenges = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [challenge, setChallenge] = useState([]);

    useEffect(() => {
        const fetchChallenges = async () => {

            try {
                console.log("fetching Challege data")
                const response = await fetch('http://localhost:4000/dash/challenge', {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                      }
                });

                const data = await response.json()
                setChallenge(data)
                setLoading(false)
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchChallenges();

    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!challenge) return <p>No Challenge</p>
    console.log(challenge)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4" >
        <h1 className="text-2xl font-bold mb-4 text-center" >Challenge</h1>
        <div className="text-center">
            <p className="text-gray-700 mb-4">{challenge.description}</p>
            <input type="button" value="Complete" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4 cursor-pointer transition duration-300" />
        </div>
    </div>
  )
}

export default challenges