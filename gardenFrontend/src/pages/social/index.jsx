
import NavBar from '../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../components/withAuth.jsx';

const Socail = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [socialPosts, setSocialPosts] = useState([]);
    const [socialPostsReplies, setSocialPostsReplies] = useState([]);

    const fetchPosts = async () => {

        try {
            const response = await fetch('http://localhost:4000/social', {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setSocialPosts(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    // const fetchPostsReplies = async () => {

    //     try {
    //         const response = await fetch('http://localhost:4000/social', {
    //             credentials: 'include',
    //             headers: {
    //                 Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
    //             }
    //         });

    //         const data = await response.json()
    //         setSocialPosts(data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // };
    
    useEffect(() => {

        fetchPosts();

    }, []);

    console.log(socialPosts)

  return (
    <div>
        <NavBar pageName='Social' />

        <Link href="/wellnessjournal/createpost" className="text-blue-500 hover:text-blue-700 font-semibold">
             Create a Post
        </Link>
        
    </div>
  )
}

export default withAuth(Socail)