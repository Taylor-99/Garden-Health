
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import NavBar from '../../components/NavBar'
import withAuth from '../../components/withAuth';

const UpdatePlant = () => {

    const router = useRouter();

    const [updateFormData, setUpdateFormData] = useState({
        plantName: '',
        plantSpecies: '',
        watered: '',
        plantDate: '',
        plantImage: '',
        temperature: '',
        rain: '',
        health: '',
        fertilizer: '',
        notes: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);
    const { plantId } = router.query; // Get the dynamic id from the URL

    const navigate = useRouter();

    const handleUpdatePlant = async () => {
        try {

            console.log("Sending data")
            const response = await fetch(`http://localhost:4000/garden/update/${plantId}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(updateFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("plant updated")

                // Redirect or perform an action on successful login
                navigate.replace(`/plantjournal/details/${plantId}`)
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    };

    const handleChange = (e) => {
        setUpdateFormData({
            ...updateFormData, 
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto ">
        <NavBar pageName="Plant Journal" />

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>
        
        <section className="mt-8">

            <h2 className="text-xl font-semibold mt-4 text-center"> Update Plant </h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handleUpdatePlant()
            }} className="mt-4 space-y-4 mx-auto max-w-md">
                
                <label htmlFor="plantImage" className="block">Plant Image: </label>
                <input type='text' 
                name="plantImage"  
                placeholder="Upload image of your plant"
                onChange={handleChange} 
                value={updateFormData.plantImage} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="temperature" className="block">Todays Temperature: </label>
                <input type='number' 
                name="temperature"  
                placeholder="Todays Temperature"
                onChange={handleChange} 
                value={updateFormData.temperature} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="rain" className="block">Did it rain Today? </label>
                <input type='text' 
                name="rain"  
                placeholder="Rain"
                onChange={handleChange} 
                value={updateFormData.rain} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="health" className="block">Plant health status: </label>
                <input type='text' 
                name="health"  
                placeholder="Status of Plant"
                onChange={handleChange} 
                value={updateFormData.health} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="fertilizer" className="block">What fertilizer did you use: </label>
                <input type='text' 
                name="fertilizer"  
                placeholder="Fertilizer used"
                onChange={handleChange} 
                value={updateFormData.fertilizer} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="notes" className="block">Any other notes: </label>
                <input type='text' 
                name="notes"  
                placeholder="Additional notes about plant"
                onChange={handleChange} 
                value={updateFormData.notes} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>
                <br></br>

                <input type="submit" 
                className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block"
                value="Submit" />
            </form>
        </section>
    </div>
  )
}

export default withAuth(UpdatePlant)