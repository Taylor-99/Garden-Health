
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const reminders = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [reminders, setReminders] = useState([]);

    const fetchReminders = async () => {

        try {
            const response = await fetch('http://localhost:4000/dash/reminders', {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                  }
            });

            const data = await response.json()
            setReminders(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    useEffect(() => {

        fetchReminders();

    }, []);

    const handleCompleteClick = async (reminderId) => {
        try {
            const response = await fetch(`http://localhost:4000/dash/reminders/update/${reminderId}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
            });

            if (response.ok) {
                // Fetch the latest reminders after completing a reminder
                await fetchReminders();
            } else {
                console.error('Failed to complete the reminder');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    if (isLoading) return <p>Loading...</p>
    if (!reminders || reminders.length === 0) return <p>No Reminders</p>;
    // console.log(reminders)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center"> Reminders </h1>
        <ul>
            {reminders && reminders.map((reminder, index) => {
                return (
                    <li className="bg-white rounded-lg shadow-lg p-4 mb-2 text-center">
                            <p className="text-lg font-bold mb-2" >{reminder.message}</p>
                            <input 
                            type="button" 
                            value="Complete" 
                            onClick={() => handleCompleteClick(reminder._id)}
                            disabled={reminder.completed}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4 cursor-pointer transition duration-300" />
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default reminders