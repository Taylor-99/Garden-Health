
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import NavBar from '../../components/NavBar.jsx';
import withAuth from '../../components/withAuth.jsx'

const CreatePlant = () => {

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
                console.log("plant created")

                // Redirect or perform an action on successful login
                navigate.replace('/plantjournal')
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
    <div>
        <NavBar pageName="Plant Journal" />

        <section>
                    <h2>Add a New Plant</h2>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setError('');
                        handleCreatePlant()
                    }}>
                        <label htmlFor="plantName" >Plant Name: </label>
                        <input type="text" 
                        name="plantName" 
                        placeholder="Enter Plant Name" 
                        onChange={handleChange} 
                        value={plantFormData.plantName} 
                        />

                        <br></br>

                        <label htmlFor="plantSpecies" >Plant Species: </label>
                        <input type="text" 
                        name="plantSpecies" 
                        placeholder="Enter Plant Species" 
                        onChange={handleChange} 
                        value={plantFormData.plantSpecies} 
                        />

                        <br></br>

                        <label htmlFor="plantDate" >Date Planted: </label>
                        <input type='date' 
                        name="plantDate"  
                        onChange={handleChange} 
                        value={plantFormData.plantDate} 
                        />

                        <br></br>

                        <label htmlFor="watered" >Was it watered today: </label>
                        <input type='text' 
                        name="watered"  
                        onChange={handleChange} 
                        value={plantFormData.watered} 
                        />

                        <br></br>

                        <label htmlFor="plantImage" >Plant Image: </label>
                        <input type='text' 
                        name="plantImage"  
                        placeholder="Upload image of your plant"
                        onChange={handleChange} 
                        value={plantFormData.plantImage} 
                        />

                        <br></br>

                        <label htmlFor="temperature" >Todays Temperature: </label>
                        <input type='number' 
                        name="temperature"  
                        placeholder="Todays Temperature"
                        onChange={handleChange} 
                        value={plantFormData.temperature} 
                        />

                        <br></br>

                        <label htmlFor="rain" >Did it rain Today? </label>
                        <input type='text' 
                        name="rain"  
                        placeholder="Rain"
                        onChange={handleChange} 
                        value={plantFormData.rain} 
                        />

                        <br></br>

                        <label htmlFor="health" >Plant health status: </label>
                        <input type='text' 
                        name="health"  
                        placeholder="Status of Plant"
                        onChange={handleChange} 
                        value={plantFormData.health} 
                        />

                        <br></br>

                        <label htmlFor="fertilizer" >What fertilizer did you use: </label>
                        <input type='text' 
                        name="fertilizer"  
                        placeholder="Fertilizer used"
                        onChange={handleChange} 
                        value={plantFormData.fertilizer} 
                        />

                        <br></br>

                        <label htmlFor="notes" >Any other notes: </label>
                        <input type='text' 
                        name="notes"  
                        placeholder="Additional notes about plant"
                        onChange={handleChange} 
                        value={plantFormData.notes} 
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

export default withAuth(CreatePlant)