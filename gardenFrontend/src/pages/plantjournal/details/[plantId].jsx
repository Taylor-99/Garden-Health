
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import PlantNavBar from '../components/PlantNavBar'


const PlantDetails = () => {
    
    const router = useRouter();
    const { plantId } = router.query; // Get the dynamic id from the URL

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);
    const [plant, setPlant] = useState(null);

    const fetchPlantDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/garden/details/${plantId}`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });
    
            const data = await response.json();
            setPlant(data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    useEffect(() => {
        if (plantId) {
            fetchPlantDetails();
        }
    }, [plantId]);

    const wasWatered = async () => {
        try {
            const response = await fetch(`http://localhost:4000/garden/water/${plantId}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });
    
            if (response.ok) {
                // Fetch the updated details after plant was watered
                await fetchPlantDetails();
            } else {
                console.error('Failed to water');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    if (isLoading) return <p>Loading...</p>
    if (!plant) return <p>No Plant data</p>

    console.log(plant)

    function setDate(dateString){

        // Create a Date object from the date string
        const date = new Date(dateString);

        // Get the individual components of the date
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();

        let updatedDate = `${month}/${day}/${year}`

        return updatedDate
    };

    return (
        <div>
            <NavBar pageName="Plant Journal" />
            <br></br>
            <PlantNavBar />
            <br></br>
            
            <div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden h-64 flex">

                    <div>
                        <img src={plant[1][plant[1].length-1].plantImage} className="w-48 h-48 p-2 md:w-auto" alt="Plant" />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold">{plant[0].plantName}</h2>
                        <h3 className="text-lg font-semibold">{plant[0].plantSpecies}</h3>
                        <p className="mb-2"><span className="font-semibold">Date planted: </span> {setDate(plant[0].plantDate)}</p>
                        <p className="mb-2"><span className="font-semibold">Last update: </span>{setDate(plant[1][plant[1].length-1].updatedAt)}</p>
                        <p className="mb-2"><span className="font-semibold">Notes: </span> {plant[1][plant[1].length-1].notes}</p>
                        <br></br>
                        <input 
                            type="button" 
                            value="Water Plant"
                            onClick={() => wasWatered()}
                            disabled={plant[0].watered}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        />
                    </div>
                </div>

                <br></br>
                <h2 className="text-2xl font-bold mb-4" >Updates</h2>
                <br></br>

                <div>
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {plant[1] && plant[1].map((update, index) => {
                            return (
                                <li key={index} className="bg-white p-4 rounded-lg shadow-md w-45" >
                                    <img src={update.plantImage} alt={plant[0].plantName} className="w-full h-32 object-cover rounded-md mb-2" ></img>
                                    <h2 className="text-lg font-semibold">Update from: { setDate(update.updatedAt)}</h2>
                                    <p>Health: {update.health}</p>
                                    <div>
                                        <p className="text-gray-600" >Notes: {update.notes}</p>
                                        <p className="text-gray-600" >Fertilizer: {update.fertilizer}</p>
                                        <p className="text-gray-600" >Temperature: {update.temperature}°</p>
                                        <p className="text-gray-600" >Rain: {update.rain === true ? "Yes" : "No"}</p>
                                    </div>

                                    <br></br>
                                </li>
                            );
                        })}
                        <li className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-45" >
                            <Link href={`/plantjournal/update/${plant[0]._id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
                                Add Update
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withAuth(PlantDetails)