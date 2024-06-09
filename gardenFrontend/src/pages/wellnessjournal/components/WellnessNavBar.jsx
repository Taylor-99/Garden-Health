
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth';

const WellnessNavBar = () => {
    const router = useRouter();

    return (
            <nav>
                <ul className="flex justify-center" >
                    <li>
                        <Link href="/wellnessjournal/mood" className={`mr-4 ${router.pathname === '/plantJournal/garden' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>
                            Mood Log
                        </Link>
                    </li>
                    <li>
                        <Link href="/wellnessjournal/activity" className={`${router.pathname === '/plantJournal/Library' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`} >
                            Activity Log
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default withAuth(WellnessNavBar)