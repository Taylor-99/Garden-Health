
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth';

const PlantNavBar = () => {
    const router = useRouter();

    return (
            <nav>
                <ul className="flex justify-center" >
                    <li>
                        <Link href="/plantjournal/" className={`mr-4 ${router.pathname === '/plantJournal/garden' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>
                            Your garden
                        </Link>
                    </li>
                    <li>
                        <Link href="/plantjournal/library" className={`${router.pathname === '/plantJournal/Library' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`} >
                            Plant Library
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default withAuth(PlantNavBar)