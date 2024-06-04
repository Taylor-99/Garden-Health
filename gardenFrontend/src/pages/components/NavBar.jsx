
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const NavBar = () => {

    const navigate = useRouter();

    const handleLogout = () => {
        Cookies.remove('token');
        navigate.replace('/login');
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
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