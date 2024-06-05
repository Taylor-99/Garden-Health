
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const NavBar = () => {

    const navigate = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/logout', {
                method: 'get',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                navigate.replace('/auth')

            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;