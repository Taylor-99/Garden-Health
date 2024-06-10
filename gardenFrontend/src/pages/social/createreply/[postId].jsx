
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import NavBar from '../../components/NavBar';

const CreateReply = () => {

    const router = useRouter();
    const { postId } = router.query; // Get the dynamic id from the URL

    const [replyForm, setReplyForm] = useState({
        post: "",
        image: "",
    });

    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useRouter();

    const fetchPost = async () => {

        try {
            console.log("id = ", postId)
            const response = await fetch(`http://localhost:4000/social/post/${postId}`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setPost(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    useEffect(() => {

        fetchPost();

    }, [postId]);

    const handlePostReply = async () => {
        try {

            const response = await fetch(`http://localhost:4000/social/create/${postId}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(replyForm),
            });

            await response.json();

            if (response.ok) {
                console.log("reply created")

                // Redirect or perform an action on successful login
                navigate.replace(`/social/replies/${postId}`)
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
    };


  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto" >
        <NavBar pageName="Social" />

        <br></br>

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

        <br></br>
        <br></br>

        <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full" >
            <div className="flex items-center mb-2" >
                <img src={ post.userImage } className="w-10 h-10 rounded-full mr-2" alt="User Avatar" />
                <p  className="font-semibold" >{ post.userName }</p>
            </div>
            <br></br>
            <div className="max-w-screen-md w-full" >
                <p className="mb-4 text-center" >{post.post}</p>
                
                <img src={post.image} className="w-full rounded-lg mb-4 mx-auto" />
            </div>
        </div>

        <section className="mt-8">
            <h2 className="text-xl font-semibold mt-4 text-center">Create Reply</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handlePostReply()
                }} className="mt-4 space-y-4 mx-auto max-w-md">

                <input type='text' 
                name="post"
                onChange={handleChange}
                placeholder="Reply to this post"
                value={replyForm.post} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input type="text" 
                name="image"
                onChange={handleChange} 
                placeholder='Upload an image'
                value={replyForm.image} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block" />

            </form>
        </section>


    </div>
  )
}

export default withAuth(CreateReply)