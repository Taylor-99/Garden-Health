
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import NavBar from '../../components/NavBar.jsx';
import withAuth from '../../components/withAuth.jsx'

const CreatePlant = () => {

    const router = useRouter()

    const [plantFormData, setPlantFormData] = useState({
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

    const navigate = useRouter();

    const handleCreatePlant = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/garden/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(plantFormData),
            });

            await response.json();

            if (response.ok) {
                // Redirect or perform an action on successful login
                navigate.replace('/plantjournal/garden')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setPlantFormData({
            ...plantFormData, 
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">

        <NavBar pageName="Plant Journal" />

        <section className="mt-8">

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

            <h2 className="text-xl font-semibold mt-4 text-center" >Add a New Plant</h2>

            {error && <p className="text-red-500" >{error}</p>}

            <form onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handleCreatePlant()
            }} className="mt-4 space-y-4 mx-auto max-w-md" >

                <label htmlFor="plantName" className="block" >Plant Name: </label>
                <input type="text" 
                name="plantName" 
                placeholder="Enter Plant Name" 
                onChange={handleChange} 
                value={plantFormData.plantName} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="plantSpecies" className="block" >Plant Species: </label>
                <input type="text" 
                name="plantSpecies" 
                placeholder="Enter Plant Species" 
                onChange={handleChange} 
                value={plantFormData.plantSpecies} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="plantDate" className="block" >Date Planted: </label>
                <input type='date' 
                name="plantDate"  
                onChange={handleChange} 
                value={plantFormData.plantDate} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="watered" className="block" >Was it watered today: </label>
                <input type='text' 
                name="watered"  
                onChange={handleChange} 
                value={plantFormData.watered} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="plantImage" className="block" >Plant Image: </label>
                <input type='text' 
                name="plantImage"  
                placeholder="Upload image of your plant"
                onChange={handleChange} 
                value={plantFormData.plantImage} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="temperature" className="block" >Todays Temperature: </label>
                <input type='number' 
                name="temperature"  
                placeholder="Todays Temperature"
                onChange={handleChange} 
                value={plantFormData.temperature} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="rain" >Did it rain Today? </label>
                <input type='text' 
                name="rain"  
                placeholder="Rain"
                onChange={handleChange} 
                value={plantFormData.rain} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="health" className="block" >Plant health status: </label>
                <input type='text' 
                name="health"  
                placeholder="Status of Plant"
                onChange={handleChange} 
                value={plantFormData.health} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="fertilizer" className="block" >What fertilizer did you use: </label>
                <input type='text' 
                name="fertilizer"  
                placeholder="Fertilizer used"
                onChange={handleChange} 
                value={plantFormData.fertilizer} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="notes" className="block" >Any other notes: </label>
                <input type='text' 
                name="notes"  
                placeholder="Additional notes about plant"
                onChange={handleChange} 
                value={plantFormData.notes} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block"/>
                <br></br>
            </form>
        </section>
    </div>
  )
}

export default withAuth(CreatePlant)