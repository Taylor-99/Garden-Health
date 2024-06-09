
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
    <div>
        <NavBar pageName="Plant Journal" />

        <section>
                    <h2> Update Plant </h2>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setError('');
                        handleUpdatePlant()
                    }}>
                        <label htmlFor="plantImage" >Plant Image: </label>
                        <input type='text' 
                        name="plantImage"  
                        placeholder="Upload image of your plant"
                        onChange={handleChange} 
                        value={updateFormData.plantImage} 
                        />

                        <br></br>

                        <label htmlFor="temperature" >Todays Temperature: </label>
                        <input type='number' 
                        name="temperature"  
                        placeholder="Todays Temperature"
                        onChange={handleChange} 
                        value={updateFormData.temperature} 
                        />

                        <br></br>

                        <label htmlFor="rain" >Did it rain Today? </label>
                        <input type='text' 
                        name="rain"  
                        placeholder="Rain"
                        onChange={handleChange} 
                        value={updateFormData.rain} 
                        />

                        <br></br>

                        <label htmlFor="health" >Plant health status: </label>
                        <input type='text' 
                        name="health"  
                        placeholder="Status of Plant"
                        onChange={handleChange} 
                        value={updateFormData.health} 
                        />

                        <br></br>

                        <label htmlFor="fertilizer" >What fertilizer did you use: </label>
                        <input type='text' 
                        name="fertilizer"  
                        placeholder="Fertilizer used"
                        onChange={handleChange} 
                        value={updateFormData.fertilizer} 
                        />

                        <br></br>

                        <label htmlFor="notes" >Any other notes: </label>
                        <input type='text' 
                        name="notes"  
                        placeholder="Additional notes about plant"
                        onChange={handleChange} 
                        value={updateFormData.notes} 
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

export default withAuth(UpdatePlant)