
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';

const Garden = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [gardenData, setGardenData] = useState([]);

    useEffect(() => {
        const fetchGarden = async () => {

            try {
                const response = await fetch('http://localhost:4000/garden', {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                      }
                });

                const data = await response.json()
                setGardenData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchGarden();

    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!gardenData) return <p>No plants to show</p>

    console.log(gardenData)

    return (
        <div>
            <h1> Your Garden </h1>
                <ul>
                    {gardenData && gardenData.map((plant, index) => {
                        return (
                            <li>
                                Plant
                            </li>
                        );
                    })}
                    <li>
                        <Link>
                            href="/plantjournal/createplant"
                        </Link>
                    </li>

                </ul>
        </div>
      )
}

export default Garden;