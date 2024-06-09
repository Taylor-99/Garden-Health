
import NavBar from '../../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const CreatePost = () => {

    const [postFormData, setPostFormData] = useState({
        post: "",
        image: "",
    }); 

    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const navigate = useRouter();

    const handleCreatePost = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/social/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(postFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("post created")

                // Redirect or perform an action on successful login
                navigate.replace('/social')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setPostFormData({
            ...postFormData, 
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <NavBar pageName='Social' />

        <section>
            <h2>Log Mood</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Link href='/social'> Go back </Link>

            <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleCreatePost()
                }}>

                <input type='text' 
                name="post"
                onChange={handleChange}
                placeholder="What's on your Mind? Share your ideas, events or achievements"
                value={postFormData.post} 
                />

                <br></br>

                <input type="text" 
                name="image"
                onChange={handleChange} 
                placeholder='Upload an image'
                value={postFormData.image} 
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

export default withAuth(CreatePost);